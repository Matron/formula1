import type { Column } from "../components/DataTable";

export interface DriverStandings {
    position: number;
    points: number;
    wins: number;
    driver: {
        code?: string;
        name: string;
        nationality: string;
    };
    constructor: string;
}

type Driver = {
    position: number;
    name: string;
    nationality: string;
    points: number;
};

export const driverColumns: Column<DriverStandings>[] = [
    { key: 'position', label: 'Pos' },
    { key: 'driver', label: 'Driver', render: (value) => {
        if (typeof value === 'object' && value !== null ) {
            return value.name;
        }
        return '';
    }},
    { key: 'constructor', label: 'Team' },
    { key: 'points', label: 'Points' },
    { key: 'wins', label: 'Wins' },
];
