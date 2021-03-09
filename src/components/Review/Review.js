import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import OrderCart from '../OrderCart/OrderCart';
import ReviewItems from '../ReviewItems/ReviewItems';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlace] = useState(false);

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    const placeOrder = () => {
        setCart([]);
        setOrderPlace(true);
        processOrder();
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartProduct = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProduct);
    }, [])

    let chillImage;
    if (orderPlaced) {
        chillImage = <img src={happyImage} alt="" />
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItems
                        key={pd.key}
                        removeProduct={removeProduct}
                        product={pd}></ReviewItems>)
                }
                {orderPlaced && chillImage}
            </div>
            <div className="cart-container">
                <OrderCart cart={cart}>
                    <button onClick={placeOrder} className="cart-button">Place Order</button>
                </OrderCart>
            </div>
        </div>
    );
};

export default Review;