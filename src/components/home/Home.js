import React from 'react'
import { useSelector } from 'react-redux'
import ProductFilter from '../aside/ProductFilter'
import CarouselCotainer from '../carousel/CarouselCotainer'
import ProductListing from '../productListing/ProductListing'

const Home = () => {
    const { filterType } = useSelector(state => state.filterCategory)
    return (
        <section className='duration-200 transition-[width] grid grid-cols-[12%_88%] items-start'>
            <ProductFilter />
            <section className='wrapper-container flex flex-col'>
                <CarouselCotainer />
                <ProductListing filterType={filterType} />
            </section>
        </section>
    )
}

export default Home