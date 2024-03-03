import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const useCustomGSAP = (containerRef:React.RefObject<HTMLDivElement>,headingTextSelector:string,imageSelector:string,reverse:boolean) => {
    useGSAP(() => {
        const ourText1 = new SplitType(`${headingTextSelector}`, { types: 'words' })
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
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 70%",
                    scrub: 4,
                    // markers: true
                }
            },
        )
        gsap.fromTo(
            `${imageSelector}`,
            {
                x: reverse?-200:+200,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: `${imageSelector}`,
                    start: "top 80%",
                    end: "bottom 70%",
                    scrub: 4,
                    // markers: true
                }
            },
        )

        
    }, { scope:containerRef});
}

export default useCustomGSAP