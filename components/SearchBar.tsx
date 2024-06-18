"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const SearchBar = () => {
  const formSchema = z.object({
    search: z.string(),
  });

  const formValue = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSearch = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="hidden xl:flex pl-12 w-[500px]">
      <Form {...formValue}>
        <form onSubmit={formValue.handleSubmit(onSearch)} className="flex w-full">
          <FormField
            control={formValue.control}
            name="search"
            render={({ field }) => (
              <div className="form-Item !w-full">
                <div className="flex flex-col">
                  <FormControl>
                    <Input
                      placeholder={"Search for anything"}
                      className="rounded-s-lg rounded-e-none flex"
                      type={"text"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="form-message mt-2" />
                </div>
              </div>
            )}
          />
          <Button className="bg-primary-300 text-white rounded-e-lg rounded-s-none">
            <Image
              width={16}
              height={16}
              alt="search"
              src={"/icons/search.svg"}
            />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SearchBar;
