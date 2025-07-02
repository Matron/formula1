import { useEffect, useState } from "react";
import { type ConstructorStandings } from "../types/ConstructorStandings";
import { getCurrentConstructorStandings } from "../api/api";


export function useConstructorStandings() {
    const [data , setData] = useState<ConstructorStandings[]>([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        getCurrentConstructorStandings()
            .then((standings) => setData(standings))
            .catch((err) => {
                console.error('Failed to load constructor standings', err);
            })
            .finally(() => setLoading(false));    
    }, []);

    return { data, loading };
}
