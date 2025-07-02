"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
(0, vitest_1.describe)('math', () => {
    (0, vitest_1.it)('add numbers correctly', () => {
        (0, vitest_1.expect)(1 + 2).toBe(3);
    });
});
