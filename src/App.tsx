// import { useState } from "react";
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
// import Counter from './components/Counter';
// import Title from './components/Title';
// import Buttons from './components/Buttons';
// import Example from './components/Example';
// import Modal from './components/Modal';
import Search from './components/Search';
import { useOnlineStatus, useEffect, useState, createContext, Dispatch } from 'react';

type ContextType = {
  theme : string;
  setTheme:Dispatch<React.SetStateAction<string>>;
}


export const ThemeContext = createContext<ContextType | null>(null);

function App() {

  // const [isVisible, setIsVisible] = useState(true);
  const [filterValue, setFilterValue] = useState ("");
  console.log("filterValue", filterValue);
  // const status = useOnlineStatus ();
  // console.log("status",status);
  const[theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{theme , setTheme}}>
    <div className={`container ${theme}`}>
      <Header />
      <Search setFilterValue = {setFilterValue}/>
      <Cards filterValue = {filterValue}/>
      {/* <Counter/> */}
      {/* <Title data = {value}/>
      <Buttons value = {value} setValue = {setValue}/> */}
      {/* <button onClick={()=>{setIsVisible(!isVisible)}}>Visible</button>
      {isVisible && <Example/>} */}
      {/* <Example/> */}
    </div>
    </ThemeContext.Provider>
  );
}

export default App
