import DataTable from "../components/DataTable/DataTable";
import { driverColumns } from "../types/DriverStandings";
import { constructorColumns } from "../types/ConstructorStandings";
import { calendarColumns } from "../types/RaceCalendar";
import { useDriverStandings } from "../hooks/useDriverStandings";
import { useConstructorStandings } from "../hooks/useConstructorStandings";
import { useRaceCalendar } from "../hooks/useRaceCalendar";


export default function Dashboard() {

    const { data: driverStandings, loading: loadingDrivers } = useDriverStandings();
    const { data: constructorStandings, loading: loadingConstructors } = useConstructorStandings();
    const { data: raceCalendar, loading: loadingCalendar } = useRaceCalendar();

    return (
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-screen">
            
            { /* Left: Calendar (2/3 width) */ }
            <div className="lg:col-span-2 lg:h-full overflow-auto">
                <div className="max-h-[600px] lg:h-full lg:max-h-full overflow-auto">
                    { loadingCalendar ? (
                        <p>Loading...</p>
                    ) : (
                        <DataTable
                        title="Race Calendar"
                        columns={calendarColumns} data={raceCalendar}
                        />
                    )}
                </div>
            </div>

            {/* Right: Drivers + Constructors */}
            <div className="flex flex-col gap-6 lg:h-full min-h-0">
                <div className="max-h-[600px] lg:flex-1 lg:max-h-full overflow-auto min-h-o">
                    { loadingDrivers ? (
                        <p>Loading...</p>
                    ) : (
                        <DataTable
                            title="Driver Standings"
                            columns={driverColumns} data={driverStandings}
                        />
                    )}
                </div>
                <div className="max-h-[600px] lg:flex-1 lg:max-h-full overflow-auto min-h-o">
                    { loadingConstructors ? (
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
