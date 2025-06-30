import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { driverColumns, type DriverStandings } from "../types/DriverStandings";
import { constructorColumns, type ConstructorStanding } from "../types/ConstructorStandings";
import { mockCalendarData, mockConstructors } from "../types/Mocks";
import { calendarColumns, type RaceEvent } from "../types/RaceCalendar";
import { api } from "../api/api";



export default function Dashboard() {

    const [ driverStandings, setDriverStandings ] = useState<DriverStandings[]>([]);
    const [ constructorStandings, setConstructorStandings ] = useState<ConstructorStanding[]>([]);
    const [ calendar, setCalendar ] = useState<RaceEvent[]>([]);
    const [ loading, setLoading ] = useState(true);
    const [ loadingCalendar, setLoadingCalendar ] = useState(true);
    const [ loadingConstructor, setLoadingConstructor ] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/api/drivers/standings')
            .then((res) => res.json())
            .then((data) => {
                setDriverStandings(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to load driver standings', err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        api.get('/constructors/standings')
            .then(res => {
                setConstructorStandings(res.data);
                setLoadingConstructor(false);
            })
            .catch((err) => {
                console.error('Failed to load constructor standings ', err);
                setLoadingConstructor(false);
            });
    }, []);

    useEffect(() => {
        api.get('/calendar/calendar')
            .then(res => {
                setCalendar(res.data);
                setLoadingCalendar(false);
            })
            .catch((err) => {
                console.error('Failed to load calendar ', err);
                setLoadingCalendar(false);
            });
    }, []);

    return (

        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            { /* Left: Driver Standings (2/3 width) */ }
            <div className="lg:col-span-2">
                { loading ? (
                    <p>Loading...</p>
                ) : (
                    <DataTable
                        title="Driver Standings"
                        columns={driverColumns} data={driverStandings}
                    />
                )}
            </div>

            {/* Right: Constructors + Calendar */}
            <div className="flex flex-col gap-6">
                <div>
                    <DataTable
                        title="Constructor Standings"
                        columns={constructorColumns} data={constructorStandings}
                    />
                </div>
                <div>
                    { loadingCalendar ? (
                        <p>Loading...</p>
                    ) : (
                        <DataTable
                            title="Race Calendar"
                            columns={calendarColumns} data={calendar}
                        />
                    )}
                </div>
            </div>

        </div>
    );
}
