import assetsConfig from "../../assets"

interface ButtonProps {
    className?: string
    textClassName?:string
}

const Button = (props: ButtonProps) => {
    return (
        <button {...props}
            className={`bg-[#387ADF] w-fit text-white rounded-lg flex items-center gap-3  ${props.className ? props.className : ""} p-3 px-6 `}>
            <div>
                <img src={assetsConfig.images.loginImg} alt='login.png'></img>
            </div>
            <div className={`${props.textClassName?props.textClassName:""}`}>
                Start Taking Notes
            </div>
        </button>
    )
}

export default Button