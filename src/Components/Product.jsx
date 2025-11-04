import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { IoBagAddSharp } from 'react-icons/io5';

const Product = ({ product, handleUpdateCart }) => {
    const { name, image, price, category, rating, description } = product;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        className='w-96 h-52 object-cover overflow-hidden'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{price}</div>
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}</div>
                    </div>
                    <div className='flex gap-5 mt-5'>
                        <button onClick={() => handleUpdateCart(product)} className='btn btn-outline btn-secondary w-[50%]'> <FaCartPlus className='text-green-800'/> Add to Cart</button>
                        <button className='btn btn-outline btn-primary w-[50%]'> <IoBagAddSharp /> Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;