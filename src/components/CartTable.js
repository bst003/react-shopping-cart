import React, { useEffect, useState } from "react";
import CartTableItem from "./CartTableItem";

import productsData from "../assets/data/productData.json";

/*
TODO
    Simplify UseEffect for cartItems
        Separate everything fetching and adding cart item data into own func
    Add state for cartTotal
        Update in same useEffec for cartItems
*/

const CartTable = (props) => {
    const { cartItems } = props;

    const [cartItemsData, setCartItemsData] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    // Run every time the cart is updated
    useEffect(() => {
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

        setCartItemsData(cartItemsDataArr);
    }, [cartItems]);

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
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>
                    </tr>
                </thead>
                <tbody>{mapCartItems()}</tbody>
                <tfoot>
                    <tr>
                        <th scope="row" colspan="3">
                            Total:
                        </th>
                        <td>test</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
export default CartTable;
