import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router";
import { Bean } from "../../types/bean";

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
  }, []);

  return (
    <>
      <Header />
      <div>
        {beanData && (
          <div className="">
            <img src={beanData.imageUrl} alt="" />
            <h1>{beanData.flavorName}</h1>
            <p>{beanData.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BeanPage;
