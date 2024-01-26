"use client";
import React, { useState } from "react";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Store } from "@prisma/client";
import { useStoreModal } from "@/hooks/useStoreModal";
import { useParams, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ChevronsUpDown, Store as StoreIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PopOverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherProps extends PopOverTriggerProps {
  items: Store[];
}

const StoreSwitcher: React.FC<StoreSwitcherProps> = ({
  items = [],
  className,
}) => {
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
    label: item.name,
    id: item.id,
  }));

  const currentStore = formattedItems.find(
    (item) => item.id === params.storeId
  );

  const [open, setOpen] = useState(false);

  const onStoreSelect = (store: { id: string; label: string }) => {
    setOpen(false);
    router.push(`/${store.id}`);
  };

  return (
    <PopoverContent>
      <PopoverTrigger>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a Store"
          className={cn("w-[200px] justify-between", className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          Current Store
          <ChevronsUpDown />
        </Button>
      </PopoverTrigger>
    </PopoverContent>
  );
};
export default StoreSwitcher;
