import Header from "../../components/Header";
import style from "./style.module.css";
import main from "../../images/main.gif";

const Home = () => {
  return (
    <>
      <Header />
      <div className={style.home_container}>
        <img src={main} alt="" />
        <div className={style.info}>
          <h1>Welcome to the World of Jelly Belly:</h1>
          <p> A Rainbow of Flavors Awaits!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
