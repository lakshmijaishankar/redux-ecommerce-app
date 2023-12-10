import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../../redux/actions/productActions'
import { CgSpinner } from 'react-icons/cg'
import Product from '../product/Product';

const ProductListing = ({ filterType }) => {
    const [loading, setLoading] = useState(true)
    const [networkError, setNetworkError] = useState(undefined)
    const dispatch = useDispatch()
    // console.log(f)
    useEffect(() => {
        let fetchTheProducts = async () => {
            try {
                let response = await axios.get(`https://fakestoreapi.com/products/${filterType}`)
                if (response.status === 200) {
                    dispatch(setProducts(response.data))
                    setLoading(!loading)
                }
            } catch (error) {
                const { code } = error
                setNetworkError(code)
                setLoading(false)
            }

            // console.log(response)
        }
        fetchTheProducts()
    }, [filterType])


    return (
        <div className='product_lissting' >
            {/* <section className='h-[50px] flex  items-center justify-center'>
                <span className='block  w-[8px] bg-slate-300 animate-music-waves-1' />
                <span className='block  w-[8px] bg-slate-300 animate-music-waves-2 h-[4px]' />
            </section> */
                // console.log(loading)
            }
            {networkError && <h1>{networkError}</h1>}
            {/* {
                loading ?
                    < CgSpinner
                        className='animate-spin text-blue-500 text-[4rem] fixed top-[45%] left-[45%]' />
                    : <Product />
            } */}
            <Product />
        </div>
    )
}

export default ProductListing