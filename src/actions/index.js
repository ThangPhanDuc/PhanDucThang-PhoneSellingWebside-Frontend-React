export const addToCart = (product)=>{
    return{
        type: "addToCart",
        product:product,
    }
}

export const deleteToCart = (productId)=>{
    return{
        type: "deleteToCart",
        productId:productId
    }
}

export const upOrDownQty = (product,num)=>{
    return{
        type: "upOrDownQty",
        product:product,
        num:num,
    }
}

export const changeProductDetail = (product)=>{
    return{
        type: "changeProductDetail",
        product:product
    }
}

export const addVoucher = (voucher)=>{
    return{
        type:"addVoucher",
        voucher:voucher
    }
}

export const searchProduct = (search)=>{
    return{
        type:"searchProduct",
        search:search
    }
}