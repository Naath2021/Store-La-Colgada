import { useContext, useState, props } from 'react'
import { CartContext } from '../../../context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import db from '../../..'
import moment from "moment"
import CartBody from '../CartBody'


const OrderCheckout = ({ task }) => {
    const baseUrl = "/img/"

    const { cart, deleteProduct, clearCart, getTotalCartPrice } = useContext(CartContext);

    const order = {
        buyer: {
            fullName: "",
            email: "",
            phoneNumber: 0
        },
        deliveryAddress: {
            street: "",
            buildingNumber: 0,
            floorAndApartment: "",
            neighborhood: "",
            postalCode: 0,
            city: ""
        },
        buyerDocument: 0,
        items: cart,
        total: cart.reduce((acc, total) => acc + (total.product.price * total.qty), 0),
        date: moment().format()
    }

    const [orderInfo, setOrderInfo] = useState(order);
    console.log(orderInfo)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(orderInfo)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setOrderInfo({ ...orderInfo, [name]: value })
        console.log(orderInfo)
    }


    const createOrder = () => {
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                alert("muchas gracias por tu compra");
                console.log(id)
            }).catch((err) => {
                alert("compra no finalizada, intenta de nuevo");
                console.log(err)
            })
    }

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
                        <button className="ui button" type="submit">finalizar la compra</button>
                    </form>
                </div>
                <div className="cart-resume-container">
                </div>
            </div>
            <div className="order-items-container">
                <img src="" alt="" />
                <h4>nombre de producto</h4>
                <h5>precio total de los agregados</h5>
                <h6>cantidad de agregados</h6>
            </div>
        </>
    )
}

export default OrderCheckout