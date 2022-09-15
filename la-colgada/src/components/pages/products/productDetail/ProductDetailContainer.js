
import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductDetail from './ProductDetail';
import ProductsMock from '../../../products/ProductsMock';



const ProductDetailContainer = () => {

    const { index } = useParams();

    const [productInfo, setProductInfo] = useState([]);

    
    const getProductInfo = new Promise((resolve) => {
        setTimeout(() => {
            resolve(ProductsMock)
        }, 2000)
    })
    
    useEffect(() => {
        getProductInfo.then((response) => {
            setProductInfo(response)
        })
    })

    console.log("que se sho  " + index)
    return (
        <div>
            <ProductDetail item={productInfo} />
        </div>
    )
}

export default ProductDetailContainer
