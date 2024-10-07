import { Link } from "react-router-dom";
import Layout from "./layout/Layout";

export default function NotFound() {
    return (
        <Layout>
            <div className="notFound">
                <div className="notFoundChildren">
                    <h3>Oups! La page que vous demandez n'existe pas.</h3>
                    <Link className="link" to="/">
                        Retourner sur la page d’accueil
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
