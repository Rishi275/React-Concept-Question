
import React, { useEffect, useState } from 'react'
import Sidebar from './templates/Sidebar'
import TopNav from './templates/TopNav'


const Manual = () => {

   useEffect(()=>{
    
   })
    document.title = "Purpose Of Life"

    const [count, setCount] = useState(0);
    // let counter = 0;
    let increaseCount = () => {
     if(count>=20){
        setCount(20);
        return;
     }
        setCount(count + 1);
    }
    let decreaseCount = () => {

        if(count<=0){
            setCount(0);
            return;
         }
        setCount(count - 1);
    }
    return (
        
        <>
        
            <div className="mainbafr w-[80%] h-full bg-[#161B22] ">
                <TopNav />
                <h1 className='text-white m-10 font-serif text-[20px]'> Manual Of Our Life</h1>

                <h2 className='text-white font-bold text-[20px] ml-[20px]'>counter {count}</h2>
                <button onClick={increaseCount} className='p-4 bg-blue-800 text-white font-bold text-[20px] ml-[20px]'>Add</button>
                <br></br> <br></br> <br></br>

                <button onClick={decreaseCount} className='p-3 bg-blue-800 text-white font-bold text-[20px] ml-[20px]  '>Remove</button>
            </div>
        </>
    )
}

export default Manual
