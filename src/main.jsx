import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Route/PublicRoute/PublicRoute";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Auth Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </>
);
