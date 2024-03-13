import React from "react";
import { format } from "date-fns";

import Client from "./_components/Client";
import prisma from "@/lib/prisma/prisma";
import { BillboardColumn } from "./_components/Columns";

type BillboardsPageProps = {
  params: { storeId: string };
};

const SizesPage: React.FC<BillboardsPageProps> = async ({ params }) => {
  const sizes = await prisma.size.findMany({
    where: { storeId: params.storeId },
    orderBy: { createdAt: "desc" },
  });

  const formattedSizes: BillboardColumn[] = sizes.map((item) => ({
    id: item.id,
    label: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 py-6">
        <Client data={formattedSizes} />
      </div>
    </div>
  );
};
export default SizesPage;
