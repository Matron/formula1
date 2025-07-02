import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
    baseURL: `${BASE_URL}/api`
});

export async function getCurrentDriverStandings() {
    const response = await api.get('/drivers/standings');
    return response.data;
} 

export async function getCurrentConstructorStandings() {
    const response = await api.get('/constructors/standings');
    return response.data;
}

export async function getRaceCalendar() {
    const response = await api.get('/calendar/calendar');
    return response.data;
}
