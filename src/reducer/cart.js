const cartInit = [
    
];

const getIndexByProduct = (listcart, product) => {
    for (let index = 0; index < listcart.length; index++) {
        if (product.id === listcart.product.id) {
            return index;
        }
    }
    return -1;
}

const cart = (state = cartInit, action) => {
    switch (action.type) {
        case "addToCart":
            let prodAdd = state.find(x => x.id === action.product.id);
            if (prodAdd) {
                action.product.quantity++
            } else {
                action.product.quantity = 1;
                state.push(action.product)
            }
            return state;
        case "deleteToCart":
            let newState = state.filter(x => x.id != action.productId)
            return newState;
        case "upOrDownQty":
            for(let i=0;i<state.length;i++){
                if(state[i].id===action.product.id){
                    state[i].quantity+=action.num;
                }
            }
            return state;
        case "addVoucher":
            return     
        default:
            return state;
    }
}

export default cart;