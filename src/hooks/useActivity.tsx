import { useEffect, useState } from "react";
import { UserInfo } from "../types/User";
import useFetch from "./useFetch";

export function useActivity(id: number): { user: UserInfo | null; loading: boolean; error: string | null } {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const { data, loading: fetchLoading, error: fetchError } = useFetch(`/user/${id}/activity`);

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
