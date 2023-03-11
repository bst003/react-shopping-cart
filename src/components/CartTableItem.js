import React, { useEffect, useState } from "react";

const CartTableItem = (props) => {
    const { id, price, name, quantity } = props;

    const [editing, setEditing] = useState(false);

    return (
        <tr key={id} className="cart-table-contain">
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{price * quantity}</td>
        </tr>
    );
};
export default CartTableItem;
