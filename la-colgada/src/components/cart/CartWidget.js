
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";


const CartWidget = (props) => {
    return (
        <div>
            <a href="#top" className='icons' onClick={props.emptyCart} ><FontAwesomeIcon icon={faBagShopping} /></a>
        </div>
    )
}


const emptyCartAlert = () => {
    alert("Tu carrito está vacío.")
}



export {emptyCartAlert, CartWidget};