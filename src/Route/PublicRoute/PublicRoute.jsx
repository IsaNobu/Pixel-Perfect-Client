import { createBrowserRouter } from "react-router-dom";
import MainPageRoot from "../../root/MainPageRoot";
import Home from "../../Main Page/Home/Home/Home";
import Login from "../../Main Page/Account/Login";
import ErrorPage from "../../error-page";
import SignUp from "../../Main Page/Account/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login-page",
        element: <Login />,
      },
      {
        path: "/SignUp-Page",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
