import React from 'react'
import { useSelector } from 'react-redux'

const Recommended = () => {
    const { products } = useSelector(state => state.allProducts)

    return (
        <section className='recomended py-2 overflow-x-hidden'>
            <ul className='scroll_inner flex gap-x-2 h-[180px] w-[max-content]'>
                {
                    products.map(({ image }) => (
                        <li className='recomended-img max-w-[180px] flex-shrink-0  rounded-md shadow-md overflow-hidden'>
                            <figure className='h-[100%]'>
                                <img src={image} className='w-[100%] h-[100%] object-contain' />
                            </figure>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Recommended