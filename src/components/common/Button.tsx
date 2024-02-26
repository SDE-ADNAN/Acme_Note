import React from 'react'

interface ButtonProps {
    className?: string
}

const Button = (props: ButtonProps) => {
    return (
        <button {...props} className={`bg-[#387ADF] w-fit text-white rounded-lg p-3 px-6  ${props.className?props.className:""}`}> -{">"} Start Taking Notes</button>
    )
}

export default Button