import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GptSearch from "./GptSearch";

const Body = () => {
  const AppRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={AppRoute}></RouterProvider>
    </div>
  );
};

export default Body;
