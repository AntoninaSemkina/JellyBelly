import {FC} from "react"; 
import style from "./style.module.css"
import {Bean} from "../../types/bean"

type Props={
    data: Bean;
}

const Card : FC<Props> =({data})=>{
    return <div className={style.card}>
        <img src={data.imageUrl} alt="" />
        <h2>{data.flavorName}</h2>
        <p>{data.description}</p>
        {data.sugarFree ? <p>Not sugar</p>:<p>with sugar</p>}
    </div>
}

export default Card