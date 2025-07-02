import { useEffect, useState } from "react";
import { type DriverStandings } from "../types/DriverStandings";
import { getCurrentDriverStandings } from "../api/api";

export function useDriverStandings() {
    const [data, setData] = useState<DriverStandings[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCurrentDriverStandings()
            .then((standings) => setData(standings))
            .catch((err) => {
                console.error('Failed to load driver standings', err);                
            })
            .finally(() => setLoading(false));
    }, []);

    return { data, loading };
}
