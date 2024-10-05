import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CustomLegend } from "./CustomLegend";
import { CustomToolTip } from "./CustomToolTip";

const data = [
    { day: "1", poids: 30, calories: 200, kilograms: 69 },
    { day: "2", poids: 45, calories: 250, kilograms: 69 },
    { day: "3", poids: 50, calories: 300, kilograms: 69 },
    { day: "4", poids: 60, calories: 350, kilograms: 70 },
    { day: "5", poids: 70, calories: 400, kilograms: 70 },
    { day: "6", poids: 80, calories: 450, kilograms: 69 },
    { day: "7", poids: 90, calories: 500, kilograms: 69 },
    { day: "8", poids: 100, calories: 550, kilograms: 69 },
    { day: "9", poids: 110, calories: 600, kilograms: 69 },
    { day: "10", poids: 120, calories: 650, kilograms: 69 },
];

export default function BarCharts() {
    const payload = [
        { color: "#282D30", value: "Poids (kg)" },
        { color: "#E60000", value: "Calories brûlées (kCal)" },
    ];

    return (
        <ResponsiveContainer width="99%" aspect={3}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
                    yAxisId="kilograms"
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
                    dataKey="kilograms"
                    yAxisId="kilograms"
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
