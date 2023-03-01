import React, { useEffect, useState } from "react";

/*
What will this comp need to do?
    Push num of products and prod data to cart
    Display Message when added to cart
*/

const ProdInfoForm = () => {
    return (
        <form className="product-info-form">
            <div className="field-contain">
                <label for="quantity">Quantity</label>
                <input id="quantity" name="quantity" type="number" min="0" max="20" />
            </div>
        </form>
    );
};

export default ProdInfoForm;
