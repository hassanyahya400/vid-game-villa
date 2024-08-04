import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import GameDetails from "../pages/GameDetailsPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "games",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "games/:id",
        element: <GameDetails />,
      },
    ],
  },
]);

export default router;
