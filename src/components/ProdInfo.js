import React, { useEffect, useState } from "react";
import "./ProdInfo.scss";

import productsData from "../assets/data/productData.json";

const ProdInfo = (props) => {
    const { slug } = props;

    const [prodData, setProdData] = useState({});

    useEffect(() => {
        const products = productsData.products;

        const currentProduct = products.filter((product) => {
            return product.slug === slug;
        });

        console.log(currentProduct);

        setProdData(currentProduct[0]);
    }, [slug]);

    const renderProductInfo = () => {
        let renderEls;
        if (!prodData.hasOwnProperty("name")) {
            renderEls = <p>Loading</p>;
        } else {
            const { name, image, price, description, id } = prodData;

            renderEls = (
                <div className="product-info__inner">
                    <figure className="produft-info__image">
                        <img src={require(`../assets/img/${image}`)} alt={name} />
                    </figure>
                    <div className="produft-info__desc">
                        <h1 className="h2">{name}</h1>
                        <p className="price">
                            <strong>${price}</strong>
                        </p>
                        <p>{description}</p>
                    </div>
                </div>
            );
        }

        return renderEls;
    };

    return <section className="product-info">{renderProductInfo()}</section>;
};

export default ProdInfo;
