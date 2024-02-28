import prisma from "@/lib/prisma/prisma";

import { CatagoryForm } from "./_components/CatagoryForm";

const CatagoryPage = async ({ params }: { params: { catagoryId: string } }) => {
  const catagory = await prisma.catagory.findUnique({
    where: {
      id: params.catagoryId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CatagoryForm initialData={catagory} />
      </div>
    </div>
  );
};

export default CatagoryPage;
