import { useRef } from 'react';
import ipadImg from '../../assets/ipad.png';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Ipad = () => {
    const container = useRef(null);
    const image = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: image.current, // start the animation when ".img" enters the viewport (once)
                start: '-20% 90%',
                end: '20% 30%',
                scrub: 4,
            },
        });
        tl.fromTo(image.current, { scale: 2, opacity: 0, y: +200 }, { scale: 0.8, opacity: 1, duration: 2, y: 0, ease: "power4.inOut" });

    }, { scope: container });

    return (
        <div className='py-8 flex flex-col items-center md:py-36' ref={container}>
            <div id="text_heading" className='text_heading text-3xl tracking-wide text-center w-full max-w-[900px] font-[900] md:text-4xl xl:text-5xl'>
                Take full <span className='text-[#387ADF]'>Advantage </span> Of <span className='text-[#387ADF]'>Apple Ipad </span>
                and <span className='text-[#387ADF]'> 🍏✏️ Apple Pencil</span>.<br />
            </div>
            <div className=' relative overlay w-auto max-w-[900px] mt-2' >
                <img className='relative inset-0 img w-fit h-full -z-10' ref={image} src={ipadImg} alt="hero_img" />
            </div>
        </div>
    )
}

export default Ipad;
