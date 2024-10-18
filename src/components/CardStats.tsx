type CardStatsProps = {
    icon: string;
    value: number;
    text: string;
    unit?: "kCal" | "g";
};

export default function CardStats({ icon, value, text, unit = "g" }: CardStatsProps) {
    const getClassName = (text: string) => {
        switch (text.toLowerCase()) {
            case "calories":
                return "cal";
            case "proteines":
                return "prot";
            case "glucides":
                return "glu";
            case "lipides":
                return "lipi";
            default:
                return "";
        }
    };

    const className = getClassName(text);

    return (
        <div className="cardStats">
            <div className="iconWrapper">
                <div className={`iconBackground ${className}`}></div>
                <img src={icon} alt={text} className="icon" />
            </div>
            <div className="content">
                <p className="value">
                    {value}
                    {unit}
                </p>
                <p className="text">{text}</p>
            </div>
        </div>
    );
}
