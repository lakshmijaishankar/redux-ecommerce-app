import React from 'react'
import './styles/index.css'
import { useSelector } from 'react-redux'
import Header from './components/navbar/Header'
import Main from './components/main/Main'

const App = () => {
    const state = useSelector(state => state.allProducts)
    // console.log(state)
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

export default App