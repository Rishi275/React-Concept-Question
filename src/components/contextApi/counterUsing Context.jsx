import React from 'react'
import Counter from './counter'
import { useContext } from 'react'
import { CounterContext } from './contextapi'
export default function CounterUsingContextApi() {

  const counterState = useContext(CounterContext)
  console.log(counterState);
  return (
    <div className='w-full flex flex-col gap-3 items-center justify-center '>
      <h1 className='text-white'>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
    </div>
  )
}
