
import { useContext } from "react"
import { CartContext } from '../../../../context/CartContext';
import { Popup } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
    const { cart, deleteProduct, baseUrl } = useContext(CartContext)
    return (
        <>
            {
                cart.map((item) => {
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
        </>
    )
}

export default CartItems