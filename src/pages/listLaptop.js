import Product from "../components/product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SortProduct from "../components/sortProduct";
import axiosListProduct from "../api/listProduct";


function ListLaptop(props) {
    const [listProduct, setListProduct] = useState([]);
    
    useEffect(() => {
        getAllLaptop();
    }, []);

    const getAllLaptop = async () => {
        const resp = await axiosListProduct.get("listLaptop");
        setListProduct(resp.data);
    }
    
    // xu ly xap xep
    let [products, setProducts] = useState(listProduct);
    const handleSort = (listProduct) => {
        setProducts(listProduct)
    }
    return (
        <section>
            <div className="event-container row">
                <Link href="">Trang chủ </Link>
                <p> / Laptop</p>
            </div>
            <div className="banner">
                <img src="../images/banner/banner-laptop.jpg" alt="" />
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
                                <p>Apple (MacBook)</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Asus</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>HP</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Dell</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>LG</p>
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
                                <p>Dưới 10 triệu</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Từ 10-15 triệu</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Từ 15-20 triệu</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Từ 20-25 triệu</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Trên 25 triệu</p>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-block">
                        <p>Màn hình</p>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả </p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Khoảng 13 inch</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p> Khoảng 14 inch</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Trên 15 inch</p>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-block">
                        <p>CPU</p>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Intel celeron</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Intel pentium</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Intel core i3</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Intel core i5</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Intel core i7</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>SAmd ryzen 3</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>SAmd ryzen 5</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>SAmd ryzen 7</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>SAmd ryzen 9</p>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-block">
                        <p>RAM </p>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>4 gb</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>8 gb</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>16 gb</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>32 gb</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" col-9 ">
                    <div className="headbox mt-5">
                        <h2>Laptop({listProduct.length } sản phẩm)</h2>
                    </div>
                    <div className="list-box laptop shadow p-3 mb-5 bg-body-tertiary rounded">
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


export default ListLaptop;