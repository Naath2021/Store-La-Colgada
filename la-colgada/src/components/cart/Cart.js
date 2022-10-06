import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartWidget from './CartWidget';
import CartBody from './CartBody';





function Cart() {

  const { cart, deleteProduct, clearCart, getTotalCartPrice, baseUrl } = useContext(CartContext);

  // States propios del offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="cart-icon" variant="link">
        <CartWidget />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>¡tu carrito!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartBody cart={cart} baseUrl={baseUrl} getTotalCartPrice={getTotalCartPrice} deleteProduct={deleteProduct} clearCart={clearCart} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart