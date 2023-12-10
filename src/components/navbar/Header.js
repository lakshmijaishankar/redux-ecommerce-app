import React from 'react'
import NavBar from './NavBar'
import Cart from '../aside/Cart'
import { useDispatch, useSelector } from 'react-redux';
import { cartOpen } from '../../redux/actions/cartAction';

const Header = () => {
    const { isOpen } = useSelector(state => state.cartToOpen)
    const disPatch = useDispatch()


    const handleCartToOpen = () => {
        disPatch(cartOpen(!isOpen))
    }

    return (
        <header className={`bg-[#fff] shadow-sm duration-200 transition-[width] sticky top-0 px-7 py-[0.35rem] z-[100]`}>
            <NavBar isOpen={isOpen} handleCartToOpen={handleCartToOpen} />
            <Cart isOpen={isOpen} />
        </header>
    )
}

export default Header;
// ${isOpen ? 'w-[80%]' : 'w-[100%]'}