import { useState } from "react";
import style from "./style.module.css";
import CombinationsCards from "../../components/CombinationsCards/CombinationsCards";

const Combinations = () => {
  const [filterValue] = useState(""); // Фильтр можно позже заменить на динамический ввод

  return (
    <div className={style.container}>
      <h1>Explore Combinations...</h1>
      <CombinationsCards filterValue={filterValue} />
    </div>
  );
};

export default Combinations;
