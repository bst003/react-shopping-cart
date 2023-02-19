import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Product from "./views/Product";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound";
import MainLayout from "./MainLayout";

import productData from "./assets/data/productData.json";

const RouteSwitch = () => {
    console.log(productData);
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route
                        path="/shop/:slug"
                        loader={({ params }) => {
                            return productData.filter((product) => {
                                console.log(product);
                                return product.slug === params.slug;
                            });
                        }}
                        element={<Product />}
                        errorElement={<NotFound />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
