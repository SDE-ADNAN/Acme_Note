import { useRef } from "react";
import Button from "../common/Button"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const container = useRef(null);
  const acme = useRef(null);
  const note = useRef(null);

  useGSAP(() => {
    gsap.fromTo(acme.current, {opacity:0, y:-10},  {opacity:1, duration: 1 ,y:0, ease: "power4.easeInOut"});
    gsap.fromTo(note.current, {opacity:0},  {opacity:1, duration: 2 , ease: "power4.easeInOut"});
}, { scope: container });

  return (
    <div className='main_navbar_z w-full backdrop-blur-md bg-[#F3F3F3]/40  fixed top-0 border-b-white' ref={container}>
      <div className='w-fit md:w-auto max-w-[1250px] min-[0px]:p-4 max-[1350px]:p-0  h-[80px] mx-auto  flex justify-start items-center'>
        <div className='text-3xl text-center md:w-auto md:text-right xl:text-3xl'>
          <span className="acme text-[#387ADF] font-[900]" ref={acme}>Acme</span>
          <span className="note font-extralight" ref={note}>&nbsp;Note
📝</span>
        </div>
        <div className='hidden sm:block flex-1'></div>
        <Button className="hidden md:flex" />
      </div>
    </div>
  )
}

export default Navbar