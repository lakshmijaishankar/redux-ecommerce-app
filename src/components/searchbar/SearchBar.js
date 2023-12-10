import React from 'react'
import { useSelector } from 'react-redux'
import price_svg from '../../imgutilies/rupee-svg.png'
const SearchBar = () => {
    const { item } = useSelector(state => state.saerchItem)

    return (
        <ul className='absolute w-[100%] shadow z-[1] sarchbar top-[3rem] bg-white max-h-[250px] overflow-y-auto flex flex-col'>
            {
                item.length > 0 && item.map(value => (
                    <li className='py-1 px-1 flex items-center justify-between hover:bg-[#f0f5ff] text-[0.8rem] hover:cursor-pointer' key={value.id}>
                        <figure className='max-w-[40px]'>
                            <img src={value.image} />
                        </figure>
                        <p className='max-w-[280px] w-[100%]'>{value.title}</p>
                        <figure className='flex items-center'>
                            <img src={price_svg} className='max-w-[20px]' />
                            <h3>{value.price}</h3>
                        </figure>
                    </li>
                ))
            }
        </ul>
    )
}

export default SearchBar