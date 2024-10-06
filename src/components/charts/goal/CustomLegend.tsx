// Add type Props

type LegendProps = {
    progression: number;
};

export function CustomizedLegend({ progression }: LegendProps) {
    return (
        <div className="legend">
            <p>
                <span className="percentage">{progression * 100}%</span>
                <br />
                de votre
                <br />
                objectif
            </p>
        </div>
    );
}
