import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
export default function Sidebar() {
    const [open, SetOpen] = useState(false)

    let openSidebar = () => {
        SetOpen(!open)
    }
    return (
        <>
            <div className={`sidebar transition-all  border-r-2 relative border-zinc-50 ${open ? "w-[310px]" : "w-[50px]"} h-full p-3 flex flex-col`}>
                <span onClick={openSidebar} className='openClose absolute z-[99999] text-[25px] right-[-16px] top-[50px] transition-linear rounded-[50%]  flex items-center justify-center cursor-pointer'>{open?"👈":"👉"}</span>
                <Link
                    to={"/"}
                    className="links "><div className=" logo heading whitespace-nowrap relative w-full h-auto flex items-center cursor-pointer">
                        <img src="./public/krishna.svg" className='w-[30px]'></img>
                        <span className='text-white text-[15px] font-semibold'>{open ? "Why Krishna Consciousness" : ""}</span>

                    </div></Link>

                <div className="nav flex flex-col mt-4">
                    <h1 className='text-white text-[20px] ml-[5px] font-bold'>{open ? "Latest Update" : ""}</h1>
                    <Link
                        to={"/AboutKrishna"}
                        className="links"><i class="ri-fire-line"></i> {open ? "About Krishna" : ""}</Link>
                    <Link to={"/purpose"} className="links"><i class="ri-fire-line"></i>{open ? "Purpose Of Life" : ""}</Link>
                    <Link to={"/Who"} className="links"><i class="ri-fire-line"></i>{open ? "Who Am I" : ""}</Link>
                    <Link to={"/Manual"} className="links"><i class="ri-fire-line"></i>{open ? "Manuals To Associate" : ""}</Link>
                    <Link to={"/Explore"} className="links"><i class="ri-fire-line"></i>{open ? "Explore" : ""}</Link>
                </div>
                <hr className='border-none h-[1px] bg-gray-400 mt-2' />
                <div className="nav flex flex-col mt-4">
                    <h1 className='text-white text-[20px] ml-[15px] font-bold'>{open ? "Website Info!" : ""}</h1>
                    <Link className="links"><i class="ri-information-fill"></i>{open ? "About Developer" : ""}</Link>
                    <Link className="links"><i class="ri-contacts-fill"></i>{open ? "Contact Us" : ""}</Link>
                </div>
            </div>
        </>
    )
}

