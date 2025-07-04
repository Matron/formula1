import axios from 'axios';

const BASE_URL = 'https://api.jolpi.ca/ergast/f1/';

export async function fetchDriverStandings2025() {
    
    const url = `${BASE_URL}/2025/driverStandings`;
    
    const response = await axios.get( url );
    const data = response.data?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings ?? [];

    return data.map((driver: any) => ({
        position: driver.position,
        points: driver.points,
        wins: driver.wins,
        driver: {
            code: driver.Driver.code,
            name: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
            nationality: driver.Driver.nationality
        },
        constructor: driver.Constructors[0]?.name
    }));
};

export async function fetchConstructorStandings(year: number) {

    const url = `${BASE_URL}/${year}/constructorStandings.json`;

    const response = await axios.get(url);
    console.log('response ---- ', response.data);
    
    const stnadings = response.data?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings ?? [];

    return stnadings.map((entry: any) => ({
        position: parseInt(entry.position, 10),
        name: entry.Constructor.name,
        points: parseFloat(entry.points)
    }));
}

const winnerCache = new Map<number, string | null>();

export async function fetchRaceCalendarWithWinners(year: number) {
    const calendarUrl = `${BASE_URL}/${year}.json`;
    
    const calendarRes = await axios.get(calendarUrl);
    console.log('response ---- ', calendarRes.data.MRData.RaceTable.Races[0]);

    const races = calendarRes.data?.MRData?.RaceTable?.Races ?? [];

    const calendar = await Promise.all(
        races.map(async (race: any) => {
            const round = Number(race.round);
            const dateStr = `${race.date}T${race.time || '00:00:00Z'}`;
            const raceDate = new Date(dateStr);
            const now = new Date();

            let winner: string | null = null;

            if (raceDate < now) {
                if (winnerCache.has(round)) {
                    winner = winnerCache.get(round)!;
                } else {
                    try {
                        
                        const winnerUrl = `${BASE_URL}/${year}/${round}/results.json`;
                        const res = await axios.get(winnerUrl);
                        const result = res.data?.MRData?.RaceTable?.Races?.[0]?.Results?.[0];
                        
                        if (result?.Driver) {
                            winner = `${result.Driver.givenName} ${result.Driver.familyName}`;
                            winnerCache.set(round, winner);
                        } else {
                            winnerCache.set(round, null);
                        }
                    } catch (err) {
                        console.error(`Failed to fetch winner for round ${round}: `, err);
                        winnerCache.set(round, null);
                    }
                }
            }

            return {
                round,
                date: race.date,
                raceName: race.raceName,
                circuit: race.Circuit.circuitName,
                location: `${race.Circuit.Location.locality}, ${race.Circuit.Location.country}`,
                winner,
            }
        })
    );

    calendar.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return calendar;
}
