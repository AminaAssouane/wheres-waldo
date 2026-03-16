import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Game } from "./pages/Game/Game.jsx";
import { Leaderboard } from "./pages/Leaderboard/Leaderboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "game", element: <Game /> },
      { path: "leaderboard", element: <Leaderboard /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
