import React, { useEffect, useState } from 'react'

export default function ProgressBar() {
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prevPercent) => {
                if (prevPercent >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevPercent + 1;
            });
        }, 10)
        return () => {
            clearInterval(interval)
        }
    }, [])


    return (

        percent < 100 ? <div className='w-full flex items-center flex-col gap-5 mt-3'>
            <h1 className='text-center text-white '>Progressbar</h1>

            <div className='progreesbar flex relative items-center justify-start w-[70%] bg-slate-200 rounded-[30px] h-[15px] overflow-hidden'>
                <span className={`absolute w-full translate-x-[50%] ${percent < 50 ? `text-black` : `text-white`}`} >{percent}%</span>
                <span className={`h-[15px] bg-blue-600 `} style={{ width: `${percent}%` }}></span>
            </div>

        </div> : <div className='w-full flex items-center flex-col mt-16 text-teal-50 text-6xl'>hiii guys❤️</div>
    )
}
