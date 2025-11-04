import React from 'react';
import { GiCrossedSabres } from 'react-icons/gi';

const CartProduct = ({ cart, handleRemoveFromCart }) => {
    const { name, image, price, cart_quantity } = cart;
    return (
        <div className='flex gap-5 justify-between my-8'>
            {/* text */}
            <div className='text-left space-y-2'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <div>
                    BDT/$ : {price},
                    Quantity : {cart_quantity}
                </div>
            </div>

            {/* image */}
            <div className='flex gap-4'>
                <div className='w-16 h-16 rounded-xl'>
                    <img className='h-full rounded-xl' src={image} alt="" />
                </div>
                <div>
                    <button onClick={()=> handleRemoveFromCart(cart)}> <GiCrossedSabres size={25} /> </button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;