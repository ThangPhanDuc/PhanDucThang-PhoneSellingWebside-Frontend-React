import Product from "../components/product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SortProduct from "../components/sortProduct";
import axiosListProduct from "../api/listProduct";

function ListTablet() {

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getAllTablet();
    }, []);

    const getAllTablet = async () => {
        const resp = await axiosListProduct.get("listTablet");
        setListProduct(resp.data);
    }

    // xu ly xap xep
    let [products, setProducts] = useState(listProduct);
    const handleSort = (listProduct) => {
        setProducts(listProduct)
        // console.log(listProduct1);
    }

    return (
        <section>
            <div className="event-container row">
                <Link to={"/"}>Trang chủ </Link>
                <p> / Máy tính bảng</p>
            </div>
            <div className="banner">
                <img src="../images/banner/banner-tablet.jpg" alt="" />
            </div>
            <div className="row">
                <div className="filter col-3 ">
                    <div className="filter-block mt-4">
                        <p>Hãng sản xuất</p>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Apple (iPad)</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Samsung</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Masstel</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Lenovo</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Xiaomi</p>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-block">
                        <p>Mức giá</p>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Dưới 3 triệu</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Từ 3-8 triệu</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Từ 8-15 triệu</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Trên 15 triệu</p>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-block">
                        <p>Dung lượng</p>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả </p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Dưới 64 gb</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Từ 64 - 256 gb</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Trên 256 gb</p>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-block">
                        <p>Màn hình</p>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Khoảng 7 - 8 inch</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Khoảng 10 - 11 inch</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Khoảng 12 inch trở lên</p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className=" col-9 ">
                    <div className="headbox mt-5">
                        <h2>Máy tính bảng({listProduct.length} sản phẩm)</h2>
                    </div>
                    <div className="list-box shadow p-3 mb-5 bg-body-tertiary rounded">
                        <SortProduct listProduct={listProduct} handleSort={handleSort} />
                        <div className="product-wrapper d-flex align-content-between flex-wrap ">
                            {
                                listProduct.map(item => <Product key={item.id} productItem={item} />)
                            }

                        </div>
                        <button className="btn btn-light align-middle">XEM THÊM</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ListTablet;
