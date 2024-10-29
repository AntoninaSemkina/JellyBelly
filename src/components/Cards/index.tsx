import style from "./style.module.css";
import Card from "../Card";
import { Bean } from "../../types/bean";
import { useState, useEffect } from "react";

const Cards = () => {
  const [allBeans, setAllBeans] = useState<null | Bean[]>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/Beans"
      );
      const data = await req.json();
      setIsLoading(false);
      setAllBeans(data.items);
    } catch (e) {
      console.log("ERROR->", e);
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style.container}>
      {isLoading && <p>...loading</p>}
      {isError && <p>перезагрузите страницу!</p>}
      {allBeans &&
        allBeans.map((bean) => {
          return <Card data={bean} key={bean.beanId} />;
        })}
    </div>
  );
};

export default Cards;
