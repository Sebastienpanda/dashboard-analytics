import Aside from "./components/Aside";
import Header from "./components/Header";

function Dashboard() {
    return (
        <>
            <div className="parent">
                <div className="headerDiv">
                    <Header />
                </div>
                <div className="asideDiv">
                    <Aside />
                </div>
                <div className="main">3</div>
            </div>
        </>
    );
}

export default Dashboard;
