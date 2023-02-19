import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import NotFound from "./views/NotFound";
import MainLayout from "./MainLayout";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
