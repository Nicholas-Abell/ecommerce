import { UserButton } from "@clerk/nextjs";
import React from "react";
import Routes from "./Routes";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="border-b">
      <div className="flex items-center px-4 h-16">Store Switcher</div>
      <Routes />
      <div className="ml-auto flex items-center space-x-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
export default Navbar;
