import { Popup } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { btnOrderCheckout } from '../buttons/Buttons';

const CartBody = ({ cart, baseUrl, getTotalCartPrice, deleteProduct, clearCart }) => {
    return (
        <>
            {
                cart.length === 0
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
            < h5 className='texts cart-total-price' > total: ${getTotalCartPrice()}</h5 >
            <h6 onClick={() => clearCart()} className="clear-cart">vaciar carrito</h6>
            {btnOrderCheckout}

        </>
    )
}

export default CartBody