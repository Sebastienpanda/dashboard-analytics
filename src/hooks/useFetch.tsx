import { useEffect, useState } from "react";

export default function useFetch(url: string, method?: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);
    const base_url = "http://localhost:3000/user";

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await fetch(base_url + url, {
                    method: method || "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setData(data.data);
            } catch (error) {
                setError(error instanceof Error ? error.message : String(error));
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url, method]);

    return { data, loading, error };
}
