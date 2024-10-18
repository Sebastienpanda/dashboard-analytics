import useFetch from "../../hooks/useFetch";
import { UserSession } from "../../types/User";

export function GetUserSession(id: number): {
    userSession: UserSession | null;
    loading: boolean;
    error: string;
} {
    const { data, loading, error } = useFetch(`/${id}/average-sessions`);

    return { userSession: data, loading, error: error as string };
}
