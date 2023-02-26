import { useParams } from "react-router-dom";
import ProductInfo from "../components/ProductInfo";

const Product = () => {
    const params = useParams();

    return (
        <div>
            <h2>Product</h2>
            <ProductInfo slug={params.slug} />
        </div>
    );
};

export default Product;
