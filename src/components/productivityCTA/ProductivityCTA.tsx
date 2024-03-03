import SplitType from 'split-type';
import Button from '../common/Button'
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const ProductivityCTA = () => {
    const container = React.useRef(null);
    useGSAP(() => {
        const ourText1 = new SplitType('.productivity__txt', { types: 'words' })
        const words1 = ourText1.words
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            words1,
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                    end: "bottom 70%",
                    scrub: 4,
                    // markers: true
                }
            },
        )

        
    }, { scope:container});
    return (
        <div className='py-8 flex flex-col items-center md:py-36'>
            <div className='text-5xl tracking-wide text-center w-full max-w-[700px] font-[900]'  >
                Your <span className='productivity__txt overflow-hidden underline text-[#387ADF]' ref={container} >🚀 Productivity</span> Awaits!
                Start Note-Taking <span className=' text-[#387ADF] underline productivity__txt' ref={container}>Today</span>📝📈 </div>
            <div className='mt-10'>
                <Button />
            </div>
        </div>
    )
}

export default ProductivityCTA