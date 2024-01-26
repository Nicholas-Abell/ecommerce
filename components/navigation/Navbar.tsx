import { UserButton, auth } from "@clerk/nextjs";
import React from "react";
import Routes from "./Routes";
import StoreSwitcher from "./StoreSwitcher";
import { redirect } from "next/navigation";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prisma.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex items-center px-4 h-16 gap-4">
        <StoreSwitcher items={stores} />
        <Routes />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
