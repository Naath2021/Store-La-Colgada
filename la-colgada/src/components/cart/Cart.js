import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import { Popup } from 'semantic-ui-react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartWidget from './CartWidget';
// import { Link } from 'react-router-dom';
// import { btnOrderCheckout } from '../buttons/Buttons';
import CartBody from './CartBody';
import OrderCheckout from './orderCheckout/OrderCheckout';



const baseUrl = "/img/"

function Cart() {

  const { cart, deleteProduct, clearCart, getTotalCartPrice } = useContext(CartContext);

  // States propios del offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="cart-icon">
        <CartWidget />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>¡tu carrito!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {/* {cart.length === 0
            ? <>
              <h6 className='texts empty-cart'>estoy vacío, ¡lléname de productos!</h6>
              <Link to="products" className='link-router'>ver productos</Link>
            </>
            : cart.map((item) => {
              return <div key={item.product.id} className="cart-body-container">
                <div className='item-container'>
                  <div className="cart-img-container">
                    <img src={baseUrl + item.product.image1} alt={item.product.name} className="item-img b-radius-5" />
                  </div>
                  <div className='cart-item-info-container'>
                    <button onClick={() => deleteProduct(item)} className="delete-product-btn"><Popup content='Eliminar producto' trigger={<FontAwesomeIcon icon={faXmark} />} /></button>
                    <h2 className='texts cart-item-name'>{item.product.name}</h2>
                    <h6 className="texts cart-item-price">{item.qty} x ${item.productTotalPrice}</h6>
                  </div>
                </div>
              </div>
            })
          }
          <h5 className='texts cart-total-price'> total: ${getTotalCartPrice()}</h5>
          <h6 onClick={() => clearCart()} className="clear-cart">vaciar carrito</h6>
          {btnOrderCheckout} */}


          <CartBody cart={cart} baseUrl={baseUrl} getTotalCartPrice={getTotalCartPrice} deleteProduct={deleteProduct} clearCart={clearCart} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart