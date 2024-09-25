import React, { useContext } from 'react';
import { cartContext } from './cardContex'; // Fixed typo in the import path
import { Trash } from 'lucide-react';

export default function Cart() {
    const cart = useContext(cartContext);

    const total = cart.item.reduce((acc, val) => acc + val.price, 0);

    const handleRemoveItem = (index) => {
        const updatedItems = cart.item.filter((_, i) => i !== index);
        cart.setItem(updatedItems);
    };

    return (
        <>
            <div className="cartItem">
                <h2 className='text-black text-xl font-bold'>Your Added Cart Items</h2>
                <ul className='flex gap-1 flex-col'>
                    {cart.item.map((item, index) => (
                        <li className='flex gap-5 bg-black text-white p-1' key={index}>
                            <div>{item.author} - ${item.price}</div>
                            <span 
                                onClick={() =>handleRemoveItem(index)} 
                                className='cursor-pointer'
                            >
                                <Trash />
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="total">
                    Total: ${total}.00
                </div>
            </div>
        </>
    );
}
