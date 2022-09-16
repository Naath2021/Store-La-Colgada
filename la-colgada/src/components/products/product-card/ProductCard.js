import Counter from "../../counter/Counter";

const ProductsCard = ({ image, name, price }) => {
    return (
        <div className="card-container" >
            <div className="card">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">${price}</h6>
                    <Counter />
                </div>
            </div>
        </div>
    )
}



export default ProductsCard