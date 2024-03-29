import { useRef } from 'react'; // react specific imports
import assetsConfig from '../../assets'; // assets urls object
import useCustomGSAP from '../../hooks/useCustomGSAP'; // custom hook for gsap repeated code


// Props for the row in about section
type RowItemProps = {
    title: string,
    description: string;
    image: string;
    reverse?: boolean;
    index?: number;
    refItem?: React.RefObject<HTMLDivElement>;
}

// Data for the rows in about section
const RowData: RowItemProps[] = [
    {
        title: '✍️ A handwriting experience like no other. 🌟',
        description: 'Fall in love with handwriting all over again with Acme Note’ digital ink. Trusted by millions of people worldwide.',
        image: assetsConfig.images.aboutImg1
    }, 
    {
        title: '✍️ Write freely on paper that recognizes every typo. 📝',
        description: 'Powerful AI features like Spellcheck and Word Complete fix your mistakes, so you can focus on getting your ideas on the page.',
        image: assetsConfig.images.aboutImg2,
        reverse: true
    }, {
        title: '📚 Your entire library, just a click away. 🖱️',
        description: 'Whether you’re typing away on your laptop, annotating a PDF on your tablet, or reviewing your notes on your phone, you can do it with Acme Note. Now available on every device.',
        image: assetsConfig.images.aboutImg3
    }
]


// about section component entry point.
const About = () => {
    // refs for the containers
    const container1 = useRef(null);
    const container2 = useRef(null);
    const container3 = useRef(null);

    // made custom hook to animate the text and image as it was voilating DRY principle
    useCustomGSAP(container1,'.heading_txt__about__1',".about_img_1",false);
    useCustomGSAP(container2,'.heading_txt__about__2',".about_img_2",true);
    useCustomGSAP(container3,'.heading_txt__about__3',".about_img_3",false);


    // TODO: Handle DRY principle here
    return (
        <ul className='about '>
            <li className={`row_1 flex flex-col  gap-10 lg:gap-0 ${!RowData[0].reverse ? "lg:flex-row" : ""} ${RowData[0].reverse ? "lg:flex-row-reverse" : ""} items-center py-12`} ref={container1}>
                <div className={`Child_ w-auto max-w-[400px]`} >
                    <div className={`overflow-hidden heading_txt__about__1 text-4xl font-extrabold`} >
                        {RowData[0].title}
                    </div>
                    <div className={`overflow-hidden heading_txt__about__1 text-xl font-light tracking-wide`}>
                        {RowData[0].description}
                    </div>
                </div>
                <div className='child2 flex-1'></div>
                <div className='about_img_1 w-auto max-w-[508px]'>
                    <img className='rounded-2xl ' src={RowData[0].image} alt={"about_img_1"}></img>
                </div>
            </li>

            <li className={`row_2 flex flex-col  gap-10 lg:gap-0 ${!RowData[1].reverse ? "lg:flex-row" : ""} ${RowData[1].reverse ? "lg:flex-row-reverse" : ""} items-center py-12`} ref={container2}>
                <div className={`Child_ w-auto max-w-[400px]`} >
                    <div className={`overflow-hidden heading_txt__about__2 text-4xl font-extrabold`} >
                        {RowData[1].title}
                    </div>
                    <div className={`overflow-hidden heading_txt__about__2 text-xl font-light tracking-wide`}>
                        {RowData[1].description}
                    </div>
                </div>
                <div className='child2 flex-1'></div>
                <div className='about_img_2 image w-auto max-w-[508px]'>
                    <img className='rounded-2xl ' src={RowData[1].image} alt={"about_img_1"} ></img>
                </div>
            </li>

            <li className={`row_2 flex flex-col  gap-10 lg:gap-0 ${!RowData[2].reverse ? "lg:flex-row" : ""} ${RowData[2].reverse ? "lg:flex-row-reverse" : ""} items-center py-12`} ref={container3}>
                <div className={`Child_ w-auto max-w-[400px]`} >
                    <div className={`overflow-hidden heading_txt__about__3 text-4xl font-extrabold`} >
                        {RowData[2].title}
                    </div>
                    <div className={`overflow-hidden heading_txt__about__3 text-xl font-light tracking-wide`}>
                        {RowData[2].description}
                    </div>
                </div>
                <div className='child2 flex-1'></div>
                <div className='about_img_3 image w-auto max-w-[508px]'>
                    <img className='rounded-2xl ' src={RowData[2].image} alt={"about_img_1"} ></img>
                </div>
            </li>
        </ul>
    )
}

export default About;