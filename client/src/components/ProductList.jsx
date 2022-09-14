import React from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>
                <p key={i}><Link to={`/products/${product._id}`}>{product.title}</Link>, {product.price}, {product.description}</p>
            )}

        </div>
    )
}
    
export default ProductList;