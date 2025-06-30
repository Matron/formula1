import { Router } from "express";
import { getCalendar } from "../controllers/calendarController";

const router = Router();
router.get('/calendar', getCalendar);

export default router;
