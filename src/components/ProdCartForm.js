import React, { useEffect, useRef } from "react";
import "./ProdCartForm.scss";

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

        const form = e.target;
        const quantityInput = form.querySelector("#quantity");
        console.log("add");

        const itemQuantity = Number(quantityInput.value);

        const cartItem = {
            name,
            id,
            price,
            quantity: itemQuantity,
        };

        console.log(cartItem);

        addToCart(cartItem);

        quantityInput.value = 1;
    };

    const formRef = useRef(null);

    useEffect(() => {
        const formElement = formRef.current;

        formElement.addEventListener("submit", submitItemToCart);

        return () => {
            formElement.removeEventListener("submit", submitItemToCart);
        };
    });

    return (
        <form ref={formRef} className="product-cart-form">
            <div className="field-contain hori">
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
