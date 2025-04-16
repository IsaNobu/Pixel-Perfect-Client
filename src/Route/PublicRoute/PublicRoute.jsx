import { createBrowserRouter } from "react-router-dom";
import MainPageRoot from "../../root/MainPageRoot";
import Home from "../../Main Page/Home/Home/Home";
import Login from "../../Main Page/Account/Login";
import ErrorPage from "../../error-page";
import SignUp from "../../Main Page/Account/SignUp";
import DashboardPage from "../../root/DashboardPage";
import UserProfile from "../../Dashboard/UserProfile/userProfile";
import SubmitProduct from "../../Dashboard/Seller/SubmitProduct";
import SellerRoute from "../SellerRoute/SellerRoute";

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
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/dashboard/publish-product",
        element: (
          <SellerRoute>
            <SubmitProduct />
          </SellerRoute>
        ),
      },
    ],
  },
]);

export default router;
