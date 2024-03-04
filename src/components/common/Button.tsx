import assetsConfig from "../../assets"; // assets urls object

// Button component props
interface ButtonProps {
    className?: string
    textClassName?: string
}

// Button component entry point
const Button = (props: ButtonProps) => {
    return (
        <button aria-label="sign up" {...props} className={`bg-[#387ADF] w-fit text-white rounded-lg flex items-center gap-3  ${props.className ? props.className : ""} p-3 px-6 `}>
            <div>
                <img src={assetsConfig.images.loginImg} alt='login.png' />
            </div>
            <div className={`${props.textClassName ? props.textClassName : ""}`}>
                Start Taking Notes
            </div>
        </button>
    )
}

export default Button;