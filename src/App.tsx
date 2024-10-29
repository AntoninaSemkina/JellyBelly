import "./App.css";
import { useState } from "react";
import Header from "./components/Header/";
import Cards from "./components/Cards";
import Counter from "./components/Counter";
import Title from "./components/Title";
import Buttons from "./components/Buttons";
import Example from "./components/Example";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="container">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
