import { useState ,useEffect} from "react";

function SortProduct(props) {
    console.log(props);
    let {listProduct,handleSort} = props;
    let [products, setProducts] = useState(listProduct);
    
    // useEffect(()=>{
    //     handleSortProd();
    // });
   
    const handleSortProd = (e) => {
        let sortValue = e.target.value;
        let sortData = [...products];
        switch (sortValue) {
            case "Bán chạy nhất":
                sortData.sort((a, b) => a.id - b.id);
                console.log("mmmm",products);
                setProducts(sortData);
                break;
            case "Giá thấp":
                sortData.sort((a, b) => a.price - b.price);
                setProducts(sortData);
                break;
            case "Giá cao":
                sortData.sort((a, b) => b.price - a.price);
                setProducts(sortData);
                break;
            default:
                break;
        }
        handleSort(sortData);
        console.log(sortData);
    }
    return (
        <div className="normal d-flex justify-content-between">
            <div className="list-tab d-flex justify-content-center">
                <p>Ưu tiên xem:</p>
                <button onClick={handleSortProd} value="Bán chạy nhất" className="btn btn-outline-primary">Bán chạy nhất</button>
                <button onClick={handleSortProd} value="Giá thấp" className="btn btn-outline-primary">Giá thấp</button>
                <button onClick={handleSortProd} value="Giá cao" className="btn btn-outline-primary">Giá cao</button>
            </div>
            <div className="grid-list">
                <select onChange={handleSortProd} name="" id="">
                    <option value="Bán chạy nhất">Bán chạy nhất</option>
                    <option value="Giá thấp">Giá thấp</option>
                    <option value="Giá cao">Giá cao</option>
                </select>
            </div>
        </div>
    )
}

export default SortProduct;