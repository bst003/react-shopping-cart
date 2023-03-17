import CartTable from "../components/CartTable";
import SubHero from "../components/SubHero";

const Cart = (props) => {
    const { cartItems, deleteCartItem, emptyCart, updateCartItem } = props;

    const passDeleteCartItem = (cartItem) => {
        deleteCartItem(cartItem);
    };

    const passEmptyCart = () => {
        emptyCart();
    };

    const passUpdateCartItem = (cartItem) => {
        updateCartItem(cartItem);
    };

    const renderCartContents = () => {
        let renderEls;

        if (cartItems.length > 0) {
            renderEls = (
                <CartTable
                    cartItems={cartItems}
                    deleteCartItem={passDeleteCartItem}
                    updateCartItem={passUpdateCartItem}
                    emptyCart={passEmptyCart}
                />
            );
        } else {
            renderEls = <p>There are currently no items in your cart</p>;
        }

        return renderEls;
    };

    return (
        <div>
            <SubHero title="Cart" />
            {renderCartContents()}
        </div>
    );
};

export default Cart;
