import {FC} from "react"; 
import style from "./style.module.css"

// type Props={
//     title:string
// }
interface Props{
    title: string;
    image? : string;
}
const Card : FC<Props> =({title, image})=>{
    return(
    <div className={style.card}>
        <img src={image} alt="" />
        <h2>{title}</h2>
    </div>
    )
}

export default Card