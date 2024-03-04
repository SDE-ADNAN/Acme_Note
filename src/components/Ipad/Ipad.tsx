import { useGSAP } from "@gsap/react"; // gsap hook for animation
import gsap from 'gsap'; // gsap object import
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // scrollTrigger plugin import for scroll animations
import { useRef } from 'react'; // react useRef hook import
import assetsConfig from '../../assets'; // assets urls object

// Ipad component entry point
const Ipad = () => {

    // useRef hook for the container and image
    const container = useRef(null);
    const image = useRef(null);

    // all gsap and scrollTrigger animations are handled here
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: image.current,
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
                <img className='relative inset-0 img w-fit h-full z-0' ref={image} src={assetsConfig.images.ipadImg} alt="hero_img" />
            </div>
        </div>
    )
}

export default Ipad;
