import Button from '../common/Button'
import heroImg from '../../assets/hero_img2.png'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import splitType from 'split-type';

const HeroSec = () => {
    const container = useRef(null);
    useGSAP(() => {
        const ourText = new splitType('.heading_txt__hero', { types: 'chars' })
        const chars = ourText.chars
        gsap.registerPlugin(ScrollTrigger);
        // gsap.fromTo('.text_heading_hero', {opacity:0, y:+100},  {opacity:1, duration: 1 ,y:0, ease: "power4.easeInOut"});
        gsap.fromTo('.hero_img', {opacity:0},  {opacity:1, duration: 2 , ease: "power4.easeInOut"});
        gsap.fromTo(
            chars,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
            }
        )
    }, { scope: container });

    return (
        <div className='w-full herosec flex flex-col gap-20 items-center justify-center py-[80px]' ref={container}>
            <div className='child1'>
                <div className='container text_heading_hero flex flex-col items-center'>
                    <div className='heading_txt__hero overflow-hidden text-5xl text-center font-bold sm:text-5xl'> Effortless Note-Taking. </div>
                    <div className=' heading_txt__hero overflow-hidden text-4xl font-light mt-[13px]'> Say Hello to Acme.</div>
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