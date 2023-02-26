import React from "react";
import { Link } from "react-router-dom";

const ProductsGridItem = (props) => {
    const { name, slug, price } = props;

    return (
        <div className="products-grid__item">
            <h4>{name}</h4>
            <p class="price">{price}</p>
            <Link to={"/shop/" + slug}>View Product</Link>
        </div>
    );
};

export default ProductsGridItem;
