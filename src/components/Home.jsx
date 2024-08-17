import React from 'react'
import TopNav from './templates/TopNav'
const Home = () => {
  document.title = "Krishna Consciousness - Home"
  return (
    <>
 
      <div className="mainbafr w-[80%] h-full bg-[#161B22] ">
        <TopNav />
       <h1 className='text-white'>jjjj{import.meta.env.REACT_CONCEPT}</h1>
      </div>
    </>
  )
}

export default Home
