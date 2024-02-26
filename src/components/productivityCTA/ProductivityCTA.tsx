import Button from '../common/Button'
import React from 'react'

const ProductivityCTA = () => {
    return (
        <div className='flex flex-col items-center py-36'>
            <div className='text-5xl tracking-wide text-center w-full max-w-[700px] font-[900]'>
                Your <span className='text-[#387ADF]'>Productivity</span> Awaits!
                Start Note-Taking Today</div>
            <div className='mt-10'>
                <Button />
            </div>
        </div>
    )
}

export default ProductivityCTA