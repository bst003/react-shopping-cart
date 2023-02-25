import React from "react";
import ProductsGridItem from "./ProductsGridItem";

import productData from "../assets/data/productData.json";

const ProductsGrid = (props) => {
    // const [loading, setLoading] = useState(true);

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const getProductData = async () => {
    //         try {
    //             const response = await fetch("../assets/data/productData.json");

    //             const products = await response.json().products;

    //             console.log(response);

    //             return products;
    //         } catch (err) {
    //             console.log("Error fetching products");
    //             console.error(err);
    //         }
    //     };

    //     const fillProductsState = async () => {
    //         const productsArr = await getProductData();

    //         setProducts(productsArr);
    //     };

    //     fillProductsState();
    // }, []);

    const mapProducts = () => {
        console.log(productData.products);

        const products = productData.products;

        const productGridEls = products.map((product) => {
            return (
                <ProductsGridItem
                    key={product.id}
                    name={product.name}
                    slug={product.slug}
                    price={product.price}
                />
            );
        });

        return productGridEls;
    };

    return (
        <section className="products-grid">
            Test
            {mapProducts()}
        </section>
    );
};

export default ProductsGrid;
