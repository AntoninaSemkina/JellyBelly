import "./App.css";
import { useState } from "react";
import Header from "./components/Header/";
import Cards from "./components/Cards";
import Counter from "./components/Counter";
import Title from "./components/Title";
import Buttons from "./components/Buttons";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <Header />
      {/* <Cards/> */}
      <Title data={value} />
      <Buttons value={value} setValue={setValue} />
    </div>
  );
}

export default App;
