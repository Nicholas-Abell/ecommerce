import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

import prisma from "@/lib/prisma/prisma";
import SettingsForm from "@/components/forms/SettingsForm";

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

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-4">
        <SettingsForm storeData={store} />
      </div>
    </div>
  );
};
export default page;
