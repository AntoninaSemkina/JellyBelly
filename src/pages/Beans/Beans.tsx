import { useState } from "react";
import Cards from "../../components/Cards";
// import Search from "../../components/Search";
// import style from "./style.module.css";

const Beans = () => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <>
      {/* <Search setFilterValue={setFilterValue} /> */}
      <h1>Explore All Beans...</h1>
      <Cards filterValue={filterValue} />
    </>
  );
};

export default Beans;
