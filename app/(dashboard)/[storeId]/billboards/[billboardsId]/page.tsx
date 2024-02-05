import React from "react";
import prisma from "@/lib/prisma/prisma";

type pageProps = {
  params: { billboardId: string };
};

const page: React.FC<pageProps> = async ({ params }) => {
  // const billboard = await prisma.billboard.findUnique({
  //   where: { id: params.billboardId },
  // });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6"></div>
    </div>
  );
};
export default page;
