"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDriverStandings = getCurrentDriverStandings;
const jolpicaService_1 = require("../services/jolpicaService");
async function getCurrentDriverStandings(req, res) {
    try {
        const standings = await (0, jolpicaService_1.fetchDriverStandings2025)();
        res.json(standings);
    }
    catch (error) {
        console.error('Error fetching driver standings: ', error);
        res.status(500).json({ error: 'Failed to fetch driver standings' });
    }
}
;
