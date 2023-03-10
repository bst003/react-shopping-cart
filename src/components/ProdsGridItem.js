import React from "react";
import { Link } from "react-router-dom";
import "./ProdsGridItem.scss";

const ProdsGridItem = (props) => {
    const { name, slug, price, image } = props;

    return (
        <div className="products-grid__item">
            <img src={require(`../assets/img/${image}`)} alt={name} />
            <h4>
                {name}
                {" - "}
                <span className="price">${price}</span>
            </h4>
            <div className="btns-contain center">
                <div className="btn">
                    <Link className="btn__link" to={"/shop/" + slug}>
                        View Product
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProdsGridItem;
