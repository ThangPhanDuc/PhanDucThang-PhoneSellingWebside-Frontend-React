import { connect } from "react-redux";
import { addToCart } from "../actions";

function ProductDetail(props) {
    let {product,addToCart}=props;
    return (
        <section>
            <div className="event-container row">
                <a href="">Trang chủ </a>
                <p> / </p>
                <a href="">Điện thoại</a>
                <p>/</p>
                <a href="">Apple(Iphone)</a>
            </div>
            <div className="product-detail ">
                <div className="product-top d-flex justify-content-between">
                    <h2 className="product-name">{product.name}</h2>
                    <div className="product-rating d-flex">
                        <div className="rating-star mr-3">
                            <ul className="d-flex">
                                <li>
                                    <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                    <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                    <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                    <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                    <i className="fa-solid fa-star" />
                                </li>
                            </ul>
                        </div>
                        <div className="rating-link">
                            <a href="">239 đánh giá</a>
                            <span>|</span>
                            <a href="">6593 Hỏi &amp; đáp </a>
                        </div>
                    </div>
                </div>
                <div className="product-row row d-flex pt-3">
                    <div className="product-left col-6">
                        <div className="slider ">
                            <img src={product.img} alt="" />
                        </div>
                        <div className="b-g-slider">
                            <img className="" src="../images/background/background.jpg" alt="" />
                            <div className="d-flex">
                                <p>LÌ XÌ</p>
                                <p>500.000Đ</p>
                            </div>
                        </div>
                        <div className="slider-feature d-flex d-flex justify-content-around mt-5">
                            <a href="slider-feature-item">
                                <i className="fa-solid fa-images" />
                                <p>Xem thêm 20 ảnh</p>
                            </a>
                            <a href="slider-feature-item">
                                <i className="fa-brands fa-youtube" />
                                <p>Video trên tay</p>
                            </a>
                            <a href="slider-feature-item">
                                <i className="fa-solid fa-box-open" />
                                <p>Trong hộp có gì</p>
                            </a>
                        </div>
                    </div>
                    <div className="product-right col-6 p-3">
                        <div className="product-price d-flex justify-content-between ">
                            <div className="price-left d-flex">
                                <p className="price-main">{product.price}₫</p>
                                <p className="price-sub">{product.oldPrice}₫</p>
                            </div>
                            <div className="price-right">
                                <p className="text-right">Trả góp chỉ từ</p>
                                <p className="text-right">
                                    <strong>1.816.000₫</strong>/tháng
                                </p>
                            </div>
                        </div>
                        <div className="product-param border p-1">
                            <ul>
                                <li>
                                    <i className="fa-solid fa-mobile-screen-button" />
                                    <p>{product.screen}</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-camera" />
                                    <p>12.0 MP + 12.0 MP</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-camera-rotate" />
                                    <p>12.0 MP</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-microchip" />
                                    <p>{product.cpu}</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-memory" />
                                    <p>{product.memory}</p>
                                </li>
                                <a href="">Xem chi tiết thông số kỹ thuật</a>
                            </ul>
                        </div>
                        <button onClick={()=>addToCart(product)} className="btn-buy-now  btn btn-full btn-danger">
                            <strong>MUA NGAY</strong>
                            <p>Giao hàng miễn phí hoạc nhận tại shop</p>
                        </button>
                        <div className="btn-installment d-flex justify-content-betwee">
                            <div>
                                <button className="btn btn-primary">
                                    <strong>TRẢ GÓP 0%</strong>
                                    <p>Duyệt nhanh qua điện thoại</p>
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-primary">
                                    <strong>TRẢ GÓP QUA THẺ</strong>
                                    <p>Visa, master cart, JCB, AMEX</p>
                                </button>
                            </div>
                        </div>
                        <p className="hotline">
                            Gọi <a href="">1800-6601</a> để được tư vấn mua hàng (Miễn phí)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({ product: state.productDetail });
const mapDispatchToProps ={addToCart}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);