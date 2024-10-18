import useFetch from "../../hooks/useFetch";
import { UserInfo } from "../../types/User";

export function GetUserById(id: number): {
    user: UserInfo | null;
    loading: boolean;
    error: string;
} {
    const { data, loading, error } = useFetch(`/${id}`);

    return { user: data, loading, error: error as string };
}
