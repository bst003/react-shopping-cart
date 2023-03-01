import React, { useEffect, useState } from "react";

/*
What will this comp need to do?
    Push num of products and prod data to cart
        OnSubmit check quanity
        Will need to pass prod data into obj
    Display Message when added to cart
*/

const ProdCartForm = () => {
    return (
        <form className="product-cart-form">
            <div className="field-contain">
                <label for="quantity">Quantity</label>
                <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    max="20"
                    defaultValue="1"
                />
            </div>
            <div className="form-submit btn">
                <button className="btn__link" type="submit">
                    Add to Cart
                </button>
            </div>
        </form>
    );
};

export default ProdCartForm;
