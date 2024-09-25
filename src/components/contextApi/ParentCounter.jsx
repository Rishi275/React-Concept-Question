import React from 'react'
import CounterUsingContextApi from './counterUsing Context'
import { CounterProvider } from './contextapi'
export default function ParentCounter() {
    return (
        <div>
            <CounterProvider>
                <CounterUsingContextApi />
            </CounterProvider>
        </div>
    )
}
