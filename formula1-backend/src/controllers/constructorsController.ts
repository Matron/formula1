import { Request, Response } from 'express';
import { fetchConstructorStandings } from '../services/jolpicaService';

export async function getConstructorStandigs(req: Request, res: Response) {
    try {
        const standings = await fetchConstructorStandings(2025);
        res.json(standings);
    } catch (error) {
        console.error('Error fetching constructor standings: ', error );
        res.status(500).json({ error: 'Failed to fetch constructor stadnings' });
    }
};
