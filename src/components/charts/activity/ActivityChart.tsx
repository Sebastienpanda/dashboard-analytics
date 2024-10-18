import { useParams } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { GetUserActivity } from "../../../services/users/getUserActivity";
import { formatDate } from "../../../utils/formatedData";
import { CustomLegend } from "./CustomLegend";
import { CustomToolTip } from "./CustomToolTip";

export default function BarCharts() {
    const params = useParams<{ id: string }>();
    const { userActivity, loading, error } = GetUserActivity(parseInt(params.id || "0", 10));

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!userActivity) return <div>User activity not found</div>;

    const payload = [
        { color: "#282D30", value: "Poids (kg)" },
        { color: "#E60000", value: "Calories brûlées (kCal)" },
    ];

    const formattedData = userActivity.sessions.map((session) => ({
        ...session,
        day: formatDate(session.day),
    }));

    return (
        <ResponsiveContainer width="99%" aspect={3}>
            <BarChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3" vertical={false} />
                <XAxis
                    dataKey="day"
                    tick={{ fill: "#9B9EAC" }}
                    tickLine={false}
                    stroke="#DEDEDE"
                    strokeWidth={2}
                    tickMargin={8}
                />
                <YAxis
                    yAxisId="kilogram"
                    orientation="right"
                    tickMargin={30}
                    tick={{ fill: "#9B9EAC" }}
                    tickLine={false}
                    axisLine={false}
                    domain={["dataMin-2", "dataMax+1"]}
                    tickCount={3}
                />
                <YAxis hide yAxisId="calories" />
                <Tooltip content={<CustomToolTip />} cursor={{ fill: "rgba(196, 196, 196, 0.5)" }} />
                <Bar
                    name={payload[0].value}
                    dataKey="kilogram"
                    yAxisId="kilogram"
                    fill="#282D30"
                    radius={[3, 3, 0, 0]}
                    barSize={7}
                />
                <Bar
                    name={payload[1].value}
                    dataKey="calories"
                    yAxisId="calories"
                    fill="#E60000"
                    radius={[3, 3, 0, 0]}
                    barSize={7}
                />
                <Legend
                    content={<CustomLegend payload={payload} />}
                    verticalAlign="top"
                    align="right"
                    iconType="circle"
                    height={80}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
