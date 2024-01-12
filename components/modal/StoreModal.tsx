"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";

import Modal from "./Modal";
import { useStoreModal } from "@/hooks/useStoreModal";
import { StoreSchema } from "@/lib/validations/Store";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";

type StoreModalProps = {};

const StoreModal: React.FC<StoreModalProps> = () => {
  const StoreModal = useStoreModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof StoreSchema>>({
    resolver: zodResolver(StoreSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof StoreSchema>) => {
    //create store
    try {
      setLoading(true);
      const response = await axios.post("/api/stores", values);
      toast.success("store created");
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage catagories"
      isOpen={StoreModal.isOpen}
      onClose={StoreModal.onClose}
    >
      <div className="">
        <div className="space-y-2 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="E-Commerce"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant="outline"
                  onClick={StoreModal.onClose}
                >
                  Cancel
                </Button>
                <Button type="submit">Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
export default StoreModal;
