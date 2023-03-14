import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartTableItem.scss";

const CartTableItem = (props) => {
    const { id, image, price, name, slug, quantity, deleteCartItem, updateCartItem } = props;

    const [editing, setEditing] = useState(false);

    const triggerEditQuantity = () => {
        setEditing(true);
    };

    const triggerDeleteToCart = (e) => {
        e.preventDefault();
        console.log("submit delete cart");

        const cartItem = {
            id,
        };

        deleteCartItem(cartItem);
    };

    const submitUpdateToCart = (e) => {
        e.preventDefault();
        console.log("submit update cart");

        const updatedQuantity = Number(e.target.querySelector("#quantity").value);

        const cartItem = {
            name,
            id,
            quantity: updatedQuantity,
        };

        setEditing(false);
        updateCartItem(cartItem);
    };

    const renderQuantityContents = () => {
        let renderEls;
        if (editing) {
            renderEls = (
                <form onSubmit={submitUpdateToCart} className="cart-update-quantity">
                    <div className="field-contain">
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            id="quantity"
                            name="quantity"
                            type="number"
                            min="1"
                            max="20"
                            defaultValue={quantity}
                        />
                    </div>
                    <div className="form-submit btn">
                        <button className="btn__link" type="submit">
                            Update
                        </button>
                    </div>
                </form>
            );
        } else {
            renderEls = (
                <div>
                    {quantity}
                    <button
                        onClick={triggerEditQuantity}
                        className="edit-cart icon-btn"
                        type="button"
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
            );
        }

        return renderEls;
    };

    return (
        <tr key={id} className="cart-table-item">
            <td>
                <button onClick={triggerDeleteToCart} className="edit-cart icon-btn" type="button">
                    <i className="fas fa-times"></i>
                </button>
            </td>
            <td>
                <img className="cart-thumb" src={require(`../assets/img/${image}`)} alt={name} />
            </td>
            <td data-title="Name">
                <Link to={"/shop/" + slug}>{name}</Link>
            </td>
            <td data-title="Price">{"$" + price}</td>
            <td data-title="Quantity" className="quantity-cell">
                {renderQuantityContents()}
            </td>
            <td data-title="Subtotal">{"$" + price * quantity}</td>
        </tr>
    );
};
export default CartTableItem;
