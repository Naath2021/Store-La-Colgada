import { useState } from "react";
import { CartContext } from "./CartContext";


const CartInfoProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, qty, productTotalPrice) => {
        if (alreadyInCart(product.id)) {
            alert("ya lo agregaste.")
        } else {
            setCart([...cart, { product, qty, productTotalPrice }])
            console.log("cart: ", [...cart, { product, qty, productTotalPrice }])
        }
    }

    const clearCart = () => setCart([]);

    const deleteProduct = () => {
        return cart.filter((item) => {
            return item !== item.product.id
        })
    }

    const alreadyInCart = function (id) {
        return cart.some((cartItem) => {
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