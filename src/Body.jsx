import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const LazyLandingPage = lazy(() => import("./pages/LandingPage"));
import Spinner from './components/Spinner'

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Spinner/>}>
          <LazyLandingPage />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default Body;
