import { useGSAP } from '@gsap/react'; // useGSAP hook import from gsap.
import gsap from 'gsap'; // gsap object import
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // gsap plugin for scroll animation handling
import { useRef } from 'react'; // useRef hook import form react.
import splitType from 'split-type'; // splitType library for text spliting into child dom nodes.
import assetsConfig from '../../assets'; // assets urls object
import Button from '../common/Button'; // Button component import

// HeroSec component entry point
const HeroSec = () => {
    // useRef hook for the container
    const container = useRef(null);

    // useGSAP hook for the animation
    useGSAP(() => {
        const ourText = new splitType('.heading_txt__hero', { types: 'words' })
        const words = ourText.words
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.hero_img', { opacity: 0 }, { opacity: 1, duration: 2, ease: "power4.easeInOut" });
        gsap.fromTo(
            words,
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
        <div className='w-full herosec flex flex-col gap-20 items-center justify-center py-[25px]' ref={container}>
            <div className='child1'>
                <div className='container text_heading_hero flex flex-col items-center'>
                    <div className='heading_txt__hero overflow-hidden text-4xl text-center font-bold sm:text-5xl'>📝 Effortless Note-Taking. 🖐️</div>
                    <div className=' heading_txt__hero overflow-hidden text-4xl font-light mt-[13px]'>Say Hello to Acme.👋</div>
                    <Button className='mt-11' />
                </div>
            </div>
            <div className='w-auto max-w-[1128px]' >
                <img className='hero_img w-fit' src={assetsConfig.images.heroBanerImg} alt="hero_img" />
            </div>
        </div>
    )
}

export default HeroSec;