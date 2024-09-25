import { createContext,useState } from 'react'

export const CounterContext = createContext(null);

// we need to create a provider for the context

export const CounterProvider = (props) => {
    const [count, setCount] = useState(0)
    return (
        <CounterContext.Provider value={{count,namee:"rishi",setCount}}>
            {props.children}
        </CounterContext.Provider>
    )
}