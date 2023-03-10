import CartTable from "../components/CartTable";
import SubHero from "../components/SubHero";

const Cart = (props) => {
    const { cartItems } = props;

    const renderCartContents = () => {
        let renderEls;

        if (cartItems.length > 0) {
            renderEls = <CartTable cartItems={cartItems} />;
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
