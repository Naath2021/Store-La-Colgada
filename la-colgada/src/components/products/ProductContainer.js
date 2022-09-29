
import { useEffect, useState, React } from "react"
import ProductList from "./ProductList";
import db from "../..";
import { getDocs, collection } from "firebase/firestore";

const ProductContainer = () => {

    const [productsInfo, setProductsInfo] = useState([]);

//fn para llamar a la data de firebase
    const getProductsInfo = new Promise((resolve) => {
        //se hace llama a la colección deseada
        const querySnapshot = collection(db, "products");
        //una vez que reciba la info el .then realiza la función que se va a aplicar a esos datos
        getDocs(querySnapshot).then((res) => {
            const data = res.docs.map((product) => {
                return { id: product.id, ...product.data() }
            })
            setTimeout(() => {
                resolve(data)
            }, 500)
        })
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