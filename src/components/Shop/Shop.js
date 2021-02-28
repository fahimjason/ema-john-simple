import React, { useState } from 'react';
import fakeData from '../../fakeData';
import OrderCart from '../OrderCart/OrderCart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const selectedProducts = fakeData.slice(0, 10);
    const [products, setProducts] = useState(selectedProducts);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        setCart([...cart, product]);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        handleAddProduct={handleAddProduct}
                        productInfo={product}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <OrderCart cart={cart}></OrderCart>
            </div>
        </div>
    );
};

export default Shop;