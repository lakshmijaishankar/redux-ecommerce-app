import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { filterCategory } from '../../redux/actions/filterACtion'

const ProductFilter = () => {
    const [isOpen, setIsOpen] = useState('')
    const [maxHeight, setMaxHeight] = useState(0)
    const [prdFilter, setPrdFilter] = useState([])
    const dispatch = useDispatch()
    const ul = useRef()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(response => setPrdFilter(response.data))

    }, [])

    const toogleAccordion = e => {
        setMaxHeight(ul.current.scrollHeight)
        if (isOpen != "")
            setIsOpen('')
        else
            setIsOpen(e.target.ariaLabel)
    }

    const handleFilter = e => {
        const { value } = e.target
        console.log(e.target.value)
        if (value !== 'all') {
            dispatch(filterCategory(`${'category' + '/' + value}`))
        } else {
            dispatch(filterCategory(''))
        }

    }
    return (
        <aside className='sticky top-[61.7812px] product-filter'>
            <section className='category-container px-2'>
                <div className='category uppercase flex items-center py-1 space-x-2'>
                    <h3 className='text-[0.8rem]'>Category</h3>
                    <MdOutlineArrowForwardIos
                        onClick={toogleAccordion}
                        className={`transition-[transform] ${isOpen === 'category' ? 'rotate-[90deg]' : 'rotate-0'} duration-250 cursor-pointer text-[0.8rem]`}
                        aria-label='category'
                    />
                </div>
                <ul className={`overflow-y-hidden category-accordion transition-[max-height] text-[0.8rem] capitalize `} ref={ul} style={{ maxHeight: `${isOpen === 'category' ? maxHeight + 'px' : 0}` }}>
                    <li >
                        <input type='radio' name='category' value='all' onChange={handleFilter} id='all' />
                        <label htmlFor='all'>all</label>
                    </li>
                    {
                        prdFilter.map(filter => (
                            <li key={filter}>
                                <input type='radio' name='category' value={filter} onChange={handleFilter} id={filter} />
                                <label htmlFor={filter}>{filter}</label>
                            </li>
                        ))
                    }
                    {/* <li>
                        <input type='radio' name='category' value='Women' />
                        <label> women</label>
                    </li>
                    <li >
                        <input type='radio' name='category' value='Electronics' />
                        <label>electronics</label>
                    </li> */}
                </ul>
            </section>
            <section className='price-container px-2'>
                <div className='price uppercase flex items-center py-1 space-x-2'>
                    <h3 className='text-[0.8rem]'>price</h3>
                    <MdOutlineArrowForwardIos
                        onClick={toogleAccordion}
                        className={`transition-[transform] ${isOpen === 'price' ? 'rotate-[90deg]' : 'rotate-0'} duration-250 cursor-pointer text-[0.8rem]`}
                        aria-label='price'
                    />
                </div>
            </section>
        </aside >
    )
}

export default ProductFilter