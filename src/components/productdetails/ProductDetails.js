import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../../redux/actions/productActions';
import { AiFillStar } from 'react-icons/ai';
import cart_svg from '../../imgutilies/cart-2-svgr.png'

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(undefined);
    const dispatch = useDispatch()

    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            if (response.status === 200)
                setProduct(response.data)
            dispatch(selectedProduct(response.data))
        }
        getProductById()
    }, [])

    return (
        product && <div className='productdetails_container grid grid-cols-[25%_60%] justify-center mt-16'>
            <div className='prd_det_img flex justify-center'>
                <figure className='max-w-[270px] max-h-[270px] h-[100%]  w-[100%] p-1'>
                    <img src={product.image} className='h-[100%] w-[100%] object-contain' />
                </figure>
            </div>
            <div className='prd_details px-2 flex'>
                <div className='prd_details_conainer flex flex-col gap-y-[0.1rem]'>
                    <header>
                        <h1 className='text-[1.6rem] font-light '>{product.title}</h1>
                    </header>
                    <div className='prd_details_rating flex text-white text-[0.8rem]'>
                        <div className='bg-green-600 flex items-center py-[0.1rem] px-2 rounded space-x-1'>
                            <span>{product.rating.rate}</span>
                            <AiFillStar />
                        </div>
                    </div>
                    <div className='prd_details_amount text-[1.8rem]'>
                        <span>₹{product.price}</span>
                    </div>
                    <div className='prd_details_category capitalize text-[1.2rem] flex'>
                        <span className='bg-[#f0f5ff] py-1 px-3' style={{ transform: 'skewX(-10deg)' }}>{product.category}</span>
                    </div>
                    <div className='prd_detaild_description'>
                        <span>Details :</span>
                        <p className='font-light'>{product.description}</p>
                    </div>
                    <footer className='add_product_cart prd_details_cart'>
                        <button className='bg-blue-400 flex items-center py-2 px-3 rounded  space-x-2 text-[0.9rem]'>
                            <img src={cart_svg} className='max-w-[20px]' />
                            <span className='capitalize'>add cart</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails