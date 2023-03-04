import React, { useEffect, useState } from "react";

/*
What will this comp need to do?
    Push num of products and prod data to cart
        OnSubmit check quanity
        Will need to pass prod data into obj
    Display Message when added to cart
*/

const ProdCartForm = (props) => {
    const { addToCart, name, id, price } = props;

    const submitItemToCart = (e) => {
        e.preventDefault();
        console.log("add");

        const itemQuantity = Number(document.querySelector("#quantity").value);

        const cartItem = {
            name,
            id,
            price,
            quantity: itemQuantity,
        };

        console.log(cartItem);

        addToCart(cartItem);
    };

    return (
        <form onSubmit={submitItemToCart} className="product-cart-form">
            <div className="field-contain">
                <label htmlFor="quantity">Quantity</label>
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
