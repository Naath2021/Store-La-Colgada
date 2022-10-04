

const imageBaseUrl = "/img/"

const ProductsCard = ({ image, name, price }) => {
    return (
        <div className="card-container" >
            <div className="card">
                <img src={imageBaseUrl + image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title titles-web">{name}</h5>
                    <h6 className="card-subtitle mb-2 texts card-price">${price}</h6>
                </div>
            </div>
        </div>
    )
}



export default ProductsCard