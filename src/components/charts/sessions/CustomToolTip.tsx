type PayloadItem = {
    value: number;
};

type CustomTooltipProps = {
    active?: boolean;
    payload?: PayloadItem[];
};

export function CustomTooltip({ active, payload }: CustomTooltipProps) {
    if (active && payload && payload.length) {
        return (
            <div className="customTooltip">
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
}
