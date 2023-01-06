import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteToCart, upOrDownQty,changeProductDetail } from "../actions";
import { useEffect } from "react";
  
function CartItem(props) {
    let { product, deleteToCart, upOrDownQty,changeProductDetail } = props;
    let priceFinal = product.price * product.quantity;

    // useEffect = (()=>{
    //     upOrDownQty()
    // },priceFinal)
    return (
        <div className="product-cart d-flex  justify-content-start border ">
            <div className="product-cart-image">
                <img src={product.img} alt="" />
            </div>
            <div className="product-cart-inside ">
                <Link to={"/chi-tiet-san-pham"} onClick={()=>changeProductDetail(product)}>
                    <h3>{product.name}</h3>
                </Link>
                <select name="" id="">
                    <option value="">Vàng</option>
                    <option value="">Xanh</option>
                    <option value="">Trắng</option>
                </select>
            </div>
            <div className="product-cart-price">
                <p className="price-main">{product.price}₫</p>
                <p className="price-sub">{product.oldPrice}₫</p>
            </div>
            <div className="product-cart-quality">
                <div className="product-cart-quality-wrap d-flex">
                    <button onClick={() => upOrDownQty(product, -1)}>-</button>
                    <input type="" defaultValue={product.quantity} />
                    <button onClick={() => upOrDownQty(product, 1)}  >+</button>
                </div>
                <div onClick={() => deleteToCart(product.id)} className="product-car-remove d-flex">
                    <i className="fa-solid fa-trash" />
                    <p> Xóa</p>
                </div>
                
            </div>
            <div className="product-cart-price-final">
                <p className="price-main-final">{priceFinal}₫</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = { deleteToCart, upOrDownQty,changeProductDetail };
export default connect(null, mapDispatchToProps)(CartItem);