import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from "../cart/CartWidget"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartContent from './cart-content/CartContent';

function Cart() {

  const { cart, addToCart, deleteProduct, clearCart } = useContext(CartContext);
  console.log("carritooo   " + cart)




  // States propios del offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // States propios del offcanvas


  return (
    <>
      <Button onClick={handleShow} className="cart-icon">
        <CartWidget />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="true" scroll="true" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='texts'>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          acá irán los items del carrito


          <CartContent cart={cart}/>


          {/* <div className='cart-body-container'>
            <img src={product.img} alt={product.name} className="cart-item-img"/>
            <div className='cart-item-info-container'>
              <h2 className='cart-item-name'>{product.name}</h2>
              <h6 className='cart-item-price'>{totalPrice}</h6>
              <Button onClick={deleteProduct()}>eliminar</Button>
            </div>
          </div>
          <Button onClick={clearCart()}>limpiar carrito</Button> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart