import { useRef } from 'react';
import anyDeviceImg from '../../assets/Apple-Freeform-hero_big.jpg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const AnyDeviceSupport = () => {

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
        tl.fromTo(image.current, { scale: 1.4, opacity: 0, y: -100 }, { scale: 0.8, opacity: 1, duration: 2, y: 0, ease: "power4.inOut" });

    }, { scope: container });

    return (
        <div className='py-8 flex flex-col items-center md:py-36' ref={container}>
            <div className='text-3xl tracking-wide text-center w-full max-w-[900px] font-[900] md:text-4xl xl:text-5xl'>
                Edit   <span className='text-[#387ADF]'>Your Notes </span> On <span className='text-[#387ADF]'>Any Device</span><br/>
                From <span className='text-[#387ADF]'>Anywhere</span><br/>
                <span className='text-2xl font-medium'> Supported on all <span className='text-[#387ADF]'> OS </span> and <span className='text-[#387ADF]'>Browsers</span>.</span>
            </div>
            <div className='relative w-auto max-w-[1128px]'>
                <img className='relative w-fit -z-10' ref={image} src={anyDeviceImg} alt="hero_img" />
            </div>
        </div>
    )
}

export default AnyDeviceSupport