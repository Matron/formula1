import { Request, Response } from 'express';
import { fetchDriverStandings2025 } from '../services/jolpicaService';

export async function getCurrentDriverStandings(req: Request, res: Response) {
    try {
        const standings = await fetchDriverStandings2025();
        res.json(standings);
    } catch (error) {
        console.error('Error fetching driver standings: ', error );
        res.status(500).json({ error: 'Failed to fetch driver standings' });
    }
};
