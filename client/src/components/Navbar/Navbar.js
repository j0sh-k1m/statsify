import React, { useState } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="h-20 pt-5 pl-40 pr-40 py-2 px-4 grid grid-cols-3 gap-4 place-items-center">
      <NavbarItem onTo="/top-artists" title="Top Artists"></NavbarItem>
      <NavbarItem onTo="/top-tracks" title="Top Tracks"></NavbarItem>
      <NavbarItem onTo="/explore" title="Explore"></NavbarItem>
    </div>
  );
};

export default Navbar;
