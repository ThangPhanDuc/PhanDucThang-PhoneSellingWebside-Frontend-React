import cart from "../pages/cart";
import Home from "../pages/home";
import listPhone from "../pages/listPhone";
import ListLaptop from "../pages/listLaptop";
import ListPC from "../pages/listPC";
import ListTablet from "../pages/listTablet";
import ProductDetail from "../pages/productDetail"; 
import SearchProduct from "../pages/searchProduct";


const publicRoutes =[
    { path: "/", component: Home},
    { path: "/dien-thoai", component: listPhone},
    { path: "/laptop", component: ListLaptop},
    { path: "/PC", component: ListPC},
    { path: "/tablet", component: ListTablet},
    { path: "/gio-hang", component: cart},
    { path: "/chi-tiet-san-pham", component: ProductDetail},
    { path: "/tim-kiem-san-pham", component: SearchProduct},
]

export default publicRoutes;