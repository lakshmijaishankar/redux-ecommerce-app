import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from '../productdetails/ProductDetails'
import Home from '../home/Home'


const Main = () => {
    const { isOpen } = useSelector(state => state.cartToOpen)

    console.log(isOpen)
    return (
        <main className={`main_conatiner`}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='productdetails/:id' element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default Main;
// ${isOpen ? 'w-[calc(100%-20%)]' : 'w-[100%]'}