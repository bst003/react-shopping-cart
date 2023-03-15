import { useParams } from "react-router-dom";
import SubHero from "../components/SubHero";
import ProdInfo from "../components/ProdInfo";

const Product = (props) => {
    const { addToCart } = props;
    const params = useParams();

    const passAddToCart = (cartItem) => {
        console.log("this is in Product");

        console.log(cartItem);

        addToCart(cartItem);
    };

    return (
        <div>
            <SubHero title="Shop" useH2="true" />
            <ProdInfo addToCart={passAddToCart} slug={params.slug} />
        </div>
    );
};

export default Product;
