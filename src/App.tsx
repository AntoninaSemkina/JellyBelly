import "./App.css";
import { useState } from "react";
import Header from "./components/Header/";
import Cards from "./components/Cards";
import Search from "./components/Search";

function App() {
  const [filterValue, setFilterValue] = useState("");
  console.log("filterValue", filterValue);

  return (
    <div className="container">
      <Header />
      <Search setFilterValue={setFilterValue} />
      <Cards filterValue={filterValue} />
    </div>
  );
}

export default App;
