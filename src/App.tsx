import "./App.css";
import Header from "./components/Header/";
import Cards from "./components/Cards";
import allBeans from "./data/beans.json";
import Counter from "./components/Counter";

function App() {
  console.log(allBeans);
  return (
    <div className="container">
      <Header />
      {/* <Cards/> */}
      <Counter />
    </div>
  );
}

export default App;
