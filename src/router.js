import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    nav: "Home",
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
