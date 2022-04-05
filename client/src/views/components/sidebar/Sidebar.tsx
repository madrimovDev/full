import React from "react";
import { NavLink } from "react-router-dom";
import { BsPlus, BsList } from "react-icons/bs";

export const Sidebar = () => {
  return (
    <div className="h-screen max-w-max bg-base-200 flex flex-col items-center p-5">
      <span className="btn btn-ghost font-bold btn-lg">SHOP ADMIN</span>
      <ul className="menu gap-2 rounded-box p-4">
        <li>
          <NavLink
            to="/"
            className="flex justify-between items-center  py-2 px-4"
          >
            <BsPlus /> Add Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list"
            className="flex justify-between items-center  py-2 px-4"
          >
            <BsList /> Product List
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
