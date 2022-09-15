
import React from 'react'
//import Counter from '../../counter/Counter'
//import { AddToCart } from '../../buttons/buttons'
// import Navbar from "../../../navbar/Navbar"


const ProductDetail = ({ item }) => {
  return (
    //   <div>
    //     <div className='detail-img'>
    //       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    //         <div className="carousel-inner">
    //           <div className="carousel-item active">
    //             <img src={product.image} className="d-block w-100" alt={product.name} />
    //           </div>
    //           <div className="carousel-item">
    //             <img src={product.image} className="d-block w-100" alt={product.name} />
    //           </div>
    //           <div className="carousel-item">
    //             <img src={product.image} className="d-block w-100" alt={product.name} />
    //           </div>
    //         </div>
    //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    //           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //           <span className="visually-hidden">Previous</span>
    //         </button>
    //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    //           <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //           <span className="visually-hidden">Next</span>
    //         </button>
    //       </div>
    //     </div>

    //     <div className='detail.info'>
    //       <h1>{product.name}</h1>
    //       <h2>${product.price}</h2>
    //       <h3>{product.description}</h3>
    //       <h3>Cantidad: <br /> <Counter /></h3>
    //       <AddToCart />
    //     </div>
    //   </div>
    // )

    <div>
      <h2>HOLA MUNDO{item.name}</h2>
    </div>
  )
}

export default ProductDetail