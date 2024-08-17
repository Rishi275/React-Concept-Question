import React from 'react'
import { Link } from 'react-router-dom'
import './temp.css'
import { useState } from "react";


const TopNav = ({margin}) => {
    const [query, setquery] = useState("")
    console.log(query)
    return (
        <>

            <div className={`topnav flex items-center justify-center h-[20vh] w-full relative gap-2 ${margin} `}>
                <i className="ri-search-line text-white text-[30px] "></i>
                <input
                    onChange={(e) => setquery(e.target.value)}
                    value={query}

                    type='text' placeholder='Search Anything' className='w-[50%] px-1 rounded py-2 outline-none border-[1px] border-gray-300 bg-transparent text-[20px] text-white pl-[30px]' >

                    </input>

                {query.length == 0 ? "" : <i onClick={() => setquery("")} className="ri-close-line cursor-pointer text-white text-[30px] absolute right-[15vw]"></i>}




                <div className="search-content ml-[40px] w-[50%]  m-h-[50vh] bg-zinc-500 absolute top-[14vh]  hidden flex-col items-center justify-start overflow-auto">
                    <Link className='inline-block mt-1 p-[10px] bg-zinc-800 text-white w-full hover:bg-white hover:text-black  justify-start items-center'>
                        <img src="" alt="" />
                        <h1 className='font-normal '>hii everyone</h1>
                    </Link> <Link className='inline-block mt-1 p-[10px] bg-zinc-800 text-white w-full hover:bg-white hover:text-black  justify-start items-center'>
                        <img src="" alt="" />
                        <h1 className='font-normal '>hii everyone</h1>
                    </Link>
                    <Link className='inline-block mt-1 p-[10px] bg-zinc-800 text-white w-full hover:bg-white hover:text-black  justify-start items-center'>
                        <img src="" alt="" />
                        <h1 className='font-normal '>hii everyone</h1>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default TopNav
