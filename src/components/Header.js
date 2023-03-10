import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./Header.scss";

const Header = (props) => {
    const { cartQuantity } = props;

    return (
        <header className="site-header">
            <div className="site-header__inner">
                <div className="site-logo">
                    <Link to="/">HydroHomies</Link>
                </div>

                <Nav />

                <div className="site-cart-link">
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        {cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
