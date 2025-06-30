import { Router } from 'express';
import { getCurrentDriverStandings } from '../controllers/driversController';

const router = Router();
router.get('/standings', getCurrentDriverStandings );

export default router;
