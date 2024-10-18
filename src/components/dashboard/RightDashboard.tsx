import { useParams } from "react-router-dom";
import { GetUserById } from "../../services/users/getUserById";
import BarCharts from "../charts/activity/ActivityChart";
import GoalCharts from "../charts/goal/GoalCharts";
import PieCharts from "../charts/pie/PieCharts";
import AverageSession from "../charts/sessions/AverageSession";

export default function RightDashboard() {
    const params = useParams<{ id: string }>();
    const { user, loading, error } = GetUserById(parseInt(params.id || "0", 10));

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>User not found</div>;

    return (
        <div className="right">
            <div className="activity">
                <h3 className="h3">Activité quotidienne</h3>
                <BarCharts />
            </div>
            <div className="containerBottom">
                <div className="sessions">
                    <AverageSession />
                </div>
                <div className="graph">
                    <PieCharts user={user} />
                </div>
                <div className="score">
                    <GoalCharts user={user} />
                </div>
            </div>
        </div>
    );
}
