"use client";

import React from "react";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { CatagoryColumn, columns } from "./Columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

type ClientProps = {
  data: CatagoryColumn[];
};

const CatagoryClient: React.FC<ClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Catagories (${data.length})`}
          description="Manage catagories for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/catagories/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for Catagories" />
      <Separator />
      <ApiList entityName="catagories" entityIdName="catagoriesId" />
    </>
  );
};
export default CatagoryClient;
