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
}

const RowData: RowItemProps[] = [
    {
        title: 'A handwriting experience like no other.',
        description: 'Fall in love with handwriting all over again with Goodnotes’ digital ink. ❤️ by millions of people worldwide.',
        image: image1
    }, {
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

const RowItem = (props: RowItemProps) => {
    const container = useRef(null);
    useGSAP(() => {
        const ourText = new splitType('.heading_txt__about', { types: 'words' })
        const words = ourText.words
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            words,
            {
                y: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: container.current,
                    start: "-50% 100%",
                    end: "60% 70%",
                    scrub: 4,
                }
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: "-50% 100%",
                    end: "60% 70%",
                    scrub: 4,
                }
            },
        )
    }, { scope: container });
    return (
        <div className={`row_1 flex flex-col  gap-10 lg:gap-0 ${!props.reverse? "lg:flex-row":""} ${props.reverse? "lg:flex-row-reverse":""} items-center py-12`} ref={container}>
            <div className='Child1 w-auto max-w-[400px]'>
                <div className=' overflow-hidden heading_txt__about text-4xl font-extrabold'>
                    {props.title}
                </div>
                <div className='overflow-hidden heading_txt__about text-xl font-light tracking-wide'>
                    {props.description}
                </div>
            </div>
            <div className='child2 flex-1'></div>
            <div className='image w-auto max-w-[508px]'>
                <img className='rounded-2xl' src={props.image}></img>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <div className='about '>
            {RowData.map((item, index) =>
                <RowItem key={index} {...item} />)}
        </div>
    )
}

export default About