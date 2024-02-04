import React from "react";
import Client from "./_components/Client";

type BillboardsPageProps = {};

const BillboardsPage: React.FC<BillboardsPageProps> = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 py-6">
        <Client />
      </div>
    </div>
  );
};
export default BillboardsPage;
