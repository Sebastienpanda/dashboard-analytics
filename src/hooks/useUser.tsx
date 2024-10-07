import { useEffect, useState } from "react";
import { User } from "../types/User";
import useFetch from "./useFetch";

export function useUser(id: number): { user: User | null; loading: boolean; error: string | null } {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const { data, loading: fetchLoading, error: fetchError } = useFetch(`/${id}`);

    useEffect(() => {
        if (!fetchLoading && !fetchError) {
            setUser(data);
            setLoading(false);
        } else if (fetchError) {
            setError(fetchError as string);
            setLoading(false);
        }
    }, [data, fetchLoading, fetchError]);

    return { user, loading, error };
}
