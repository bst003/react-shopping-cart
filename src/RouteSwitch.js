import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Product from "./views/Product";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound";
import MainLayout from "./MainLayout";

const RouteSwitch = () => {
    const [cart, setCart] = useState(
        localStorage.getItem("cart-contents")
            ? JSON.parse(localStorage.getItem("cart-contents"))
            : []
    );
    const [cartQuantity, setCartQuantity] = useState(0);

    const itemIsInCart = (itemObj) => {
        return cart.find((cartItem) => cartItem.id === itemObj.id);
    };

    const findMatchingIndex = (itemObj) => {
        return cart.findIndex((cartItem) => cartItem.id === itemObj.id);
    };

    const addToCart = (itemObj) => {
        if (itemIsInCart(itemObj)) {
            const updatedItemIndex = findMatchingIndex(itemObj);

            const updatedItemCurrentQuantity = cart[updatedItemIndex].quantity;

            itemObj.quantity = Number(itemObj.quantity) + Number(updatedItemCurrentQuantity);

            setCart([
                ...cart.slice(0, updatedItemIndex),
                itemObj,
                ...cart.slice(updatedItemIndex + 1, cart.length),
            ]);
        } else {
            setCart([...cart, itemObj]);
        }
    };

    const deleteCartItem = (itemObj) => {
        const updatedItemIndex = findMatchingIndex(itemObj);

        setCart([
            ...cart.slice(0, updatedItemIndex),
            ...cart.slice(updatedItemIndex + 1, cart.length),
        ]);
    };

    const emptyCart = () => {
        setCart([]);
    };

    const updateCartItem = (itemObj) => {
        const updatedItemIndex = findMatchingIndex(itemObj);

        setCart([
            ...cart.slice(0, updatedItemIndex),
            itemObj,
            ...cart.slice(updatedItemIndex + 1, cart.length),
        ]);
    };

    useEffect(() => {
        localStorage.setItem("cart-contents", JSON.stringify(cart));

        if (cart.length > 0) {
            const initialValue = 0;
            const getCartQuantity = cart.reduce(
                (accumulator, currentItem) => accumulator + currentItem.quantity,
                initialValue
            );

            setCartQuantity(getCartQuantity);
        } else {
            setCartQuantity(0);
        }
    }, [cart]);

    return (
        <BrowserRouter basename="/react-shopping-cart">
            <Routes>
                <Route element={<MainLayout cartQuantity={cartQuantity} />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route
                        path="/shop/:slug"
                        element={<Product cart={cart} addToCart={addToCart} />}
                    />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cartItems={cart}
                                updateCartItem={updateCartItem}
                                deleteCartItem={deleteCartItem}
                                emptyCart={emptyCart}
                            />
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
