import React from "react";
import "./SubHero.scss";

const HomeHero = (props) => {
    const { title, useH2 } = props;
    return (
        <section className="sub-hero full-width">
            <div className="wrap">
                <div className="sub-hero__inner">
                    {useH2 ? (
                        <h2 className="title h1">{title}</h2>
                    ) : (
                        <h1 className="title">{title}</h1>
                    )}
                </div>
            </div>
        </section>
    );
};
export default HomeHero;
