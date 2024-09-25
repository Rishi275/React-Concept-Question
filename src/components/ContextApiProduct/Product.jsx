import React from 'react';
import Item from './Item';
import data from './data.json';
import Cart from './cart';


export default function Product() {
    return (
        <div className='w-full flex h-screen bg-red-300'>
            <div className="left w-[70%] flex gap-3 flex-wrap">
                {data.articles.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={i}  //id is comming from item.jsx as props
                            author={item.author}
                            image={item.urlToImage}
                            price={item.price}
                        />
                    );
                })}
            </div>
            <div className="right w-[30%] p-4 bg-white">
                <Cart />
            </div>
        </div>
    );
}
