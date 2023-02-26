import React from "react";
import ProductsGridItem from "./ProductsGridItem";
import "./ProductsGrid.scss";

import productData from "../assets/data/productData.json";

const ProductsGrid = () => {
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
