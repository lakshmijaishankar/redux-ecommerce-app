import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
const Carousel = props => {
    const { bg_Images } = props
    const [nextImg, setNextImg] = useState(0)
    console.log(props)

    const pre = () => {
        setNextImg(curr => curr === 0 ? bg_Images.length - 1 : curr - 1)
    }
    const next = () => {
        setNextImg(curr => curr === bg_Images.length - 1 ? 0 : curr + 1)
    }

    useEffect(() => {
        // setInterval(next, 2000)
    }, [])
    return (
        <div className='carousel overflow-x-hidden flex relative'>
            {
                bg_Images.map((img, index) => (
                    <figure className={`h-[22vw] w-[100%] flex-shrink-0 transition-[transform] duration-[500ms]`} style={{ transform: `translateX(-${nextImg * 100}%)` }} onTouchMove={next} key={index}>
                        <img src={img} className={`carousel-${index} w-[100%] h-[100%] object-contain `} />
                    </figure>
                ))
            }
            <div className='btn-next absolute h-[100%] flex flex-col justify-center right-0 px-2 capitalize text-white'>
                <button onClick={next} className='bg-[#f0f5ff] p-1 rounded-full'>
                    <AiOutlineArrowRight className='text-[1.5rem] text-black' />
                </button>
            </div>
            <div className='btn-pre absolute h-[100%] flex flex-col justify-center left-0 px-2 capitalize text-white'>
                <button onClick={pre} className='bg-[#f0f5ff] p-1 rounded-full'>
                    <AiOutlineArrowLeft className='text-[1.5rem] text-black' />
                </button>
            </div>
        </div>
    )
}

export default Carousel