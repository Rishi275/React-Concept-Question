import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar';
import TopNav from './TopNav';


export default function PopulateCard(props) {


    const [card, setcard] = useState([]);


    const fetchdata = async () => {
        let a = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a787227847104588bbf3d69917d4398c&page1&pageSize=10");
        let data = await a.json()
        setcard(data.articles)

    }
    fetchdata()
    useEffect(() => {
       
    }, [])



    return (
        <>
         
            <div className='flex flex-col w-full'>
                <div className="card_container flex flex-wrap gap-7 overflow-y-auto w-[100%] mt-8 ml-5">
                    {card.map((item) => (
                        <div key={item.title} className="card h-500 w-[350px] bg-white p-4">
                            <img
                                src={item.urlToImage == null ? "https://rishiai.vercel.app/utility/images/newimg.jpg" : item.urlToImage} alt={item.title} className="w-[300px] h-72 object-contain" />
                            <h3 className="text-xl font-bold mt-2">{item.name}</h3>
                            <p className="text-sm mt-2">{item.description}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-4 block text-blue-500 hover:underline">Read More</a>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}
