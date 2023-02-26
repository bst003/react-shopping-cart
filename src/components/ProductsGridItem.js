import React from "react";
import { Link } from "react-router-dom";
import "./ProductsGridItem.scss";

const ProductsGridItem = (props) => {
    const { name, slug, price, image } = props;

    return (
        <div className="products-grid__item">
            <img src={require(`../assets/img/${image}`)} alt={name} />
            <h4>{name}</h4>
            <p className="price">{price}</p>
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

export default ProductsGridItem;
