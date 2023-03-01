import { useParams } from "react-router-dom";
import ProdInfo from "../components/ProdInfo";

const Product = () => {
    const params = useParams();

    return (
        <div>
            <h2>Product</h2>
            <ProdInfo slug={params.slug} />
        </div>
    );
};

export default Product;
