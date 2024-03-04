import { useGSAP } from '@gsap/react'; // useGSAP hook import from gsap.
import gsap from 'gsap'; // gsap object import
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // gsap plugin for scroll animation handling
import { useRef } from 'react'; // react specific imports
import SplitType from 'split-type'; // splitType library for text spliting into child dom nodes.
import Button from '../common/Button'; // Button component import

// ProductivityCTA component entry point
const ProductivityCTA = () => {

    // useRef hook for the container
    const container = useRef(null);

    // useGSAP hook for the animation
    useGSAP(() => {
        const ourText1 = new SplitType('.productivity__txt', { types: 'words' })
        const words1 = ourText1.words
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            words1,
            // animate from
            {
                y: 100,
                opacity: 0,
            },
            // animate to
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
                }
            },
        )
    }, { scope:container});
    
    return (
        <div className='py-8 flex flex-col items-center md:py-36'>
            <div className='text-4xl tracking-wide text-center w-full max-w-[700px] font-[900] md:text-5xl'  >
                Your <span className='productivity__txt overflow-hidden underline text-[#387ADF]' ref={container} >🚀 Productivity</span> Awaits!
                Start Note-Taking <span className=' text-[#387ADF] underline productivity__txt' ref={container}>Today</span></div>
            <div className='mt-10'>
                <Button />
            </div>
        </div>
    )
}

export default ProductivityCTA;