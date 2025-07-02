"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConstructorStandigs = getConstructorStandigs;
const jolpicaService_1 = require("../services/jolpicaService");
async function getConstructorStandigs(req, res) {
    try {
        const standings = await (0, jolpicaService_1.fetchConstructorStandings)(2025);
        res.json(standings);
    }
    catch (error) {
        console.error('Error fetching constructor standings: ', error);
        res.status(500).json({ error: 'Failed to fetch constructor stadnings' });
    }
}
;
