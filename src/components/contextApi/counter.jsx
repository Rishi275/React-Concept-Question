import React from 'react'
import { useContext } from 'react'
import { CounterContext } from './contextapi'
export default function Counter() {

    const counterContext = useContext(CounterContext)
    return (
        <div className='flex gap-4'>
            <button
                onClick={() => { counterContext.setCount(counterContext.count + 1) }}
                className='text-white bg-blue-600 p-3 flex flex-row'>Increment</button>

            <button onClick={() => { counterContext.setCount(counterContext.count - 1) }} className='text-white bg-blue-600 p-3 flex flex-row'>Decrement</button>
        </div>
    )
}
