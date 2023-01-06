import Product from "../components/product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SortProduct from "../components/sortProduct";
import axiosListProduct from "../api/listProduct";

function ListPhone() {

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getAllPhone();
    }, []);

    const getAllPhone = async () => {
        const resp = await axiosListProduct.get("listPhone");
        setListProduct(resp.data);
    }
    
    // xu ly xap xep
    const handleSort = (listProduct) => {
        setListProduct(listProduct);  
    }

    return (
        <section>
            <div className="event-container row">
                <Link to={"/"}>Trang chủ </Link>
                <p> / Điện thoại</p>
            </div>
            <div className="banner">
                <img src="../images/banner/banner-dienThoai.png" alt="" />
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
                                <p>Apple(iPhone)</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Samsung</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>OPPO</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Xiaomi</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Vivo</p>
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
                                <p>Dưới 2 triệu</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Từ 2-4 triệu</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Từ 2-4 triệu</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Từ 2-4 triệu</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Trên 13 triệu</p>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-block">
                        <p>Tính năng đặc biệt</p>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả </p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Bảo mật vân tay</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p> Nhận diện khuôn mặt</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Chống nước &amp; bụi</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Sạc nhanh</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Hỗ trợ 5g</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Sạc không dây</p>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-block">
                        <p>Hiệu năng và Pin</p>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Dưới 3000 mah</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Từ 3000 - 4000 mah</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Pin từ 4000 - 5000 mah</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Siêu trâu: trên 5000 mah</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Chơi game / cấu hình cao</p>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-block">
                        <p>Màn hình </p>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Màn hình nhỏ: dưới 5.0 inch</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Nhỏ gọn vừa tay: dưới 6.0 inch, tràn viền</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Trên 6.0 inch</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Màn hình gập</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" col-9 ">
                    <div className="headbox mt-5">
                        <h2>Điện Thoại({listProduct.length} sản phẩm)</h2>
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

export default ListPhone;
