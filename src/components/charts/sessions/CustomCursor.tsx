import { Rectangle } from "recharts";

type CustomCursorProps = {
    points: { x: number }[];
    width: number;
};

export function CustomCursor({ points, width }: CustomCursorProps) {
    const { x } = points[0];
    return <Rectangle fill="hsla(0, 0%, 0%, 9.75%)" x={x} width={width} height={300} />;
}
