import Button from '../common/Button'
import React from 'react'
import heroImg from '../../assets/hero_img2.png'

const HeroSec = () => {
    return (
        <div className='w-full herosec flex flex-col gap-20 items-center justify-center py-[80px]'>
            <div className='child1'>
                <div className='flex flex-col items-center'>
                    <div className='text-5xl font-bold sm:text-3xl'> Effortless Note-Taking. </div>
                    <div className='text-4xl font-light mt-[13px]'> Say Hello to Acme.</div>
                    <Button className='mt-11' />
                </div>
            </div>
            <div className='w-auto max-w-[1128px]'>
                <img className='w-fit' src={heroImg} alt="hero_img" />
            </div>
        </div>
    )
}

export default HeroSec