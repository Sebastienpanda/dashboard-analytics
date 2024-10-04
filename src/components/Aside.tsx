import bike from "../assets/icons/bike.svg";
import muscu from "../assets/icons/muscu.svg";
import swimming from "../assets/icons/swiming.svg";
import yoga from "../assets/icons/yoga.svg";

export default function Aside() {
    return (
        <div className="aside">
            <div className="containerIcons">
                <div className="icon ">
                    <img className="yoga" src={yoga} alt="Icon Yoga" />
                </div>
                <div className="icon">
                    <img className="swimming" src={swimming} alt="Icon Swimming" />
                </div>
                <div className="icon">
                    <img className="bike" src={bike} alt="Icon Bike" />
                </div>
                <div className="icon">
                    <img className="muscu" src={muscu} alt="Icon Muscu" />
                </div>
            </div>
            <div className="copyright">
                <p>Copiryght, SportSee 2020</p>
            </div>
        </div>
    );
}
