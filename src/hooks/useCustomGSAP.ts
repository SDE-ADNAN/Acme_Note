import { useGSAP } from "@gsap/react"; // gsap hook for animation
import gsap from "gsap"; // gsap object import
import { ScrollTrigger } from "gsap/ScrollTrigger"; // gsap plugin for scroll animation handling
import SplitType from "split-type"; // splitType library for text spliting into child dom nodes



// useCustomGSAP hook for the animation
/**
 * Function for
 * @param {React.RefObject<HTMLDivElement>} containerRef - react ref for container in which the animating child is present.
 * @param {string} headingTextSelector -  heading text selector for the animation
 * @param {string} imageSelector -  image selector for the animation
 * @param {boolean} reverse -  boolean value for the reverse animation ( x/y axis )
 * @returns {void} -  void
 * @example
 * const container1 = useRef(null);
 * useCustomGSAP(container1,'.heading_txt__about__1',".about_img_1",false);
 * // only this much.
 */
const useCustomGSAP = (containerRef:React.RefObject<HTMLDivElement>,headingTextSelector:string,imageSelector:string,reverse:boolean) => {

    // useGSAP hook for the animation
    useGSAP(() => {
        const ourText1 = new SplitType(`${headingTextSelector}`, { types: 'words' })
        const words1 = ourText1.words
        gsap.registerPlugin(ScrollTrigger);
        // handle animation of text
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
                }
            },
        )
        // handle animation of image
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
                }
            },
        )
    }, { scope:containerRef});

}

export default useCustomGSAP