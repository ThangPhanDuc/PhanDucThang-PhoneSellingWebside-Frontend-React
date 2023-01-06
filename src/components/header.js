import { Link, Outlet, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useForm } from "react-hook-form"
import { searchProduct } from "../actions";
import { useNavigate } from "react-router-dom";


function Header(props) {
    let { cart, searchProduct } = props;
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const Submitdata = (data) => {
        searchProduct(data);
        navigate("/tim-kiem-san-pham")
    }
    return (
        <header>
            <div className="header">
                <div className="hdtop d-flex justify-content-between">
                    <Link to={"/"} className="logo">
                        <p>Home</p>
                    </Link>
                    <div className="search d-flex align-items-center">
                        <form onSubmit={handleSubmit(Submitdata)} action="" >
                            <input
                                // type="text"
                                {...register("dataSearch")}
                                placeholder="  Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
                            />
                            <button type="submit" className="align-items-center">
                                <i className="fa-solid fa-magnifying-glass" />
                            </button>
                        </form>
                    </div>
                    <ul className="hdmn d-flex justify-content-between">
                        <li>
                            <a href="../tinTuc">
                                <i className="fa-solid fa-newspaper" />
                                <p>Tin tức</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa-regular fa-user" />
                                <p>Tài khoản</p>
                            </a>
                        </li>
                        <li>
                            <Link to={"/gio-hang"}>
                                <i className="fa-solid fa-cart-shopping" />
                                <p>Giỏ hàng</p>
                                <b className="countTotolCart">{cart.length}</b>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <ul className="d-flex justify-content-between">
                        <li>
                            <Link to={"/dien-thoai"}>
                                <i className="fa-solid fa-mobile-screen" />
                                <p>ĐIỆN THOẠI</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/laptop"}>
                                <i className="fa-solid fa-laptop" />
                                <p>LAPTOP</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/tablet">
                                <i className="fa-solid fa-tablet-screen-button"></i>
                                <p>MÁY TÍNH BẢNG</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/PC">
                                <i className="fa-solid fa-desktop" />
                                <p>PC</p>
                            </Link>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa-solid fa-headphones-simple" />
                                <p>PHỤ KIỆN</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => ({ cart: state.cart });
const mapDispatchToProps = { searchProduct };
export default connect(mapStateToProps, mapDispatchToProps)(Header);