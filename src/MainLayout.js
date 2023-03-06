import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MainLayout = (props) => {
    const { cartQuantity } = props;

    return (
        <div>
            <Header cartQuantity={cartQuantity} />
            <main className="site-main">
                <div className="site-main__inner">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
