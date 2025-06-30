import type { ConstructorStanding } from "./ConstructorStandings";
import type { RaceEvent } from "./RaceCalendar";


export const mockConstructors: ConstructorStanding[] = [
  { position: 1, name: 'Red Bull Racing', points: 120 },
  { position: 2, name: 'Ferrari', points: 95 },
  // ...
];

export const mockCalendarData: RaceEvent[] = [
  { round: 1, date: '2025-03-10', location: 'Melbourne, Australia', winner: 'Driver A' },
  { round: 2, date: '2025-03-24', location: 'Bahrain', winner: 'Driver B' },
  { round: 3, date: '2025-04-07', location: 'Miami, USA' },  // future race, no winner yet
  { round: 4, date: '2025-04-21', location: 'Imola, Italy' },
];