import React from "react";
import ProdsGridItem from "./ProdsGridItem";
import "./ProdsGrid.scss";

import productsData from "../assets/data/productData.json";

const ProductsGrid = () => {
    const mapProducts = () => {
        const products = productsData.products;

        const productGridEls = products.map((product) => {
            return (
                <ProdsGridItem
                    key={product.id}
                    name={product.name}
                    slug={product.slug}
                    price={product.price}
                    image={product.image}
                />
            );
        });

        return productGridEls;
    };

    return (
        <section className="products-grid-sect">
            <h2>All Products</h2>
            <div className="products-grid">{mapProducts()}</div>
        </section>
    );
};

export default ProductsGrid;
