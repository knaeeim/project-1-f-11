import React from 'react';
import CartProduct from './CartProduct';

const Cart = ({ carts }) => {
    return (
        <div className='my-20 text-center'>
            <h1 className='font-bold text-green-600 text-4xl my-5'>Cart Products : 0</h1>
            <hr />
            <div>
                {
                    carts.map((cart) => <CartProduct cart={cart}></CartProduct>)
                }
            </div>
        </div>
    );
};

export default Cart;