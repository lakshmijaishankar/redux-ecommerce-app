import React from 'react'
import Carousel from './Carousel'
import bg_1 from '../../imgutilies/carousel-img/men_s_wear.png'
import bg_2 from '../../imgutilies/carousel-img/alpha_banner.png'
import bg_3 from '../../imgutilies/carousel-img/BB-1.jpg'
import Recommended from '../recommended/Recommended'

const CarouselCotainer = () => {
    const bg_Images = [bg_1, bg_2, bg_3]
    return (
        <section className='carousel_container '>
            <Carousel bg_Images={bg_Images} />
            <Recommended />
        </section>
    )
}

export default CarouselCotainer