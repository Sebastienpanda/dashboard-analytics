import { Link } from "react-router-dom";
import Layout from "./layout/Layout";

export default function Home() {
    return (
        <Layout>
            <div id="home" className="main container">
                <h1 className="h1">Choisir un utilisateur</h1>
                <div className="containerButton">
                    <Link to={`/dashboard/${18}`}>Utilisateur 18</Link>
                    <Link to={`/dashboard/${12}`}>Utilisateur 12</Link>
                </div>
            </div>
        </Layout>
    );
}
