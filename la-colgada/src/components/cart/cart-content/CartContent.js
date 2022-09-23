

const CartContent = ({ cart }) => {
    return (
        <div className='cart-body-container'>
            {cart.map((item) => {
                {/* <img src={item.product.image1} alt={item.product.name} /> */ }
                <div key={item.product.id}>
                    <h2>hola</h2>
                    {/* <h2 className='cart-item-name'>{item.product.name}</h2> */}
                    <h6 className='cart-item-price'>{item.productTotalPrice}</h6>
                    {/* <Button onClick={deleteProduct()}>eliminar</Button> */}
                </div>

            })}

        </div>
    )
}

export default CartContent