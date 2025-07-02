import type { Column } from "../components/DataTable/DataTable";

export interface ConstructorStandings {
  position: number;
  name: string;
  points: number;
}

export const constructorColumns: Column<ConstructorStandings>[] = [
    { key: 'position', label: 'Pos' },
    { key: 'name', label: 'Team' },
    { key: 'points', label: 'Points' },
]
