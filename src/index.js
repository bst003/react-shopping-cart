import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import RouteSwitch from "./RouteSwitch";

// import bottle from "./assets/img/quokka-storm-abstract-garden-thumb.jpg";

/*


Project Notes

- Routes Needed
    - Home
    - Shop
    - Single Product (dynamic route)
    - Cart

- Components Needed
    - RouteSwitch
    - Header
    - Footer
    - MainLayout (working title, used for general site structure as highest level route)
    - Home (home route element)
    - Shop (Shop route element)
    - Product (Single prod route element)
        - Have conditional check if product exists, if not then run error
    - Cart (cart route element)
    - HomePageHero (deco only - used on home)
    - SubPageHero (deco only - used on shop, single prod and cart)
    - ProductsGrid
    - ProductsGridItem
    - SingleProdForm
    - CartTable
    - Cart Table Item


- Site general structure
    - Every component will be rendered as inner output of Main Layout

- Cart State
    - Will live in RouteSwitch?
    - Array of items (objects)?
    - Separate state object for cart total (price) and cart quantity?
    - Store in localstorage


- Products Thoughts
    - Just use json datasheet?
    - Just store images in assets folder?
    - data needed per products
        - id
        - name
        - slug
        - description
        - image
        - price

- To Be Determined
    - How to set up 404 route


*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouteSwitch />
        {/* <img src={bottle} /> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
