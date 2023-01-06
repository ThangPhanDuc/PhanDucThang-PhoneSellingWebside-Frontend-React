const productDetailInit = {
    // id: 1,
    // name: "iPhone 11 64GB",
    // img: "../images/products/iphone-11.jpg",
    // price: 22990000,
    // oldPrice: 25990000,
    // cpu: "Apple A13 Bionic",
    // screen: "6.1 inch",
    // ram: "4 GB",
    // memory: "64 GB",
}

const productDetail = (state = productDetailInit, action) => {
    switch (action.type) {
        case "changeProductDetail":
            state = action.product;
            return state;
        default:
            return state;
    }
}

export default productDetail;