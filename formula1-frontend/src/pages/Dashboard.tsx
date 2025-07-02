import { useEffect, useState } from "react";
import DataTable from "../components/DataTable/DataTable";
import { driverColumns, type DriverStandings } from "../types/DriverStandings";
import { constructorColumns, type ConstructorStanding } from "../types/ConstructorStandings";
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
        api.get('/drivers/standings')
            .then((res) => {
                setDriverStandings(res.data);
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

        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 h-screen">
            
            { /* Left: Calendar (2/3 width) */ }
            <div className="lg:col-span-2 h-full overflow-auto">
                { loadingCalendar ? (
                    <p>Loading...</p>
                ) : (
                    <DataTable
                        title="Race Calendar"
                        columns={calendarColumns} data={calendar}
                    />
                )}
            </div>

            {/* Right: Drivers + Constructors */}
            <div className="flex flex-col gap-6 h-full min-h-0">
                <div className="flex-1 overflow-auto min-h-0">
                    { loading ? (
                        <p>Loading...</p>
                    ) : (
                        <DataTable
                            title="Driver Standings"
                            columns={driverColumns} data={driverStandings}
                        />
                    )}
                </div>
                <div className="flex-1 overflow-auto min-h-0">
                    { loadingConstructor ? (
                        <p>Loading...</p>
                    ) : (
                        <DataTable
                            title="Constructor Standings"
                            columns={constructorColumns} data={constructorStandings}
                        />
                    )}
                </div>
            </div>

        </div>
    );
}
