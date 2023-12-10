import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImBin } from 'react-icons/im'
import { BsFillCartXFill } from 'react-icons/bs'
import { cartOpen, cartQtyAndRemoveCartItem, decCartQun, incCartQun } from '../../redux/actions/cartAction'
import { AiOutlineArrowLeft, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Cart = props => {
    const { item } = useSelector(state => state.addOrRemoveCartItem)
    const { isOpen } = useSelector(state => state.cartToOpen)
    const dispatch = useDispatch()

    const deleteCartItem = index => {
        // console.log("before splice", item)
        item.splice(index, 1)
        // console.log(item)
        // console.log("after splice", item)
        dispatch(cartQtyAndRemoveCartItem(item))
    }

    const closeCartBox = () => {
        dispatch(cartOpen(!isOpen))
        console.log("first")
    }
    const incOrDecCartQuantity = (id, type) => {
        // console.log(e.target.ariaLabel)

        if (type === 'plus') {
            dispatch(incCartQun(id))
        } else {
            dispatch(decCartQun(id))
        }
    }
    const cartProduct = () => {
        return (
            item.map((cartPrd, index) => {
                return (
                    <div className='product_cart flex border-b-[1px] m-[3px] items-center justify-between p-[0.1rem]' key={cartPrd.id}>
                        {console.log("first")}
                        <div>
                            <figure
                                className='max-w-[45px] h-[80px] p-[0.2rem] '
                            >
                                <img
                                    src={cartPrd.image}
                                    className='w-[100%] h-[100%] object-contain'
                                />
                            </figure>
                        </div>
                        <div className='w-[60%] cart_prd_details flex flex-col'>
                            <p className='text-[0.7rem] line-clamp-2' title={cartPrd.title}>{cartPrd.title}</p>
                            <div className='cart_prd_price flex justify-between'>
                                <h4>₹{cartPrd.price}</h4>
                                <div className='inc_dec_amount flex items-center p-[0.2rem]'>
                                    <AiOutlinePlus className='text-[0.95rem] border border-purple-600 p-[0.1rem]' aria-label='plus' onClick={() => incOrDecCartQuantity(cartPrd.id, 'plus')} />
                                    <input type='text' value={cartPrd.itemQun} className='max-w-[20px] text-center max-h-[22px] text-[0.8rem] focus:outline-0' readOnly />
                                    <AiOutlineMinus className='text-[0.95rem] border border-orange-600 p-[0.1rem]' aria-label='minus' onClick={() => incOrDecCartQuantity(cartPrd.id, 'minus')} />
                                </div>
                            </div>
                        </div>
                        <div className='cart_prd_delete'>
                            <ImBin className='text-[1.3rem] cursor-pointer' onClick={() => deleteCartItem(index)} />
                        </div>
                    </div>
                )
            })
        )
    }
    return (
        isOpen && <aside
            className={`product_cart_container fixed right-0 h-screen w-[100%] top-0 bg-[#e1e7ef80]`}
        >
            <section className='relative h-[100%] overflow-x-hidden'>
                <section className='absolute w-[calc(100%-80%)] bg-[white] h-[100%] right-[-100%] -translate-x-[84rem] transition-[transform] duration-150 px-2 overflow-y-auto'>
                    <div className='border-b-[1px] py-2 your_cart_item flex items-center sticky top-0  backdrop-blur-[5px]'>
                        <button onClick={closeCartBox} className='bg-purple-500 text-white p-[0.1rem] rounded-xl flex text-[1.1rem]'><AiOutlineArrowLeft /></button>
                        <h1 className='m-auto'>Your cart product item</h1>
                    </div>
                    {
                        item.length > 0 ?
                            cartProduct()
                            : <div className='cart_empty h-[calc(100%-41px)] relative'>
                                <BsFillCartXFill className='text-[5rem] text-purple-600 absolute top-[calc(100%/2)] left-[6rem]' />
                            </div>
                    }
                </section>
            </section>
        </aside>
    )
}

export default Cart