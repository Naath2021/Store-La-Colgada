import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductsMock from "../ProductsMock"
import ProductList from "../ProductList"

const CategoryContainer = () => {

  const { category } = useParams();

  const [productCategory, setProductCategory] = useState();

  const getProductCategory = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ProductsMock.filter((mock) => mock.category === category))
    }, 1000);
  });

  useEffect(() => {
    getProductCategory.then((response) => {
      setProductCategory(response)
    })
  })

  return (
    <div>{productCategory && <ProductList list={productCategory} />}</div>
  )
}

export default CategoryContainer