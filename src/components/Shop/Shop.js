import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import OrderCart from '../OrderCart/OrderCart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {
    const selectedProducts = fakeData.slice(0, 10);
    const [products, setProducts] = useState(selectedProducts);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const previousKey = Object.keys(savedCart);
        const previousCart = previousKey.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, [])

    const handleAddProduct = (product) => {
        const toBeAdded = product.key
        const sameProduct = cart.find(pd => pd.key === toBeAdded);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const other = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...other, sameProduct]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.key}
                        showCartButton={true}
                        handleAddProduct={handleAddProduct}
                        productInfo={product}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <OrderCart cart={cart}>
                    <button className="cart-button"> <Link to="/review">Review Order</Link> </button>
                </OrderCart>
            </div>
        </div>
    );
};

export default Shop;