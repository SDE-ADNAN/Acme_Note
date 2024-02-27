import Button from "../common/Button"

const Navbar = () => {
  return (
    <div className='w-full backdrop-blur-md bg-[#F3F3F3]/40  fixed top-0 border-b-white'>
      <div className='w-fit md:w-auto max-w-[1250px] min-[0px]:p-4 max-[1350px]:p-0  h-[80px] mx-auto  flex justify-start items-center'>
        <div className='text-3xl text-center md:w-auto md:text-right xl:text-3xl'>
          <span className="text-[#387ADF] font-[900]">Acme</span>
          <span className="font-extralight">&nbsp;Note</span>
        </div>
        <div className='hidden sm:block flex-1'></div>
        <Button className="hidden md:flex" textClassName="" />
      </div>
    </div>
  )
}

export default Navbar