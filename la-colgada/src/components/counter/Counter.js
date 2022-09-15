
import React, { useState } from "react"
import { AddToCart } from "../buttons/Buttons"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Counter = () => {
    const [items, setitems] = useState(0)

    const AddItem = () => setitems(items + 1)
    const RemoveItem = () => items > 0 ? setitems(items - 1) : alert("Acción inválida.")

    return (
        <>
            <div className="btn-add-items-to-cart-container">

                <button href="#top" className="btn btn-primary btn-add-substract" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={RemoveItem}><FontAwesomeIcon icon={faMinus}/></button>

                <h2 className="itemQty">{items}</h2>

                <button href="#top" className="btn btn-primary btn-add-substract" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={AddItem}><FontAwesomeIcon icon={faPlus}/></button>
            </div>
            <div className="btn-add-to-cart">
                <AddToCart />
            </div>
        </>
    )
}

export default Counter