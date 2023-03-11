import React, { useEffect, useState } from "react";

const CartTableItem = (props) => {
    const { id, price, name, quantity } = props;

    const [editing, setEditing] = useState(false);

    const triggerEditQuantity = () => {
        setEditing(true);
    };

    const renderQuantityContents = () => {
        let renderEls;
        if (editing) {
            renderEls = (
                <form className="cart-update-quantity">
                    <div className="field-contain hori">
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
                    <button onClick={triggerEditQuantity} className="edit-cart" type="button">
                        Edit
                    </button>
                </div>
            );
        }

        return renderEls;
    };

    return (
        <tr key={id} className="cart-table-contain">
            <td>{name}</td>
            <td>{price}</td>
            <td>{renderQuantityContents()}</td>
            <td>{price * quantity}</td>
        </tr>
    );
};
export default CartTableItem;
