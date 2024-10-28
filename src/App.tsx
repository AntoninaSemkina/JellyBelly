import './App.css';
import Header from "./components/Header/"
import Cards from "./components/Cards"
import allBeans from "./data/beans.json"



function App() {
  console.log(allBeans)
  return (
    <div className="container">
      <Header/>
      <Cards/>
    </div>
  )
}

export default App
