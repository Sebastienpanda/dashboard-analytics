type PayloadEntry = {
    color: string;
    value: string;
};

type CustomLegendProps = {
    payload: PayloadEntry[];
};

export function CustomLegend(props: CustomLegendProps) {
    const { payload } = props;

    return (
        <ul className="custom-legend">
            {payload.map((entry, index) => (
                <li key={`item-${index}`}>
                    <span style={{ color: entry.color, marginRight: 5 }}>●</span>
                    {entry.value}
                </li>
            ))}
        </ul>
    );
}
