import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import Facts from "./pages/Facts/Facts";
import NotFound from "./pages/NotFound/NotFound";
import Beans from "./pages/Beans/Beans";
import Recipes from "./pages/Recipes/Recipes";
import Combinations from "./pages/Combinations/Combinations";
import History from "./pages/History/History";
import BeanPage from "./pages/Bean/Bean";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/facts",
    element: <Facts />,
  },
  {
    path: "/beans",
    element: <Beans />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
  },
  {
    path: "/combinations",
    element: <Combinations />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/bean/:id",
    element: <BeanPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
