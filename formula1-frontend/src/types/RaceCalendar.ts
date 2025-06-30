import type { Column } from "../components/DataTable";

export interface RaceEvent {
    round: number;
    date: string;
    raceName: string;
    circuit: string;
    location: string;
    winner?: string | null;
}

export const calendarColumns: Column<RaceEvent>[] = [
    { key: 'round', label: 'Round' },
    { key: 'date', label: 'Date', render: (value) => value ? new Date(value as string).toLocaleDateString() : 'TBD' },
    { key: 'raceName', label: 'Race' },
    { key: 'circuit', label: 'Circuit' },
    { key: 'location', label: 'Location' },
    { key: 'winner', label: 'Winner', render: (value) => value ?? 'TBD' }
];
