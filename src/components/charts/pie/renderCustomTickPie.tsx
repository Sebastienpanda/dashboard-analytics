import { useEffect, useState } from "react";

type PayloadValue = "Endurance" | "Intensity" | "Cardio" | "Energy" | "Speed" | "Strength";

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
        Intensity: 0,
        Cardio: -19,
        Energy: -19,
        Speed: 8,
        Strength: 8,
    });
    const [dyValues, setDyValues] = useState({
        Endurance: 14,
        Intensity: -10,
        Cardio: 0,
        Energy: 0,
        Speed: 0,
        Strength: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setDxValues({ Endurance: -4, Intensity: 0, Cardio: 0, Energy: 6, Speed: -6, Strength: 0 });
                setDyValues({ Endurance: 25, Intensity: -15, Cardio: -6, Energy: -8, Speed: 16, Strength: 12 });
            } else {
                setDxValues({ Endurance: 8, Intensity: -16, Cardio: 0, Energy: 16, Speed: -16, Strength: 0 });
                setDyValues({ Endurance: 24, Intensity: -10, Cardio: -6, Energy: 0, Speed: 10, Strength: 12 });
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
