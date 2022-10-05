import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Popup } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const OrderCheckout = ({ handleInputChange, createOrder, handleSubmit }) => {
    const baseUrl = "/img/"

    const { cart, deleteProduct, getTotalCartPrice } = useContext(CartContext);
    console.log(cart)
    return (
        <>
            <div className="total-order-container">
                <div className='form-container'>
                    <form className="ui form" onSubmit={handleSubmit}>
                        <div className='input-container'>
                            <label className='form-label' name="buyer">tus datos</label>
                            <input onChange={handleInputChange} name='fullName' type="text" placeholder='nombre y apellido' />
                            <input onChange={handleInputChange} name='email' type="email" placeholder='correo electrónico' />
                            <input onChange={handleInputChange} name='phoneNumber' type="tel" placeholder='número telefónico (sin +)' />
                        </div>
                        <div className='input-container'>
                            <label className='form-label'>dirección de entrega</label>
                            <input onChange={handleInputChange} name='street' type="text" placeholder='calle o avenida' />
                            <input onChange={handleInputChange} name='buildingNumber' type="number" placeholder='altura' />
                            <input onChange={handleInputChange} name='floorAndApartment' type="text" placeholder='timbre' />
                            <input onChange={handleInputChange} name='neighborhood' type="text" placeholder='barrio' />
                            <input onChange={handleInputChange} name='postalCode' type="number" placeholder='código postal' />
                            <input onChange={handleInputChange} name='city' type="text" placeholder='ciudad' />
                        </div>
                        <div className='input-container'>
                            <label className='form-label'>datos de facturación</label>
                            <input onChange={handleInputChange} name='buyerDocument' type="number" placeholder='DNI del comprador' />
                        </div>
                        <button onClick={createOrder} className="ui button" type="submit">finalizar la compra</button>
                    </form>
                </div>
                <div className="cart-resume-container">
                </div>
            </div>
            {cart.map((item) => {
                return <div key={item.product.id} className="order-items-container">
                    <div className="checkout-cart-img-container">
                        <img src={baseUrl + item.product.image1} alt={item.product.name} className="checkout-item-img b-radius-5" />
                    </div>
                    <div className='checkout-cart-item-info-container'>
                        <button onClick={() => deleteProduct(item)} className="delete-product-btn"><Popup content='Eliminar producto' trigger={<FontAwesomeIcon icon={faXmark} />} /></button>
                        <h2 className='texts checkout-cart-item-name'>{item.product.name}</h2>
                        <h6 className="texts checkout-cart-item-price">{item.qty} x ${item.productTotalPrice}</h6>
                    </div>
                    <div className="total-purchase">
                        <h2>total: ${getTotalCartPrice()}</h2>
                    </div>
                </div>
            })
            }
        </>
    )
}

export default OrderCheckout