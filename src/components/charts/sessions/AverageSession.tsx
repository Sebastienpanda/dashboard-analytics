import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

import { useParams } from "react-router-dom";
import { GetUserSession } from "../../../services/users/getUserSession";
import { CustomCursor } from "./CustomCursor";
import { CustomTick } from "./CustomTick";
import { CustomTooltip } from "./CustomToolTip";

export default function AverageSession() {
    const params = useParams<{ id: string }>();
    const { userSession, loading, error } = GetUserSession(parseInt(params.id || "0", 10));

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!userSession) return <div>User session not found</div>;

    const weekDays = ["L", "M", "M", "J", "V", "S", "D"];
    const formattedData = userSession.sessions.map((session, index) => ({
        day: weekDays[index],
        sessionLength: session.sessionLength,
    }));

    return (
        <div className="averageSessions">
            <div className="title">Durée moyenne des sessions</div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={formattedData}
                    margin={{
                        left: 14,
                        top: 80,
                        bottom: 40,
                        right: 14,
                    }}
                >
                    <CartesianGrid horizontal={false} vertical={false} />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        interval={"preserveStartEnd"}
                        tick={(props) => <CustomTick {...props} />}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={<CustomCursor points={[]} width={500} />} />
                    <Line
                        dataKey="sessionLength"
                        type="natural"
                        stroke="#FFFFFF"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            fill: "#FFFFFF",
                            r: 4,
                            strokeWidth: 8,
                            strokeOpacity: 0.4,
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
