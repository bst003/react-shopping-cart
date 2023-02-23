// Will need to have cart quantity passed down as a prop
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <div className="site-logo">HydroHomies</div>

                <nav className="site-nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                    </ul>
                </nav>

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
