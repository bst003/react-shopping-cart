const CartTableItem = (props) => {
    const { id, price, name, quantity } = props;

    return (
        <tr key={id} className="cart-table-contain">
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>SubTotal</td>
        </tr>
    );
};
export default CartTableItem;
