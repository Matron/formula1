import type { Column } from "../components/DataTable/DataTable";

export interface ConstructorStanding {
  position: number;
  name: string;
  points: number;
}

export const constructorColumns: Column<ConstructorStanding>[] = [
    { key: 'position', label: 'Pos' },
    { key: 'name', label: 'Team' },
    { key: 'points', label: 'Points' },
]
