import CartItem from "../components/cartItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";


function Cart(props) {
    let { cart, listVoucher } = props;
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].quantity;
    }

    //xu ly khi nhap voucher
    let discount=500000 ;
    const { register, handleSubmit } = useForm();
    let [data, setData] = useState("");
    for(let i=0;i<listVoucher.length;i++){
        if(listVoucher[i].voucherName==data.inputVoucher){
            discount=listVoucher[i].voucherDiscount+listVoucher[i].percentDiscount*sum/100;
            break;
        }
    }
    let priceFinal = sum - discount;
    return (
        <section>
            <div className="event-container cart-event-container row">
                <Link to={"/"}>Trang chủ </Link>
                <p> / Giỏ hàng</p>
            </div>
            <div className="cart shadow border-success border-opacity-25  ">
                <div className="cart-title border border-1 ">
                    <p>Có {cart.length} sản phẩm trong giỏ hàng</p>
                </div>
                <div className="cart-body ">
                    {
                        cart.map(prod => <CartItem product={prod} key={prod.id} />)
                    }
                    <div className="cart-center d-flex justify-content-between pb-3">
                        <div className="cart-coupon">
                            <p>Mã giảm giá</p>
                            <div className="input-group">
                                <form onSubmit={handleSubmit(setData)} >
                                    <input {...register("inputVoucher")}   placeholder="Nhập mã giảm giá" />
                                    <button type="submit" className="btn btn-danger">Áp dụng </button>
                                </form>

                            </div>
                        </div>
                        <div className="cart-totol">
                            <p className="text-normal ">
                                <span>Tổng tiền:</span>
                                <span>{sum}đ</span>
                            </p>
                            <p className="text-normal">
                                <span>Giảm</span>
                                <span>-{discount}đ</span>
                            </p>
                            <p className="text-lg">
                                <span className="text-size-lg">Cần thanh toán:</span>
                                <span className="priceFinal">{priceFinal}đ</span>
                            </p>
                        </div>
                    </div>
                    <div className="cart-submit border">
                        <button className="btn btn-x1 btn-danger">Hoàn tất đặt hàng</button>
                        <p>
                            Bằng cách đặt hàng, quý khách đồng ý với
                            <a href="">Điều khoản sử dụng</a>
                            của Shop
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({ cart: state.cart, listVoucher: state.listVoucher });
export default connect(mapStateToProps)(Cart);