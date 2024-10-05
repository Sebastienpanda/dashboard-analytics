type PayloadItem = {
    value: number;
};

type CustomToolTipProps = {
    active?: boolean;
    payload?: PayloadItem[];
};

export function CustomToolTip({ active, payload }: CustomToolTipProps) {
    if (active && payload && payload.length) {
        return (
            <div className="toolTip">
                <p>{payload[0].value + "kg"}</p>
                <p>{payload[1].value + "Kcal"}</p>
            </div>
        );
    }
    return null;
}
