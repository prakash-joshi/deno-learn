import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Dinosaur from "./pages/Dinosaur";
import "./App.css";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/:dinosaur",
      element: <Dinosaur />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default App;
