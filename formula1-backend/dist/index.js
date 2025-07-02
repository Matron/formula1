"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const drivers_1 = __importDefault(require("./routes/drivers"));
const constructors_1 = __importDefault(require("./routes/constructors"));
const calendar_1 = __importDefault(require("./routes/calendar"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/drivers', drivers_1.default);
app.use('/api/constructors', constructors_1.default);
app.use('/api/calendar', calendar_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
