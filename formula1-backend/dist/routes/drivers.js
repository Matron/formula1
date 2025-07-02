"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const driversController_1 = require("../controllers/driversController");
const router = (0, express_1.Router)();
router.get('/standings', driversController_1.getCurrentDriverStandings);
exports.default = router;
