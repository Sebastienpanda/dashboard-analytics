import apple from "../../assets/icons/apple.svg";
import cheeseburger from "../../assets/icons/cheeseburger.svg";
import chicken from "../../assets/icons/chicken.svg";
import fire from "../../assets/icons/energy.svg";
import { UserInfo } from "../../types/User";
import CardStats from "../CardStats";

export default function LeftDashboard({ user }: { user: UserInfo }) {
    return (
        <div className="left">
            <CardStats icon={fire} value={user.keyData.calorieCount} unit="kCal" text="Calories" />
            <CardStats icon={chicken} value={user.keyData.proteinCount} text="Proteines" />
            <CardStats icon={apple} value={user.keyData.carbohydrateCount} text="Glucides" />
            <CardStats icon={cheeseburger} value={user.keyData.lipidCount} text="Lipides" />
        </div>
    );
}
