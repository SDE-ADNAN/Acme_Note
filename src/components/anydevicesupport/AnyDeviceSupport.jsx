import { useGSAP } from '@gsap/react'; // gsap specific imports
import gsap from 'gsap'; // gsap main object
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // ScrollTrigger plugin from gsap core
import { useRef } from 'react'; // react specific imports
import assetsConfig from '../../assets'; // assets config for images url


// AnyDeviceSupport component entry point.
const AnyDeviceSupport = () => {

    // useRef for container and image
    const container = useRef(null);
    const image = useRef(null);

    // useGSAP hook to animate the image
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: image.current, // start the animation when ".img" enters the viewport (once)
                start: '-20% 80%',
                end: '90% 70%',
                scrub: 4,
            },
        });
        tl.fromTo(image.current, { scale: 2, opacity: 0, }, { scale: 0.8, opacity: 1, duration: 2, ease: "power4.inOut" });
    }, { scope: container });

    return (
        <div className='py-8 flex flex-col items-center md:py-36' >
            <div className='text-3xl tracking-wide text-center w-full max-w-[900px] font-[900] md:text-4xl xl:text-5xl'>
                📝 Edit<span className='text-[#387ADF]'> Your Notes </span>On
                <span className='text-[#387ADF]'> Any Device</span><br />From
                <span className='text-[#387ADF]'> Anywhere 🌍</span><br />
                <span className='text-2xl font-medium'>
                    Supported on all
                    <span className='text-[#387ADF]'> OS </span> and
                    <span className='text-[#387ADF]'>Browsers</span>.
                </span>
            </div>
            <div className='relative w-auto max-w-[1128px]' ref={container}>
                <img className='relative w-fit z-0' ref={image} src={assetsConfig.images.allDeviceSupportImg} alt="allDeviceSupportImg" />
            </div>
        </div>
    )
}

export default AnyDeviceSupport;