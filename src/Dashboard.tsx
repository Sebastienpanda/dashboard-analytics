import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

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
                <div className="mainDiv">
                    <Main />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
