import { useEffect, useState } from "react";

type PayloadValue = "Endurance" | "Intensité" | "Cardio" | "Energie" | "Vitesse" | "Force";

interface Payload {
    value: PayloadValue;
}

interface Props {
    x: number;
    y: number;
    payload: Payload;
}

export function RenderCustomTickPieCharts(props: Props) {
    const { x, y, payload } = props;
    const [dxValues, setDxValues] = useState({
        Endurance: 0,
        Intensité: 0,
        Cardio: -19,
        Energie: -19,
        Vitesse: 8,
        Force: 8,
    });
    const [dyValues, setDyValues] = useState({
        Endurance: 14,
        Intensité: -10,
        Cardio: 0,
        Energie: 0,
        Vitesse: 0,
        Force: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setDxValues({ Endurance: 0, Intensité: 0, Cardio: -6, Energie: -6, Vitesse: 5, Force: 5 });
                setDyValues({ Endurance: 16, Intensité: -5, Cardio: 0, Energie: 0, Vitesse: 0, Force: 0 });
            } else {
                setDxValues({ Endurance: 0, Intensité: 0, Cardio: -19, Energie: -19, Vitesse: 8, Force: 8 });
                setDyValues({ Endurance: 16, Intensité: -10, Cardio: 0, Energie: 0, Vitesse: 0, Force: 0 });
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const dy = dyValues[payload.value] || 0;
    const dx = dxValues[payload.value] || 0;

    return (
        <text
            x={x}
            y={y}
            dx={dx}
            dy={dy}
            textAnchor="middle"
            fill="#fff"
            fontWeight={500}
            fontSize="13px"
            fontFamily="Roboto"
        >
            {payload.value}
        </text>
    );
}
