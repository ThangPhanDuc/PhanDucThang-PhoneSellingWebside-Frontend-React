import Product from "../components/product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SortProduct from "../components/sortProduct";
import axiosListProduct from "../api/listProduct";

function ListPC() {

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getAllPC();
    }, []);

    const getAllPC = async () => {
        const resp = await axiosListProduct.get("listPC");
        setListProduct(resp.data);
    }
    
    // xu ly xap xep
    let [products, setProducts] = useState(listProduct);
    const handleSort = (listProduct1) => {
        setProducts(listProduct1)
        // console.log(listProduct1);
    }

    return (
        <section>
            <div className="event-container row">
                <Link to={"/"}>Trang chủ </Link>
                <p> / Máy tính để bàn</p>
            </div>
            <div className="banner">
                <img src="../images/banner/banner-PC.jpg" alt="" />
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
                                <p>E-Power</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Apple (iMac)</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Apple (Mac mini)</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Lenovo</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Dell</p>
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
                        <p>CPU</p>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả </p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Apple M1</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>Intel Core i3</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p> Intel Core i5</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>AMD Ryzen 3</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>AMD Ryzen 5</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p> AMD Ryzen 7</p>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-block">
                        <p>RAM</p>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>4 GB</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>8 GB</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>16 GB</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>32 GB</p>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-block">
                        <p>Ổ cứng</p>     
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>Tất cả</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p> SSD 128 GB</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p>SSD 256 GB</p>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <p> SSD 512 GB</p>
                            </li>                      
                        </ul>
                    </div>
                </div>
                <div className=" col-9 ">
                    <div className="headbox mt-5">
                        <h2>Máy tính để bàn({listProduct.length} sản phẩm)</h2>
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

export default ListPC;
