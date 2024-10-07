import apple from "../../assets/icons/apple.svg";
import cheeseburger from "../../assets/icons/cheeseburger.svg";
import chicken from "../../assets/icons/chicken.svg";
import fire from "../../assets/icons/energy.svg";
import CardStats from "../CardStats";

export default function LeftDashboard() {
    return (
        <div className="left">
            <CardStats icon={fire} value="1.930" unit="kCal" text="Calories" />
            <CardStats icon={chicken} value="155" text="Proteines" />
            <CardStats icon={apple} value="290" text="Glucides" />
            <CardStats icon={cheeseburger} value="50" text="Lipides" />
        </div>
    );
}
