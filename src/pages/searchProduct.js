import Product from "../components/product";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axiosListProduct from "../api/listProduct";

function SearchProduct(props) {
    let {searchData}=props;
    let [listProduct,setListProduct] = useState([]);
    let [products,setProducts]=useState([]); 

    useEffect(() => {
        getAllPhone();
    }, []);

    const getAllPhone = async () => {
        const resp1 = await axiosListProduct.get("listPhone");
        const resp2 = await axiosListProduct.get("listPC");
        const resp3 = await axiosListProduct.get("listTablet");
        const resp4 = await axiosListProduct.get("listLaptop");
        
        const resp = [...resp1.data, ...resp2.data, ...resp3.data, ...resp4.data];
        setListProduct(resp);
    }

    if(searchData!==""){
        products= [];
        listProduct.forEach((prod)=>{
            if(prod.name.toLowerCase().includes(searchData.toLowerCase())){
                products.push(prod);
            }
        })
    
    }

    return (
        <section>
            <div className="event-container row">
                <Link to="/">Trang chủ </Link>
                <p> / Tìm kiếm</p>
            </div>
            <div className="banner">
                <img src="../images/banner-dienThoai.png" alt="" />
            </div>
            <div className="row">
                <div className=" col-12 ">
                    <div className="headbox">
                        <h3>
                            Tìm thấy <span>{products.length}</span> kết quả phù hợp với từ khóa{" "}
                            <span>"{searchData}"</span>
                        </h3>
                    </div>
                    <div className="list-box  mb-5 ">
                        <div className="normal d-flex justify-content-between">
                            <div className="list-tab d-flex justify-content-center">
                                <p>Ưu tiên xem:</p>
                                <button className="btn btn-outline-primary">Bán chạy nhất</button>
                                <button className="btn btn-outline-primary">Giá thấp</button>
                                <button className="btn btn-outline-primary">Giá cao</button>
                            </div>
                            <div className="grid-list">
                                <select name="" id="">
                                    <option value="">Bán chạy nhất</option>
                                    <option value="">Giá thấp</option>
                                    <option value="">Giá cao</option>
                                </select>
                            </div>
                        </div>
                        <div className="product-wrapper search d-flex align-content-between flex-wrap ">
                            {
                                products.map(item=><Product key={item.id} productItem={item} />)
                            }                         
                        </div>
                        <button className="btn btn-light align-middle">XEM THÊM</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({ listProduct: state.listPhone , searchData: state.searchResult });
export default connect(mapStateToProps)(SearchProduct);