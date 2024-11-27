import { useState } from "react";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import Search from "../../components/Search";

const Beans = () => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <>
      <Header />
      <Search setFilterValue={setFilterValue} />
      <Cards filterValue={filterValue} />
    </>
  );
};

export default Beans;
