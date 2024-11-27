import "./App.css";
import { createContext, useState, Dispatch } from "react";
import Header from "./components/Header/";
import Cards from "./components/Cards";
import Search from "./components/Search";
import { RouterProvider } from "react-router";
import router from "./router";

type ContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ContextType | null>(null);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// <ThemeContext.Provider value={{ theme, setTheme }}>
//       <div className={`container ${theme}`}>
//         <Header />
//         <Search setFilterValue={setFilterValue} />
//         <Cards filterValue={filterValue} />
//       </div>
//     </ThemeContext.Provider>

// const [filterValue, setFilterValue] = useState("");

//   const [theme, setTheme] = useState("dark");
