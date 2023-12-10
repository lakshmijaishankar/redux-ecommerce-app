import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import rupee_svg from '../../imgutilies/rupee-svg.png';
import cart_svg from '../../imgutilies/cart-2-svgr.png'
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'
import { cartQuantityAndAddToCart } from '../../redux/actions/cartAction';

const Product = () => {
    const { products } = useSelector(state => state.allProducts)
    const dispatch = useDispatch()
    // console.log(products)
    const handleQuantity = id => {
        const item = products.find(prd => prd.id === id);
        dispatch(cartQuantityAndAddToCart(item))
    }
    return (
        <div className='product_container grid grid-cols-[repeat(auto-fill,minmax(auto,200px))] justify-center gap-y-4 pt-4 gap-x-2'>
            {/* {console.log("product compo")} */}
            {
                products &&
                products.map(({ category, id, title, image, price, rating }) => {
                    return (
                        <div className='product_card cursor-pointer px-1 py-2 hover:shadow-lg transition-[all] duration-100 border border-[#f0f5ff] bg-white hover:scale-105' key={id}>
                            <div className='flex flex-col gap-y-1'>
                                <header className='capitalize text-center text-[1.1rem]'>
                                    <h1>{category}</h1>
                                </header>
                                <Link to={`productdetails/${id}`} >
                                    <figure className='product_img h-[180px]' >
                                        <img src={image} alt={title} className='aspect-square h-[100%] object-contain' />
                                    </figure>
                                </Link>
                                <article className='product_title font-light text-[0.77rem]'>
                                    <p className='line-clamp-1' title={title}>{title}</p>
                                </article>
                                <div className='product_rating flex text-white text-[0.8rem]'>
                                    <div className='bg-green-600 flex items-center py-[0.1rem] px-2 rounded space-x-1'>
                                        <span>{rating.rate}</span>
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className='product_price flex items-center' >
                                    <figure className='max-w-[20px]'>
                                        <img src={rupee_svg} alt='rupee' />
                                    </figure>
                                    <h4 className='mb-1'>:<b>{price}</b></h4>
                                </div>
                                <footer className='add_product_cart '>
                                    <button
                                        className='bg-[#f0f5ff] flex items-center py-2 px-3 rounded m-auto space-x-2 text-[0.9rem]'
                                        onClick={() => handleQuantity(id)}
                                    >
                                        <img src={cart_svg} className='max-w-[20px]' />
                                        <span className='capitalize'>add cart</span>
                                    </button>
                                </footer>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product