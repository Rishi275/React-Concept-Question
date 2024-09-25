import React from 'react'
import Product from './Product'
import { CartProvider } from './cardContex'


export default function ParentProduct() {
    return (
        <CartProvider>
            < Product />
        </CartProvider>
    )
}
