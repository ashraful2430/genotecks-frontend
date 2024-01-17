import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " bg-none text-red-500 font-bold"
                : "hover:text-red-400 transition duration-300 delay-100"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " bg-none text-red-500 font-bold"
                : "hover:text-red-400 transition duration-300 delay-100"
            }
            to={"/about-us"}
          >
            About Us
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " bg-none text-red-500 font-bold"
                : "hover:text-red-400 transition duration-300 delay-100"
            }
            to={"/contact-us"}
          >
            Contact Us
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " bg-none text-red-500 font-bold"
                : "hover:text-red-400 transition duration-300 delay-100"
            }
            to={"/customer-reviews"}
          >
            Customer Reviews
          </NavLink>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className=" bg-base-100 shadow-lg">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
