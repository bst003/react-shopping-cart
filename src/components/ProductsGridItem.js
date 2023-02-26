import React from "react";
import { Link } from "react-router-dom";

const ProductsGridItem = (props) => {
    const { name, slug, price, image } = props;

    return (
        <div className="products-grid__item">
            <img src={require(`../assets/img/${image}`)} alt={name} />
            <h4>{name}</h4>
            <p className="price">{price}</p>
            <Link to={"/shop/" + slug}>View Product</Link>
        </div>
    );
};

export default ProductsGridItem;
