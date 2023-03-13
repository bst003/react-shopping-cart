import CartTable from "../components/CartTable";
import SubHero from "../components/SubHero";

const Cart = (props) => {
    const { cartItems, updateCartItem } = props;

    const passUpdateCartItem = (cartItem) => {
        console.log("this is in Cart");

        console.log(cartItem);

        updateCartItem(cartItem);
    };

    const renderCartContents = () => {
        let renderEls;

        if (cartItems.length > 0) {
            renderEls = <CartTable cartItems={cartItems} updateCartItem={passUpdateCartItem} />;
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
