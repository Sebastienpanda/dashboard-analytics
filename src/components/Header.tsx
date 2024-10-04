import { Link } from "react-router-dom";
import logo from "/logo/logo.svg";

export default function Header() {
    const navigation = ["Accueil", "Profil", "Réglage", "Communauté"];
    return (
        <header className="header">
            <img className="img" src={logo} alt="Logo SportSee" />
            <nav className="nav">
                <ul className="ul">
                    {navigation.map((item) => (
                        <li key={item}>
                            <Link to={item}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
