const CartTableItem = (props) => {
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
            </table>
        </div>
    );
};
export default CartTableItem;
