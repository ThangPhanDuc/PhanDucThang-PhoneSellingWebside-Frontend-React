const listVoucherInit=[
    {
        idVoucher:1,
        voucherName:"khach hang vip",
        voucherDiscount:1000000,
        percentDiscount:0
    },
    {
        idVoucher:2,
        voucherName:"con chu tich",
        voucherDiscount:0,
        percentDiscount:100
    },

]

const listVoucher =(state=listVoucherInit,action)=>{
    switch (action.type) {
        default:
            return state;
    }
}

export default listVoucher;