import { useParams } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Layout from "../pages/layout/Layout";
import HeaderDashboard from "./dashboard/HeaderDashboard";
import LeftDashboard from "./dashboard/LeftDashboard";
import RightDashboard from "./dashboard/RightDashboard";

export default function DashboardUser() {
    document.title = "Tableau de bord utilisateur";
    const params = useParams<{ id: string }>();
    const { user, loading, error } = useUser(parseInt(params.id || "0", 10));

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>User not found</div>;

    return (
        <Layout>
            <main id="dashboard" className="main container">
                <div className="top">
                    <HeaderDashboard user={user} />
                    <div className="containerStats">
                        <RightDashboard />
                        <LeftDashboard />
                    </div>
                </div>
            </main>
        </Layout>
    );
}
