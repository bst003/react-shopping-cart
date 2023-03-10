import SubHero from "../components/SubHero";

const Cart = (props) => {
    const { cartItems } = props;

    const renderCartContents = () => {};

    return (
        <div>
            <SubHero title="Cart" />
            <h2>Cart</h2>
        </div>
    );
};

export default Cart;
