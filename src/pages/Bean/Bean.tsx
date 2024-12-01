import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Bean } from "../../types/bean";
import style from "./style.module.css";
import Info from "./info";

const BeanPage = () => {
  const params = useParams();
  const [beanData, setBeanData] = useState<Bean | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(
          `https://jellybellywikiapi.onrender.com/api/beans/${params.id}`
        );
        const data = await req.json();
        setBeanData(data);
      } catch (e) {
        console.log("Error->", e);
      }
    };
    getData();
  }, [params.id]);

  return (
    <>
      <div className={style.container1}>
        {beanData && (
          <div>
            <h1>{beanData.flavorName}</h1>
            <p>{beanData.description}</p>
            <img src={beanData.imageUrl} alt="bean" />
            <h4>Group Name:</h4>
            <div>{beanData.groupName}</div>
            <h4>Ingredients:</h4>
            <div>{beanData.ingredients}</div>
            <div className={style.informations}>
              <Info beanData={beanData} />
            </div>
          </div>
        )}
        <Link to={`/beans/`} className={style.btn}>
          <h4>Back to Beans</h4>
        </Link>
      </div>
    </>
  );
};

export default BeanPage;
