import OrderCheckout from "./OrderCheckout"

const OrderCheckoutContainer = () => {
    //escribir en el padre:
    const addTask = () => console.log("new task")

    return (
        <div>
            <OrderCheckout addTask={addTask}/>
        </div>
    )
}

export default OrderCheckoutContainer