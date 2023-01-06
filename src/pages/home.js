import { Link } from "react-router-dom";

function Home() {
    return (
        <section>
            <div className="section-home">
                <div className="banner-home mt-4">
                    <img src="../images/banner/baner-home.jpg" alt="" />
                </div>
                <div className="care-box d-flex align-content-stretch flex-wrap border mt-5 ">
                    <div className="cate-item text-center ">
                        <Link to="/dien-thoai">
                            <div className="picture mb-3">
                                <img src="../images/img-home/icon-mobile .jpg" alt="" />
                            </div>
                            <p>Điện thoại</p>
                        </Link>
                    </div>
                    <div className="cate-item text-center ">
                        <a href="">
                            <div className="picture mb-3">
                                <img src="../images/img-home/icon-laptop.jpg " alt="" />
                            </div>
                            <p>Laptop</p>
                        </a>
                    </div>
                    <div className="cate-item text-center ">
                        <a href="">
                            <div className="picture mb-3">
                                <img src="../images/img-home/icon-pc.jpg " alt="" />
                            </div>
                            <p>PC - Lắp ráp</p>
                        </a>
                    </div>
                    <div className="cate-item text-center ">
                        <a href="">
                            <div className="picture mb-3">
                                <img src="../images/img-home/icon-tablet.jpg" alt="" />
                            </div>
                            <p>Máy tính bảng</p>
                        </a>
                    </div>
                    <div className="cate-item text-center ">
                        <a href="">
                            <div className="picture mb-3">
                                <img src="../images/img-home/icon-smart.jpg" alt="" />
                            </div>
                            <p>Thiết bị thông minh</p>
                        </a>
                    </div>
                    <div className="cate-item text-center ">
                        <a href="">
                            <div className="picture mb-3">
                                <img src="../images/img-home/icon-houseware.jpg" alt="" />
                            </div>
                            <p>Gia dụng</p>
                        </a>
                    </div>
                    <div className="cate-item text-center ">
                        <a href="">
                            <div className="picture mb-3">
                                <img src="../images/img-home/icon-apple.jpg" alt="" />
                            </div>
                            <p>Apple</p>
                        </a>
                    </div>
                    <div className="cate-item text-center ">
                        <a href="">
                            <div className="picture mb-3">
                                <img src="../images/img-home/icon-samsung.jpg" />
                            </div>
                            <p>Samsung</p>
                        </a>
                    </div>
                    <div className="cate-item text-center ">
                        <a href="">
                            <div className="picture mb-3">
                                <img src="../images/img-home/icon-smartwatch.jpg" alt="" />
                            </div>
                            <p>Đồng hồ thông minh</p>
                        </a>
                    </div>
                    <div className="cate-item text-center ">
                        <a href="">
                            <div className="picture mb-3">
                                <img src="../images/img-home/icon-accessories.jpg" alt="" />
                            </div>
                            <p>Phụ kiện</p>
                        </a>
                    </div>
                    <div className="cate-item text-center ">
                        <a href="">
                            <div className="picture mb-3">
                                <img src="../images/img-home/icon-screen.jpg" alt="" />
                            </div>
                            <p>Màn hình</p>
                        </a>
                    </div>
                    <div className="cate-item text-center ">
                        <a href="">
                            <div className="picture mb-3">
                                <img src="../images/img-home/icon-tcdm.jpg" alt="" />
                            </div>
                            <p>Máy cũ</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Home;