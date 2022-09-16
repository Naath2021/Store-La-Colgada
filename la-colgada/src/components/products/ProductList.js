
import React from "react";
import ProductsCard from "./product-card/ProductCard";
import { Link } from "react-router-dom";

const ProductList = ({ list }) => {
    return (
        <div className="product-container">
            {
                list.map((product) => (
                    <Link key={product.id} to={"item/" + product.id} element={"hello world"} style={{ textDecoration: "none", listStyleType: "none", listStyle: "none", color: "rgb(34, 34, 34)" }}>
                        <ProductsCard
                            image={product.image1}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default ProductList