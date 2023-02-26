// Will need to have cart quantity passed down as a prop
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./Header.scss";

const Header = (props) => {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <div className="site-logo">
                    <Link to="/cart">HydroHomies</Link>
                </div>

                <Nav />

                <div className="site-cart-link">
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
