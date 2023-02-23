import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
    return (
        <div className="site-nav-contain">
            <button className="site-nav-mobile-open" type="button">
                <i class="fa-solid fa-bars"></i>
            </button>

            <nav className="site-nav">
                <button class="site-nav-mobile-close" type="button">
                    close
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
