import { useRef } from 'react';
import image1 from '../../assets/img1.webp';
import { useGSAP } from '@gsap/react';
import splitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type RowItemProps = {
    title: string,
    description: string;
    image: string;
    reverse?: boolean;
    index?: number;
    refItem?: React.RefObject<HTMLDivElement>;
}

const RowData: RowItemProps[] = [
    // {
    //     title: 'A handwriting experience like no other.',
    //     description: 'Fall in love with handwriting all over again with Goodnotes’ digital ink. ❤️ by millions of people worldwide.',
    //     image: image1
    // }, 
    {
        title: 'Write freely on paper that recognizes every typo.',
        description: 'Powerful AI features like Spellcheck and Word Complete fix your mistakes, so you can focus on getting your ideas on the page.',
        image: image1,
        reverse: true
    }, {
        title: 'Your entire library, just a click away',
        description: 'Whether you’re typing away on your laptop, annotating a PDF on your tablet, or reviewing your notes on your phone, you can do it with Goodnotes. Now available on every device.',
        image: image1
    }
]


const About = () => {
    const container1 = useRef(null);
    const container2 = useRef(null);

    useGSAP(() => {
        const ourText1 = new splitType('.heading_txt__about__1', { types: 'words' })
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
                    trigger: container1.current,
                    start: "top 80%",
                    end: "bottom 70%",
                    scrub: 4,
                    // markers: true
                }
            },
        )

        
    }, { scope:container1});
    useGSAP(() => {
        const ourText2 = new splitType('.heading_txt__about__2', { types: 'words' })
        const words2 = ourText2.words
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            words2,
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
                    trigger: container2.current,
                    start: "top 80%",
                    end: "bottom 70%",
                    scrub: 4,
                    // markers: true
                }
            },
        )

        
    }, { scope:container2});

    return (
        <div className='about '>
            <div className={`row_1 flex flex-col  gap-10 lg:gap-0 ${!RowData[0].reverse ? "lg:flex-row" : ""} ${RowData[0].reverse ? "lg:flex-row-reverse" : ""} items-center py-12`} >
                <div className={`Child_ w-auto max-w-[400px]`} ref={container1}>
                    <div className={`overflow-hidden heading_txt__about__1 text-4xl font-extrabold`} >
                        {RowData[0].title}
                    </div>
                    <div className={`overflow-hidden heading_txt__about__1 text-xl font-light tracking-wide`}>
                        {RowData[0].description}
                    </div>
                </div>
                <div className='child2 flex-1'></div>
                <div className='image w-auto max-w-[508px]'>
                    <img className='rounded-2xl ' src={RowData[0].image}></img>
                </div>
            </div>


            <div className={`row_2 flex flex-col  gap-10 lg:gap-0 ${!RowData[1].reverse ? "lg:flex-row" : ""} ${RowData[1].reverse ? "lg:flex-row-reverse" : ""} items-center py-12`} >
                <div className={`Child_ w-auto max-w-[400px]`} ref={container2}>
                    <div className={`overflow-hidden heading_txt__about__2 text-4xl font-extrabold`} >
                        {RowData[1].title}
                    </div>
                    <div className={`overflow-hidden heading_txt__about__2 text-xl font-light tracking-wide`}>
                        {RowData[1].description}
                    </div>
                </div>
                <div className='child2 flex-1'></div>
                <div className='image w-auto max-w-[508px]'>
                    <img className='rounded-2xl ' src={RowData[1].image}></img>
                </div>
            </div>
        </div>
    )
}

export default About