import useFetch from "../../hooks/useFetch";
import { UserActivity } from "../../types/User";

export function GetUserActivity(id: number): {
    userActivity: UserActivity | null;
    loading: boolean;
    error: string;
} {
    const { data, loading, error } = useFetch(`/${id}/activity`);

    return { userActivity: data, loading, error: error as string };
}
