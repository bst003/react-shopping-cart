import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProdCartForm.scss";

const ProdCartForm = (props) => {
    const { addToCart, name, id } = props;

    const [submittedQuanity, setSubmittedQuantity] = useState(0);
    const [showAddAlert, setShowAddAlert] = useState(false);

    const closeAddAlert = () => {
        setShowAddAlert(false);
    };

    const renderAddAlert = () => {
        let renderEls;
        if (showAddAlert === false) {
            renderEls = "";
        } else {
            renderEls = (
                <div className="add-alert">
                    <p>
                        You have added {submittedQuanity + " " + props.name} to your cart.{" "}
                        <Link to="/cart">View your cart now.</Link>
                    </p>
                    <button onClick={closeAddAlert} type="button" className="close-alert">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            );
        }

        return renderEls;
    };

    const submitItemToCart = (e) => {
        e.preventDefault();

        const form = e.target;

        const quantityInput = form.querySelector("#quantity");
        const itemQuantity = Number(quantityInput.value);

        const cartItem = {
            name,
            id,
            quantity: itemQuantity,
        };

        addToCart(cartItem);
        setSubmittedQuantity(itemQuantity);
        setShowAddAlert(true);

        quantityInput.value = 1;
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
            {renderAddAlert()}
        </form>
    );
};

export default ProdCartForm;
