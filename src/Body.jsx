import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);

  return  <RouterProvider router={appRouter} />

}

export default Body;