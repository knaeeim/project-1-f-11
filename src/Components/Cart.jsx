import React, { useEffect, useState } from 'react';
import CartProduct from './CartProduct';

const Cart = ({ carts }) => {

    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        const tPrice = carts.reduce((acc, curr) => {
            return acc += curr.price * curr.cart_quantity;
        }, 0)
        setTotalPrice(tPrice);
    }, [carts])
    

    return (
        <div className='my-20 text-center'>
            <h1 className='font-bold text-green-600 text-4xl my-5'>Cart Products : {carts.length}</h1>
            <hr />
            <div>
                {
                    carts.map((cart) => <CartProduct key={cart.id} cart={cart}></CartProduct>)
                }
                <hr />
                <div className='flex justify-between mt-5'>
                    <p className='text-5xl text-green-600 font-bold'>Total :</p>
                    <p className='text-5xl text-green-600 font-bold'>{totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;