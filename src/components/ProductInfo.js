import React, { useEffect } from "react";

import productsData from "../assets/data/productData.json";

const ProductInfo = (props) => {
    const { slug } = props;

    return (
        <div>
            <p>test - {slug}</p>
        </div>
    );
};

export default ProductInfo;
