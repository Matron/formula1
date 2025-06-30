import { Request, Response } from 'express';
import { fetchRaceCalendarWithWinners } from '../services/jolpicaService';

export async function getCalendar(req: Request, res: Response) {
    try {
        const calendar = await fetchRaceCalendarWithWinners(2025);
        res.json(calendar);
    } catch (error) {
        console.error('Error fetching race calendar: ', error );
        res.status(500).json({ error: 'Failed to fetch the race calendar'});
    }
}