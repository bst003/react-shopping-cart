import CartTableItem from "./CartTableItem";

const CartTable = (props) => {
    const { cartItems } = props;

    const mapCartItems = () => {
        const cartItemRowEls = cartItems.map((cartItem) => {
            return (
                <CartTableItem
                    key={cartItem.id}
                    name={cartItem.name}
                    quantity={cartItem.quantity}
                />
            );
        });

        return cartItemRowEls;
    };

    return (
        <div className="cart-table-contain">
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
};
export default CartTable;
