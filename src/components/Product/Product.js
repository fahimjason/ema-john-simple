import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.productInfo
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/" + key}>{name}</Link> </h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock -Order soon</small></p>
                {
                    props.showCartButton && <button onClick={() => props.handleAddProduct(props.productInfo)} className="cart-button"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                }
            </div>
        </div >
    );
};

export default Product;