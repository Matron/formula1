"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCalendar = getCalendar;
const jolpicaService_1 = require("../services/jolpicaService");
async function getCalendar(req, res) {
    try {
        const calendar = await (0, jolpicaService_1.fetchRaceCalendarWithWinners)(2025);
        res.json(calendar);
    }
    catch (error) {
        console.error('Error fetching race calendar: ', error);
        res.status(500).json({ error: 'Failed to fetch the race calendar' });
    }
}
