import React from "react";

type pageProps = {
  params: { storeId: string };
};

const page: React.FC<pageProps> = async ({ params }) => {
  const store = await prisma.store.findFirst({
    where: { id: params.storeId },
  });

  return (
    <div>
      <h1>Active store: {store?.name}</h1>
    </div>
  );
};
export default page;
