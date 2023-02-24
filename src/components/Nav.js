import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
    const [navState, setNavState] = useState("closed");

    const openMobileNav = () => {
        setNavState("opened");
    };

    const closeMobileNav = () => {
        setNavState("closed");
    };

    useEffect(() => {
        const openMobileEl = document.querySelector(".site-nav-mobile-open");
        const closeMobileEl = document.querySelector(".site-nav-mobile-close");

        openMobileEl.addEventListener("click", openMobileNav);
        closeMobileEl.addEventListener("click", closeMobileNav);

        return () => {
            console.log("unmount");
            openMobileEl.removeEventListener("click", openMobileNav);
            closeMobileEl.removeEventListener("click", closeMobileNav);
        };
    }, []);

    return (
        <div className="site-nav-contain">
            <button className="site-nav-mobile-open" type="button">
                <i className="fa-solid fa-bars"></i>
                <span className="screen-reader-text">Open Menu</span>
            </button>

            <nav className={`site-nav ${navState}`}>
                <button className="site-nav-mobile-close" type="button">
                    <i className="fas fa-times"></i>
                    <span className="screen-reader-text">Close Menu</span>
                </button>

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
