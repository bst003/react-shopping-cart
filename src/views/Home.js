import HomeHero from "../components/HomeHero";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <HomeHero />
            <div className="wrap extra-narrow">
                <h2 className="center">Why Buy Our Bottles?</h2>
                <p>
                    We sell high quality water bottles at wholesale prices to ensure that you get
                    the best deal. In addition, if you're able to find a water bottle we carry at a
                    lower price elsewhere we'll match that price. Here at HydroHomies we pride
                    ourselves on always putting the customer's needs first. Now let's get shopping
                    for the perfect water bottle.
                </p>
                <div className="btns-contain center">
                    <div className="btn">
                        <Link className="btn__link" to={"/shop"}>
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
