"use client";

import React from "react";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";

import Heading from "../ui/heading";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

type SettingsFormProps = {
  storeData: Store;
};

const SettingsForm: React.FC<SettingsFormProps> = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage Store Preferences" />
        <Button variant="destructive" onClick={() => {}} size="icon">
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
    </>
  );
};
export default SettingsForm;
