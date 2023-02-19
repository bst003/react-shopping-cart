import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import MainLayout from "./MainLayout";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
