import { Router } from 'express';
import { getConstructorStandigs } from '../controllers/constructorsController';

const router = Router();
router.get('/standings', getConstructorStandigs);

export default router;
