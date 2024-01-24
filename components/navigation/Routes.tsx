"use client";
import React from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type RoutesProps = {};

const Routes: React.FC<RoutesProps> = () => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <div className="flex items-center space-x-4 lg:space-x-">
      {routes.map((route, index) => (
        <Link
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
          key={index}
          href={route.href}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};
export default Routes;
