import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(item => productKey === item.key);

    return (
        <div>
            <h1>Product Details:</h1>
            <Product showCartButton={false} productInfo={product}></Product>
        </div>
    );
};

export default ProductDetails;