import { useParams } from "react-router-dom";

const Product = () => {
    const params = useParams();

    // console.log(params);

    return (
        <div>
            <h2>Product</h2>
            <p>{params.slug}</p>
        </div>
    );
};

export default Product;
