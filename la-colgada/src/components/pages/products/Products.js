
import React from 'react'
import ProductContainer from "../../products/ProductContainer"

const Products = () => {
    return (
        <>
            <div className="page-container">
                <div className='product-page-welcoming'>
                </div>
                <div>{<ProductContainer />}</div>
            </div>
        </>

    )
}

export default Products