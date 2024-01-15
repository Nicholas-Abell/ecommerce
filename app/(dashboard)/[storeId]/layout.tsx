import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prisma from "@/lib/prisma/prisma";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function DasbooardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prisma.store.findFirst({
    where: { id: params.storeId },
  });

  if (!store) {
    redirect("/");
  }

  return <>{children}</>;
}
