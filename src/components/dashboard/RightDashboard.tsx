import BarCharts from "../charts/activity/ActivityChart";
import GoalCharts from "../charts/goal/GoalCharts";
import PieCharts from "../charts/pie/PieCharts";
import AverageSession from "../charts/sessions/AverageSession";

export default function RightDashboard() {
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
                    <PieCharts />
                </div>
                <div className="score">
                    <GoalCharts />
                </div>
            </div>
        </div>
    );
}
