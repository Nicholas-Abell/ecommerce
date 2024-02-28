import React from "react";
import { format } from "date-fns";

import CatagoryClient from "./_components/CatagoryClient";
import prisma from "@/lib/prisma/prisma";
import { CatagoryColumn } from "./_components/Columns";

type CatagoriesPageProps = {
  params: { storeId: string };
};

const CatagoriesPage: React.FC<CatagoriesPageProps> = async ({ params }) => {
  const catagories = await prisma.catagory.findMany({
    where: { storeId: params.storeId },
    include: {
      billboard: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const formattedCatagories: CatagoryColumn[] = catagories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 py-6">
        <CatagoryClient data={formattedCatagories} />
      </div>
    </div>
  );
};
export default CatagoriesPage;
