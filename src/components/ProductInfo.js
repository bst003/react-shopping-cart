import React, { useEffect } from "react";

const ProductInfo = (props) => {
    const { slug } = props;

    return (
        <div>
            <p>test - {slug}</p>
        </div>
    );
};

export default ProductInfo;
