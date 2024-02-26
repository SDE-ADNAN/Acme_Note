import Button from "../common/Button"

const Navbar = () => {
  return (
        <div className='w-full backdrop-blur-sm bg-[#F3F3F3]/80  fixed top-0'>
            <div className='max-w-[1250px] h-[80px] mx-auto  flex justify-start items-center'>
            <div className='text-[36px]'>
                <span className="text-[#387ADF] font-[900]">Acme</span>
                <span className="font-extralight">&nbsp;Note</span>
            </div>
            <div className='flex-1'></div>
            <Button/>
            </div>
      </div>
  )
}

export default Navbar