import Headroom from "react-headroom";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Auth Provider/AuthContext";
import { useContext } from "react";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/");
    });
  };
  const Links = (
    <>
      <li className="text-[#929292]">
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Pages</NavLink>
      </li>
      <li>
        <NavLink>
          Cart{" "}
          <span className="text-[#929292] inline-flex items-center">
            (<FaDollarSign className="text-xs" />
            <span>0</span>)
          </span>
        </NavLink>
      </li>
      <li>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="rounded-full">
            <img
              className="w-[50px] h-[50px]"
              src="https://i.ibb.co.com/yBr5F0C/profile-picture-portrait.png"
              alt=""
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              {user ? (
                <>
                  <a onClick={handleLogOut}>Log Out</a>
                </>
              ) : (
                <>
                  <Link to={"/login-page"}>Login</Link>
                </>
              )}
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
  const mobileLinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        {user ? (
          <>
            <a onClick={handleLogOut}>Log Out</a>
          </>
        ) : (
          <>
            <Link to={"/login-page"}>Login</Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div className="z-50">
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Headroom>
        <div className="navbar bg-white w-full">
          <div className="lg:navbar-start mt-[30px]">
            <div className="drawer lg:hidden">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center">
                <label
                  htmlFor="my-drawer-2"
                  className="drawer-button lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className=" bg-white text-base-content min-h-full w-80 p-4">
                  {mobileLinks}
                </ul>
              </div>
            </div>
            <Link to={"/"} className="text-2xl font-bold ml-6">
              <span className="mr-2">P I X E L </span>
              <span>P E R F E C T</span>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu-horizontal mr-6 gap-12 font-semibold items-center">
              {Links}
            </ul>
          </div>
        </div>
      </Headroom>
    </div>
  );
};

export default NavBar;
