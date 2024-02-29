import Button from '../common/Button'
import heroImg from '../../assets/hero_img2.png'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HeroSec = () => {
    const container = useRef(null);

        useGSAP(() => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.fromTo('.text_heading_hero', {opacity:0, y:+100},  {opacity:1, duration: 1 ,y:0, ease: "power4.easeInOut"});
            gsap.fromTo('.hero_img', {opacity:0},  {opacity:1, duration: 2 , ease: "power4.easeInOut"});
        }, { scope: container });

    return (
        <div className='w-full herosec flex flex-col gap-20 items-center justify-center py-[80px]' ref={container}>
            <div className='child1'>
                <div className=' text_heading_hero flex flex-col items-center'>
                    <div className='text-5xl text-center font-bold sm:text-5xl'> Effortless Note-Taking. </div>
                    <div className='text-4xl font-light mt-[13px]'> Say Hello to Acme.</div>
                    <Button className='mt-11' />
                </div>
            </div>
            <div className='w-auto max-w-[1128px]' >
                <img className='hero_img w-fit' src={heroImg} alt="hero_img" />
            </div>
        </div>
    )
}

export default HeroSec