import Aside from "../../components/Aside";
import Header from "../../components/Header";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="parent">
                <div className="headerDiv">
                    <Header />
                </div>
                <div className="asideDiv">
                    <Aside />
                </div>
                <div className="mainDiv">{children}</div>
            </div>
        </>
    );
}
