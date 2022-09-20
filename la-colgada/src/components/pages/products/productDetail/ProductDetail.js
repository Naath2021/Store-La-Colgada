import Carousel from 'react-bootstrap/Carousel'
import Counter from '../../../counter/Counter';
import { useState } from 'react';
import { AddToCart } from '../../../buttons/Buttons';

function ProductDetail({ item }) {


    const [count, setCount] = useState(0)

    return (
        <>
            <div className='item-container'>
                <div className='item-img' >
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block carr-img"
                                src={item[0].image1}
                                alt={item[0].name}
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block carr-img"
                                src={item[0].image2}
                                alt={item[0].name}
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block carr-img"
                                src={item[0].image3}
                                alt={item[0].name}
                            />

                        </Carousel.Item>
                    </Carousel>

                </div>

                <div className='item-info'>
                    <h1 className='item-title titles-web'>{item[0].name}</h1>
                    <h3 className="item-price texts">${item[0].price}</h3>
                    <h2 className='item-desc texts'>{item[0].description}</h2>
                    <h2 className='item-qty texts' >Cantidad: <br /> <Counter count={count} setCount={setCount} /></h2>
                    <AddToCart />
                </div>
            </div>
        </>
    );
}

export default ProductDetail;