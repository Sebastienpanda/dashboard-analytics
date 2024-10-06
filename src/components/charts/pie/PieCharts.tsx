import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { RenderCustomTickPieCharts } from "./renderCustomTickPie";

const data = [
    {
        subject: "Intensité",
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: "Vitesse",
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: "Force",
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: "Endurance",
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: "Energie",
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: "Cardio",
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

export default function PieCharts() {
    return (
        <ResponsiveContainer width="100%" height="100%" maxHeight={180} minWidth={180} minHeight={180}>
            <RadarChart cx="50%" cy="74%" outerRadius="100%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={(props) => <RenderCustomTickPieCharts {...props} />} />
                <Radar name="Thomas" dataKey="A" fill="rgba(255, 1, 1, 0.70)" />
                <Tooltip />
            </RadarChart>
        </ResponsiveContainer>
    );
}
