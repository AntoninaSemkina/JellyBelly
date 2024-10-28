import logo_img from "../../images/logo.png"
import style from "./style.module.css"

const Logo =() =>{
    return (
    <div className={style.logo}>
        <img src={logo_img} alt="logo" />
        <p>Jelly Belly</p>
    </div>
    )
}

export default Logo