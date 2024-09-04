import React from "react";
import { NavLink } from "react-router-dom";
import NavList from "./NavList.jsx";
import { BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";

const Nav = () => {
  return (
    <>
      <nav className="bg-base-200">
        <div className="navbar mx-auto max-w-6xl px-8">
          <div className="navbar-start">
            <NavLink to="/" className="hidden lg:flex btn btn-primary text-3xl">
              Logo
            </NavLink>

            {/* Mobile Device */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <FaBarsStaggered className="h-6 w-6" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
              >
                <NavList />
              </ul>
            </div>

            {/* PC Device */}
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal">
                <NavList />
              </ul>
            </div>
          </div>
          <div className="navbar-end">
            <NavLink
              to="/carts"
              className="btn button-ghost buttton-circle btn-md"
            >
              <div className="indicator">
                <BsCart3 className="text-3xl" />
                <span className="badge badge-xs badge-primary indicator-item">
                  8
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
