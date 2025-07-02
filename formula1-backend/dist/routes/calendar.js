"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calendarController_1 = require("../controllers/calendarController");
const router = (0, express_1.Router)();
router.get('/calendar', calendarController_1.getCalendar);
exports.default = router;
