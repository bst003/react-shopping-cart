import React from "react";
import { Link } from "react-router-dom";

const HomeHero = (props) => {
    return (
        <section className="home-hero">
            <div className="wrap">
                <div class="home-hero__inner">
                    <h1>The Most Dependable Water Bottles</h1>
                    <p>
                        Whether you're headed for an intense run, a relaxing day at the beach or to
                        your next class HydroHomies has the water bottle for you. We carry a variety
                        of water bottles for every situation. Don't wait, get shopping now.
                    </p>
                    <div className="btns-contain center">
                        <div className="btn">
                            <Link className="btn__link" to={"/shop"}>
                                View Products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomeHero;
