import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const MainPageRoot = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainPageRoot;
