import { useEffect, useState, React } from "react"
import ProductList from "./ProductList";
import db from "../..";
import { getDocs, collection } from "firebase/firestore";


const ProductContainer = () => {
    const [productsInfo, setProductsInfo] = useState([]);
    
    const getProductsInfo = () => {
        const querySnapshot = collection(db, "products");
        getDocs(querySnapshot).then((res) => {
            const data = res.docs.map((product) => {
                return { id: product.id, ...product.data() }
            })
            setProductsInfo(data)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        getProductsInfo()
    }, [])

    return (
        <div>
            <ProductList list={productsInfo} />
        </div>
    )
}

export default ProductContainer