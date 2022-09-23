import Carousel from 'react-bootstrap/Carousel'
import Counter from '../../../counter/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'semantic-ui-react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';
import { Link } from 'react-router-dom';

function ProductDetail({ item }) {

    const [count, setCount] = useState(1);

    const { addToCart } = useContext(CartContext);

    function onAdd(product, totalPrice) {
        addToCart(product, count, totalPrice)
    }

    const calculatedPrice = item[0].price * count


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
                    <h6 className='item-design-disclaimer'>IMPORTANTE: todas las imágenes son ilustrativas, debido a que son piezas únicas y es probable que vengan en diferentes formas, sólo se mantienen los tamaños informados.</h6>
                    <h2 className='item-qty texts' >cantidad: <br /> <Counter count={count} setCount={setCount} /></h2>
                    <Link to="../products" className='link-router btn-to-products'>¡sigue comprando!</Link>

                    <Button className='add-to-cart' animated='vertical' onClick={() => onAdd(item[0], calculatedPrice)}>
                        <Button.Content hidden className='btn-content'>agregar al carrito</Button.Content>
                        <Button.Content visible>
                            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        </Button.Content>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ProductDetail