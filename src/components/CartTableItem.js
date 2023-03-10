const CartTableItem = (props) => {
    const { id, name, quantity } = props;

    return (
        <tr className="cart-table-contain">
            <td>{name}</td>
            <td>Price</td>
            <td>{quantity}</td>
            <td>SubTotal</td>
        </tr>
    );
};
export default CartTableItem;
