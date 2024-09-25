import { createContext, useState } from 'react'

export const cartContext = createContext(null);


// we need to create a provider for the context


export const CartProvider = (props) => {
    const [item, setItem] = useState([])
    return (
        <>
            <cartContext.Provider value={{ item, setItem }}>
                {props.children}
            </cartContext.Provider>
        </>
    )
}

// import { createContext, useState } from 'react'

// export const cartContext = createContext(null);
// export const ProductContext = createContext(null);



// we need to create a provider for the context

// export const CartProvider = (props) => {
//     const [item, setItem] = useState([])
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     const addToCart = (product) => {
//         setItem((prevItems) => [...prevItems, product]);
//     };
//     return (
//         <>
//             <cartContext.Provider value={{ item, setItem ,addToCart}}>
//                 <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
//                     {props.children}
//                 </ProductContext.Provider>
//             </cartContext.Provider>


//         </>
//     )
// }
