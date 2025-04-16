import { ImProfile } from "react-icons/im";
import { TbShoppingBagPlus } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <div className="lg:hidden mt-[30px] flex items-center">
        <div className="drawer lg:hidden w-5">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className=" flex flex-col items-center justify-center">
            <label htmlFor="my-drawer-2" className="lg:hidden">
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
            <ul className="bg-white text-base-content min-h-full w-80 p-4 pl-10 pt-10"></ul>
          </div>
        </div>
        <Link to={"/"} className="text-2xl font-bold ml-6 lg:-mt-6">
          <span className="mr-2">P I X E L </span>
          <span>P E R F E C T</span>
        </Link>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="bg-[#F9F9F9] text-base-content min-h-full w-[234px] pt-4 space-y-3">
            <li className="flex justify-center mt-3">
              <Link to={"/"} className="text-xl font-bold">
                <span className="mr-2">P I X E L </span>
                <span>P E R F E C T</span>
              </Link>
            </li>
            <div>
              <h5 className="text-sm ml-3 mt-6">main menu</h5>
            </div>
            <li className="flex justify-center">
              <NavLink
                className={({ isActive }) =>
                  `flex item-center items-center gap-2 px-4 py-3 rounded-xl w-[200px] ${
                    isActive ? "bg-[#A0EDA8]" : "hover:bg-[#d4d4d4]"
                  }`
                }
                to={"/dashboard/user-profile"}
              >
                <ImProfile className="-mt-[2px] text-xl" />
                <span className="font-semibold">Profile</span>
              </NavLink>
            </li>
            <li className="flex justify-center">
              <NavLink
                className={({ isActive }) =>
                  `flex item-center items-center gap-2 px-4 py-3 rounded-xl w-[200px] ${
                    isActive ? "bg-[#A0EDA8]" : "hover:bg-[#d4d4d4]"
                  }`
                }
                to={"/dashboard/publish-product"}
              >
                <TbShoppingBagPlus className="-mt-[2px] -ml-1 text-2xl" />
                <span className="font-semibold">Upload Product</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
