import { createBrowserRouter } from "react-router-dom";
import MainPageRoot from "../../root/MainPageRoot";
import Home from "../../Main Page/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
