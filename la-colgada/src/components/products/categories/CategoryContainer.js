import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import db from "../../.."
import { collection, getDocs, query, where } from "firebase/firestore"
import ProductList from "../ProductList"

const CategoryContainer = () => {

  const { category } = useParams();
  const [productCategory, setProductCategory] = useState();

  const categoryCollection = collection(db, "products");
  const queryFiltered = query(categoryCollection, where("category", "==", category))
  if (category) {
    getDocs(queryFiltered).then((res) => {
      const data = res.docs.map((product) => {
        return { id: product.id, ...product.data() }
      })
      setProductCategory(data)
    })
  } else {
    getDocs(categoryCollection).then((res) => {
      const data = res.docs.map((product) => {
        return { id: product.id, ...product.data() }
      })

      setProductCategory(data)

    })
  }


  return (
    <div>{productCategory && <ProductList list={productCategory} />}</div>
  )
}

export default CategoryContainer