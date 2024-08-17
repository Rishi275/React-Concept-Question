

import React from 'react'
import TopNav from './templates/TopNav'
import { Link } from 'react-router-dom'
const Explore = () => {
  document.title = "Purpose Of Life"
  return (
    <>
      <div className="mainbafr w-[80%] h-full bg-[#161B22] ">
        <TopNav />
        <div className="services w-[100%] h-[60vh]  bg-gray-600 flex items-center justify-start flex-col ">
          <h4 className='text-white font-bold text-3xl text-center mt-[10vh]' >Other Services</h4>
           <div className="wrap-service flex items-start justify-start gap-3 ml-2 mt-[20px] ">
           
            <Link to="/CardCreate"  className="text-blue-700 bg-black p-2">Card Create</Link>
            <Link to="/PopulateCard"  className="text-blue-700 bg-black p-2">News Populate</Link>
            <Link to="/PasswordGenerator"  className="text-blue-700 bg-black p-2">Password Generator</Link>
            <Link to="/"  className="text-blue-700 bg-black p-2">Card Create</Link>
            <Link to="/"  className="text-blue-700 bg-black p-2">Card Create</Link>
            <Link to="/"  className="text-blue-700 bg-black p-2">Card Create</Link>
            <Link to="/"  className="text-blue-700 bg-black p-2">Card Create</Link>
            <Link to="/"  className="text-blue-700 bg-black p-2">Card Create</Link>
            <Link to="/"  className="text-blue-700 bg-black p-2">Card Create</Link>
           </div>
        </div>
      </div>
    </>
  )
}

export default Explore
