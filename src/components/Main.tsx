import apple from "../assets/icons/apple.svg";
import cheeseburger from "../assets/icons/cheeseburger.svg";
import chicken from "../assets/icons/chicken.svg";
import fire from "../assets/icons/energy.svg";
import CardStats from "./CardStats";
import BarCharts from "./charts/activity/ActivityChart";
import GoalCharts from "./charts/goal/GoalCharts";
import PieCharts from "./charts/pie/PieCharts";
import AverageSession from "./charts/sessions/AverageSession";

export default function Main() {
    return (
        <main className="main container">
            <div className="top">
                <h1 className="h1">
                    Bonjour <span className="username">Thomas</span>
                </h1>
                <p className="p">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

                <div className="containerStats">
                    <div className="right">
                        <div className="activity">
                            <h3 className="h3">Activité quotidienne</h3>
                            <BarCharts />
                        </div>
                        <div className="containerBottom">
                            <div className="sessions">
                                <AverageSession />
                            </div>
                            <div className="graph">
                                <PieCharts />
                            </div>
                            <div className="score">
                                <GoalCharts />
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <CardStats icon={fire} value="1.930" unit="kCal" text="Calories" />
                        <CardStats icon={chicken} value="155" text="Proteines" />
                        <CardStats icon={apple} value="290" text="Glucides" />
                        <CardStats icon={cheeseburger} value="50" text="Lipides" />
                    </div>
                </div>
            </div>
        </main>
    );
}
