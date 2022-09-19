
import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductDetail from './ProductDetail';
import ProductsMock from '../../../products/ProductsMock';

const ProductDetailContainer = () => {

    const { id } = useParams();

    const [productInfo, setProductInfo] = useState();

    const getProductInfo = new Promise((resolve) => {
        setTimeout(() => {
            resolve(ProductsMock.filter((item) => item.id === id))
        }, 1000)
    })

    useEffect(() => {
        getProductInfo.then((response) => {
            //console.log(response)
            setProductInfo(response)
        })
    })

    return (
        <div className='category-page'>
            {productInfo && <ProductDetail item={productInfo} />}
        </div>
    )
}


export default ProductDetailContainer
