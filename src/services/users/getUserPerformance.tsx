import useFetch from "../../hooks/useFetch";
import { UserPerformance } from "../../types/User";

export function GetUserPerformance(id: number): {
    userPerformance: UserPerformance | null;
    loading: boolean;
    error: string;
} {
    const { data, loading, error } = useFetch(`/${id}/performance`);

    return { userPerformance: data, loading, error: error as string };
}
