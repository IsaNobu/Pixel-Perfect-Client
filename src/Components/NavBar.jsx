import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
const NavBar = () => {
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
        <Link>
          <img
            className="w-[50px] h-[50px]"
            src="https://i.ibb.co.com/yBr5F0C/profile-picture-portrait.png"
            alt=""
          />
        </Link>
      </li>
    </>
  );
  return (
    <div className="z-50">
      <Headroom>
        <div className="navbar bg-transparent">
          <div className="navbar-start mt-[30px]">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Rovaiza</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="text-2xl font-bold ml-6 lg:block hidden">
              <span className="mr-2">P I X E L </span>
              <span>P E R F E C T</span>
            </a>
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
