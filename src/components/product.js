import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart,changeProductDetail } from "../actions";





function Product(props) {
    let { productItem ,addToCart,changeProductDetail} = props;
    return (
        <div className="product border rounded-sm shadow ">
            <Link to={"/chi-tiet-san-pham"}
                onClick={()=>changeProductDetail(productItem)}
            >
                <img src={productItem.img} alt="" />
                <h2 className="product-name">
                    {productItem.name}{" "}
                </h2>
            </Link>
            <div className="price-box d-flex justify-content-around">
                <p className="price">{productItem.price} ₫</p>
                <p className="old-price">{productItem.oldPrice} ₫</p>
            </div>
            <div className="product-config d-flex align-content-around flex-wrap">
                <p>{productItem.cpu}</p>
                <i className="fa-duotone fa-phone-arrow-down-left" />
                <p>{productItem.screen}</p>
                <p>{productItem.ram}</p>
                <p>{productItem.memory}</p>
            </div>
            <button onClick={()=>addToCart(productItem)} className="btn btn-danger">MUA NGAY</button>
        </div>
    )
}

const mapDispatchToProps ={addToCart,changeProductDetail}
export default connect(null,mapDispatchToProps)(Product); 