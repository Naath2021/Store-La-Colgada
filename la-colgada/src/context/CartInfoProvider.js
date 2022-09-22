import { useState } from "react";
import { CartContext } from "./CartContext";


const CartInfoProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, qty, productTotalPrice) => {
        //console.log(product)

        if (alreadyInCart(product.id)) {
            alert("ya lo agregaste.")
        } else {
            setCart([...cart, { product, qty, productTotalPrice }])

            console.log("cart: ", [...cart, { product, qty, productTotalPrice }])
        }
    }

    const clearCart = () => setCart([]);

    const deleteProduct = (product) => {
        //console.log(cart)
        return cart.filter(() => product !== product.id)
    }

    const alreadyInCart = function (id) {
        //console.log("eo" + id)
        return cart.some((cartItem) => {
            console.log("eEEEeeeo  " + cartItem.product.id)
            return id === cartItem.product.id
        })
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, deleteProduct, clearCart }}>
            {children}
        </CartContext.Provider >
    )
}



export default CartInfoProvider