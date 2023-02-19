import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
    console.log(props);
    return (
        <div>
            <main className="site-main">
                <div className="site-main__inner">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
