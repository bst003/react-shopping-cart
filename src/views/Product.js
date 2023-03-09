import { useParams } from "react-router-dom";
import SubHero from "../components/SubHero";
import ProdInfo from "../components/ProdInfo";

const Product = (props) => {
    const { cart, addToCart } = props;
    const params = useParams();

    const passAddToCart = (cartItem) => {
        console.log("this is in Product");

        console.log(cartItem);

        addToCart(cartItem);
    };

    const displayCart = () => {
        if (cart.length > 0) {
            const cartItems = cart.map((item) => {
                return (
                    <p key={item.id}>
                        {item.name}, quantity: {item.quantity}
                    </p>
                );
            });

            return cartItems;
        }
    };

    return (
        <div>
            <SubHero title="Shop" useH2="true" />
            {displayCart()}
            <ProdInfo addToCart={passAddToCart} slug={params.slug} />
        </div>
    );
};

export default Product;
