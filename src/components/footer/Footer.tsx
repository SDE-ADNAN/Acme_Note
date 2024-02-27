const Footer = () => {
    return (
        <footer className="py-20 bg-black text-white min-[0px]:px-4 max-[1350px]:px-0">
            <div className="w-full max-w-[1225px] mx-auto flex justify-center flex-col gap-10 md:flex-row md:gap-0">
                <div className='text-[36px] flex-1'>
                    <span className="text-[#387ADF] font-[900]">Acme</span>
                    <span className="font-extralight">&nbsp;Note</span>
                </div>
                <div className="text-white flex flex-row gap-16 items-end">
                    <div className=" flex flex-col gap-2">
                        <div className="text-lg font-bold ">Support</div>
                        <div className="cursor-pointer">Help Center</div>
                        <div className="cursor-pointer">Feature Request</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-lg font-bold">Useful Links</div>
                        <div className="cursor-pointer">Terms & Conditions</div>
                        <div className="cursor-pointer">Privacy Policy</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer