import PropTypes from "prop-types";
import { AuthContext } from "../../Auth Provider/AuthContext";
import { useContext } from "react";
import UseFindRoll from "../../Hooks/Axios/UseFindRoll";
import { Navigate, useLocation } from "react-router-dom";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [roll, isLoading] = UseFindRoll();

  const location = useLocation();

  if (isLoading || loading) {
    return (
      <div className="flex justify-center h-full my-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const isSeller = roll?.isSeller;
  if (isSeller && user) return children;

  return <Navigate to={"/"} state={{ form: location }} replace></Navigate>;
};

SellerRoute.propTypes = {
  children: PropTypes.node,
};

export default SellerRoute;
