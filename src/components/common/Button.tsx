import loginImg from "../../assets/login.png"

interface ButtonProps {
    className?: string
}

const Button = (props: ButtonProps) => {
    return (
        <button {...props} className={`bg-[#387ADF] w-fit text-white rounded-lg flex items-center gap-3  ${props.className ? props.className : ""} sm:p-1 sm:px-2  md:p-3 md:px-6 `}><div><img src={loginImg} alt='login.png'></img></div> <div className="sm:hidden lg:block">Start Taking Notes</div></button>
    )
}

export default Button