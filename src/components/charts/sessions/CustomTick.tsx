type CustomTickProps = {
    x: number;
    y: number;
    payload: {
        value: string | number;
    };
};

export function CustomTick({ x, y, payload }: CustomTickProps) {
    return (
        <g transform={`translate(${x},${y + 20})`}>
            <text x={0} y={0} dy={16} textAnchor="middle" fill="#FFFFFF" opacity="0.5">
                {payload.value}
            </text>
        </g>
    );
}
