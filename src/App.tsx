import "./App.css";
import { createContext, useState, Dispatch } from "react";
import Header from "./components/Header/";
import Cards from "./components/Cards";
import Search from "./components/Search";

type ContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ContextType | null>(null);

function App() {
  const [filterValue, setFilterValue] = useState("");

  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`container ${theme}`}>
        <Header />
        <Search setFilterValue={setFilterValue} />
        <Cards filterValue={filterValue} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
