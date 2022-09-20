import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Counter = ({count, setCount}) => {

    const AddItem = () => setCount(count + 1)
    const RemoveItem = () => count > 0 ? setCount(count - 1) : count

    return (
        <>
            <div className="btn-add-items-to-cart-container">

                <button href="#top" className="btn btn-primary btn-add-substract" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={RemoveItem}><FontAwesomeIcon icon={faMinus} /></button>

                <h2 className="itemQty">{count}</h2>

                <button href="#top" className="btn btn-primary btn-add-substract" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={AddItem}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </>
    )
}

export default Counter