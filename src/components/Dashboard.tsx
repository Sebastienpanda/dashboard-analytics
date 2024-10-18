import { useParams } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import { GetUserById } from "../services/users/getUserById";
import HeaderDashboard from "./dashboard/HeaderDashboard";
import LeftDashboard from "./dashboard/LeftDashboard";
import RightDashboard from "./dashboard/RightDashboard";

export default function DashboardUser() {
    const params = useParams<{ id: string }>();
    const { user, loading, error } = GetUserById(parseInt(params.id || "0", 10));

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>User not found</div>;

    document.title = `Tableau de bord de ${user.userInfos.firstName}`;

    return (
        <Layout>
            <main id="dashboard" className="main container">
                <div className="top">
                    <HeaderDashboard user={user} />
                    <div className="containerStats">
                        <RightDashboard />
                        <LeftDashboard user={user} />
                    </div>
                </div>
            </main>
        </Layout>
    );
}
