import React from 'react'
import Sidebar from './templates/Sidebar'
import TopNav from './templates/TopNav'

const Home = () => {
  document.title = "Krishna Consciousness - Home"
  return (
    <>
 
      <div className="mainbafr w-[80%] h-full bg-[#161B22] ">
        <TopNav />
       
      </div>
    </>
  )
}

export default Home
