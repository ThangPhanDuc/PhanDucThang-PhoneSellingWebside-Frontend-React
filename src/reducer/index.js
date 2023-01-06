import { combineReducers } from "redux";
// import listPhone from "./listPhone";
// import listLaptop from "./listLaptop";
import cart from "./cart";
import productDetail from "./productDetail";
import searchResult from "./searchResult";
import listVoucher from "./listVoucher";

const reducer = combineReducers({
    // listPhone,
    // listLaptop,
    cart,
    productDetail,
    searchResult,
    listVoucher,
})

export default reducer;