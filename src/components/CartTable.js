import React, { useEffect, useState } from "react";
import CartTableItem from "./CartTableItem";
import "./CartTable.scss";

import productsData from "../assets/data/productData.json";

/*
TODO
    Simplify UseEffect for cartItems
        Separate everything fetching and adding cart item data into own func
    Add state for cartTotal
        Update in same useEffec for cartItems
*/

const CartTable = (props) => {
    const { cartItems, deleteCartItem, updateCartItem } = props;

    const passDeleteCartItem = (cartItem) => {
        console.log("this is in CartTable");

        console.log(cartItem);

        deleteCartItem(cartItem);
    };

    const passUpdateCartItem = (cartItem) => {
        console.log("this is in CartTable");

        console.log(cartItem);

        updateCartItem(cartItem);
    };

    const [cartItemsData, setCartItemsData] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    // Run every time the cart is updated
    useEffect(() => {
        const getCartItemsData = () => {
            const products = productsData.products;

            const cartItemsDataArr = [];

            cartItems.forEach((cartItem) => {
                const currentProductFiltered = products.filter((product) => {
                    return product.id === cartItem.id;
                });

                const currentProduct = currentProductFiltered[0];

                const currentProductDataObj = {
                    id: currentProduct.id,
                    name: currentProduct.name,
                    price: currentProduct.price,
                    image: currentProduct.image,
                    quantity: cartItem.quantity,
                };

                cartItemsDataArr.push(currentProductDataObj);
            });

            return cartItemsDataArr;
        };

        setCartItemsData(getCartItemsData());
    }, [cartItems]);

    // Run every time the cartItemsData is updated
    useEffect(() => {
        const calcCartTotal = () => {
            return cartItemsData.reduce((accumulator, cartItem) => {
                const currentItemSubTotal = cartItem.quantity * cartItem.price;

                return accumulator + currentItemSubTotal;
            }, 0);
        };

        setCartTotal(calcCartTotal());
    }, [cartItemsData]);

    const mapCartItems = () => {
        if (!cartItemsData.length) {
            return "";
        }

        const cartItemRowEls = cartItemsData.map((cartItem) => {
            return (
                <CartTableItem
                    key={cartItem.id}
                    id={cartItem.id}
                    name={cartItem.name}
                    quantity={cartItem.quantity}
                    price={cartItem.price}
                    image={cartItem.image}
                    deleteCartItem={passDeleteCartItem}
                    updateCartItem={passUpdateCartItem}
                />
            );
        });

        return cartItemRowEls;
    };

    return (
        <div className="cart-table-contain">
            <table className="cart-table">
                <thead>
                    <tr>
                        <th colSpan="2"></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>
                    </tr>
                </thead>
                <tbody>{mapCartItems()}</tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4"></td>
                        <th scope="row">Total:</th>
                        <td>{"$" + cartTotal}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
export default CartTable;
