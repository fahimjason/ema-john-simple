import React from 'react';
import './ReviewItems.css';

const ReviewItems = (props) => {
    const { name, quantity, key, price } = props.product;
    return (
        <div className="main-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <br />
            <button className="cart-button"
                onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItems;