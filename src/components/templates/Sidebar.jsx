import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
export default function Sidebar() {
    const TransferToHome = (e) => {
        window.location.href = "rishiai.world";
    };
    return (




        <>
            <div className="sidebar border-r-2 border-zinc-50 w-[20%] h-full p-3 flex flex-col">
                <Link
                    to={"/"}
                    className="links"><div className="heading w-full h-auto flex cursor-pointer">
                        <img src="./public/krishna.svg" className='w-[30px]'></img>
                        <span className='text-white text-[15px] font-semibold'>Why Krishna Consciousness</span>
                    </div></Link>

                <div className="nav flex flex-col mt-4">
                    <h1 className='text-white text-[20px] ml-[15px] font-bold'>Latest Update</h1>
                    <Link
                        to={"/AboutKrishna"}
                        className="links"><i class="ri-fire-line"></i> About Krishna</Link>
                    <Link to={"/purpose"} className="links"><i class="ri-fire-line"></i> Purpose Of Life</Link>
                    <Link to={"/Who"} className="links"><i class="ri-fire-line"></i> Who Am I</Link>
                    <Link to={"/Manual"} className="links"><i class="ri-fire-line"></i> Manuals To Associate</Link>
                    <Link to={"/Explore"} className="links"><i class="ri-fire-line"></i> Explore</Link>
                </div>
                <hr className='border-none h-[1px] bg-gray-400 mt-2' />
                <div className="nav flex flex-col mt-4">
                    <h1 className='text-white text-[20px] ml-[15px] font-bold'>Website Info!</h1>
                    <Link className="links"><i class="ri-information-fill"></i> About Developer</Link>
                    <Link className="links"><i class="ri-contacts-fill"></i> Contact Us</Link>
                </div>
            </div>
        </>
    )
}

