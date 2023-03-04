import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Product from "./views/Product";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound";
import MainLayout from "./MainLayout";

const RouteSwitch = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (itemObj) => {
        /*
        Account for:
            Adding another of an item in cart
            adding new item to cart
            Comsider renaming to addToCart?
        */
        setCart([itemObj]);
        console.log("cart updated");
    };

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route
                        path="/shop/:slug"
                        element={<Product cart={cart} addToCart={addToCart} />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
