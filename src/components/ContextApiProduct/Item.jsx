import React from 'react'
import { useContext } from 'react'
import { cartContext } from './cardContex'
import { NavLink } from 'react-router-dom'
export default function Item(props) {

    const cartcontext = useContext(cartContext)
    console.log(cartcontext)
    return (
        < >
            <div className='item h-[300px] w-[240px] bg-blue-600 p-2'>
                <h1 className='text-white'>{props.author === null ? "Rishi" : `${props.author}`}</h1>

                <NavLink to={`/SingleProductPage/${props.id}`}><img src={props.image === null ? "https://tse2.mm.bing.net/th?id=OIP.-mlwDVsSwfABKmZBtIBbtQHaFY&pid=Api&P=0&h=180" : `${props.image}`} alt="" /></NavLink>

                <h2 className='text-white'>{props.price}</h2>

                <button
                    onClick={() => { cartcontext.setItem([...cartcontext.item, { author: props.author, price: props.price }]) }} className='bg-red-600 py-1 px-3 hover:bg-white'>Add</button>
            </div>
        </>
    )
}
{/* <div key={i} className='item h-[300px] w-[240px] bg-blue-600 p-2'>
<h1 className='text-white'>{item.author===null?"Rishi":`${item.author}`}</h1>

<img src={item.urlToImage === null ? "https://tse2.mm.bing.net/th?id=OIP.-mlwDVsSwfABKmZBtIBbtQHaFY&pid=Api&P=0&h=180" : `${item.urlToImage}`} alt="" />

<h2 className='text-white'>{item.price}</h2>

<button className='bg-red-600 py-1 px-3 hover:bg-white'>Add</button>
</div> */}