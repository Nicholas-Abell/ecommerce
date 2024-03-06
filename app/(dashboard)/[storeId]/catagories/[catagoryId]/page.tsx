import prisma from "@/lib/prisma/prisma";

import { CatagoryForm } from "./_components/CatagoryForm";

const CatagoryPage = async ({
  params,
}: {
  params: { catagoryId: string; storeId: string };
}) => {
  const catagory = await prisma.catagory.findUnique({
    where: {
      id: params.catagoryId,
    },
  });

  const billboards = await prisma.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CatagoryForm billboards={billboards} initialData={catagory} />
      </div>
    </div>
  );
};

export default CatagoryPage;
