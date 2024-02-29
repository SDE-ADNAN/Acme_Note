import anyDeviceImg from '../../assets/Apple-Freeform-hero_big.jpg'
const AnyDeviceSupport = () => {
    return (
        <div className='flex flex-col items-center py-36'>
            <div className='text-3xl tracking-wide text-center w-full max-w-[900px] font-[900] md:text-4xl xl:text-5xl'>
                Edit   <span className='text-[#387ADF]'>Your Notes </span> On <span className='text-[#387ADF]'>Any Device</span><br/>
                From <span className='text-[#387ADF]'>Anywhere</span><br/>
                <span className='text-2xl font-medium'> Supported on all <span className='text-[#387ADF]'> OS </span> and <span className='text-[#387ADF]'>Browsers</span>.</span>
            </div>
            <div className='w-auto max-w-[1128px]'>
                <img className='w-fit' src={anyDeviceImg} alt="hero_img" />
            </div>
        </div>
    )
}

export default AnyDeviceSupport