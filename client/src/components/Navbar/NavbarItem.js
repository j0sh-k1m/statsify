import React from "react";
import { NavLink } from "react-router-dom";

// Need to style these as items in the navbar
// Maybe add an Icon for each NavbarItem
const NavbarItem = (props) => {
  return (
    <div>
      {/* Add Icon here */}
      <NavLink to={props.onTo}>
        <button className="bg-fuchsia-400 hover:scale-105 hover:bg-fuchsia-500 duration-300 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out delay 150">
          {props.title}
        </button>
      </NavLink>
    </div>
  );
};

export default NavbarItem;
