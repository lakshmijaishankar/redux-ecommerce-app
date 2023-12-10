import React, { useState } from 'react'
import search_svg from '../../imgutilies/search-svg.png'
import account_svg from '../../imgutilies/account-svg.png'
import cart_svg from '../../imgutilies/cart-2-svgr.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../searchbar/SearchBar'
import { searchPrd } from '../../redux/actions/searchAction'

const NavBar = props => {
    const { handleCartToOpen } = props
    const [search, setSearch] = useState(undefined)
    const { quantity } = useSelector(state => state.addOrRemoveCartItem)
    const { products } = useSelector(state => state.allProducts)
    const dispatch = useDispatch()

    const handleSearch = e => {
        const { value: search } = e.target
        const searchTemp = products.filter(value => value.title.toLowerCase().includes(search.toLowerCase()))
        dispatch(searchPrd(searchTemp))
        setSearch(search)
    }
    // console.log(quantity)
    return (
        <nav className='nav_bar grid grid-cols-[60%_40%] px-7 py-[0.3rem] items-center'>
            {/* {console.log("navbar comp")} */}
            <div className="nav_left flex items-center gap-x-10">
                <header className='flipkart_header flex flex-col'>
                    <figure className='flipkart_logo max-w-[120px]'>
                        <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg' alt='flipkart' />
                    </figure>
                    <div className="explore_plus font-[400] text-[0.85rem] flex items-center justify-end space-x-1">
                        <i className='text-[#9e9e9e] font-semibold '>Explore</i>
                        <i className='text-[#ffc200]'>Plus</i>
                        <span>
                            <figure>
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg" alt="plus" />
                            </figure>
                        </span>
                    </div>
                </header>
                <form className='header_product_search w-[70%] relative'>
                    <div className="bg-[#f0f5ff] rounded-md overflow-auto">
                        <input type="search"
                            className='bg-transparent focus:outline-0 h-10 w-[100%] placeholder:text-slate-500 placeholder:font-light pl-12 pr-4'
                            placeholder='Search for Products, Brands and More'
                            title='Search for Products, Brands and More'
                            autoComplete='of'
                            onChange={handleSearch}
                        />
                    </div>
                    <button className="search_svg absolute top-0 h-[100%] w-[45px] flex justify-center items-center">
                        <figure className='max-w-[23px]'>
                            <img src={search_svg} alt="search-svg" />
                        </figure>
                    </button>
                    {
                        search && <SearchBar />
                    }
                </form>
            </div>
            <div className="nav_right flex items-center justify-evenly">
                <div className="account flex items-center py-1 space-x-2 px-1">
                    <figure className="account_svg max-w-[33px]">
                        <img src={account_svg} alt="account" />
                    </figure>
                    <h3 className='text-[1.1rem]'>Account</h3>
                </div>
                <div className="cart_item flex items-center py-1 space-x-2 px-1 cursor-pointer">
                    <button onClick={handleCartToOpen}>
                        <figure className="cart_svg max-w-[25px] relative">
                            <img src={cart_svg} alt="" />
                            <span className='cart_quantity absolute -top-[1.1rem] right-2 text-[#0000ff]'>{quantity}</span>
                        </figure>
                    </button>
                    <h3 className='text-[1.1rem]'>Cart</h3>
                </div>
            </div>
        </nav>
    )
}

export default NavBar