
import { useEffect, useState, React } from "react"
import ProductList from "./ProductList";
import ProductsMock from "./ProductsMock";

const ProductContainer = () => {

    const [productsInfo, setProductsInfo] = useState([]);


    const getProductsInfo = new Promise((resolve) => {
        setTimeout(() => {
            resolve(ProductsMock)
        }, 2000)
    })

    useEffect(() => {
        getProductsInfo.then((response) => {
            setProductsInfo(response)
        })
    })

    return (
        <div>
            <ProductList list={productsInfo} />
        </div>
    )
}

export default ProductContainer