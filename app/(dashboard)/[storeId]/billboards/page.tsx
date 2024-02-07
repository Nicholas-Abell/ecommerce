import React from "react";
import Client from "./_components/Client";
import prisma from "@/lib/prisma/prisma";

type BillboardsPageProps = {
  params: { storeId: string };
};

const BillboardsPage: React.FC<BillboardsPageProps> = async ({ params }) => {
  const billboards = await prisma.billboard.findMany({
    where: { storeId: params.storeId },
    orderBy: { createdAt: "desc" },
  });
  console.log(billboards);
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 py-6">
        <Client data={billboards}/>
      </div>
    </div>
  );
};
export default BillboardsPage;
