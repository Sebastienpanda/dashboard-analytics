import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { CustomizedLegend } from "./CustomLegend";

const data = {
    id: 18,
    userInfos: {
        firstName: "Cecilia",
        lastName: "Ratorez",
        age: 34,
    },
    score: 0.9,
    keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120,
    },
};

const COLORS = ["#FF0000", "transparent"];

export default function GoalCharts() {
    const progression = data.score;
    const remainsToBeDone = 1 - progression;

    const dataGoal = [
        { name: "Completed", value: progression },
        { name: "Remaining", value: remainsToBeDone },
    ];

    return (
        <div className="goal">
            <div className="title">Score</div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart
                    margin={{
                        left: 5,
                        top: 5,
                        right: 5,
                        bottom: 5,
                    }}
                >
                    <circle cx="50%" cy="50%" r={"25%"} fill="#FFFFFF" />
                    <Pie
                        data={dataGoal}
                        dataKey="value"
                        fill="#FF0000"
                        cx="50%"
                        cy="50%"
                        startAngle={90}
                        endAngle={450}
                        innerRadius="50%"
                        outerRadius="55%"
                        cornerRadius="50%"
                    >
                        {dataGoal.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                        ))}
                    </Pie>
                    <Legend verticalAlign="middle" content={<CustomizedLegend progression={progression} />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
