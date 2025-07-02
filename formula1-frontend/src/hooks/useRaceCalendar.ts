import { useEffect, useState } from "react"
import { getRaceCalendar } from "../api/api";
import { type RaceEvent } from "../types/RaceCalendar";


export function useRaceCalendar() {
    const [ data, setData ] = useState<RaceEvent[]>([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        getRaceCalendar()
            .then((calendar) => setData(calendar))
            .catch((err) => {
                console.error('Failed to load race calendar', err);
            })
            .finally(() => setLoading(false));
    }, []);
    
    return { data, loading };
}
