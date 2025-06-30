import express from 'express';
import cors from 'cors';
import driverRoutes from './routes/drivers';
import constructorRoutes from './routes/constructors';
import calendarRoutes from './routes/calendar';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/drivers', driverRoutes);
app.use('/api/constructors', constructorRoutes);
app.use('/api/calendar', calendarRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
