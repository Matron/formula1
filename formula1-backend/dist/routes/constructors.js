"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const constructorsController_1 = require("../controllers/constructorsController");
const router = (0, express_1.Router)();
router.get('/standings', constructorsController_1.getConstructorStandigs);
exports.default = router;
