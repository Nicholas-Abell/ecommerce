import prisma from "@/lib/prisma/prisma";

import { BillboardForm } from "./_components/BillboardForm";

const SizesPage = async ({ params }: { params: { billboardId: string } }) => {
  const billboard = await prisma.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default SizesPage;
