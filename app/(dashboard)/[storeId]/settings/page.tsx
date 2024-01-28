import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

import prisma from "@/lib/prisma/prisma";

type pageProps = {
  params: {
    storeId: string;
  };
};

const page: React.FC<pageProps> = async ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prisma.store.findFirst({
    where: { id: params.storeId, userId },
  });

  if (!store) {
    redirect("/");
  }

  return <div>Settings</div>;
};
export default page;
