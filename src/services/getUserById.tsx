import useFetch from "../hooks/useFetch";
import { User } from "../types/User";

export function GetUserById(id: number): {
    user: User | null;
    loading: boolean;
    error: string;
} {
    const { data, loading, error } = useFetch(`/${id}`);
    console.log(data);

    return { user: data, loading, error: error as string };
}
