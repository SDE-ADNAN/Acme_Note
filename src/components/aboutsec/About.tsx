import image1 from '../../assets/img1.webp';

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
    return (
        <div className={`row_1 flex ${props.reverse? "flex-row-reverse":""} items-center py-12`}>
            <div className='Child1 w-auto max-w-[400px]'>
                <div className='text-4xl font-extrabold'>
                    {props.title}
                </div>
                <div className='text-xl font-light tracking-wide'>
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