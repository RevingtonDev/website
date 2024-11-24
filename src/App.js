import Layout from "./components/Layout";
import {
  BrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { router, routes } from "./router";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        {routes.map((props) => (
          <Route {...props} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
