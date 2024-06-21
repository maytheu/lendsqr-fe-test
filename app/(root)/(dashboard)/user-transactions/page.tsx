"use client";
import FilterFormInput from "@/components/FilterFormInput";
import {
  ColumnHeader,
  FormatStatusData,
  TableAction,
  TableComp,
} from "@/components/TableComp";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { mockOrgData, mockStatusData } from "@/constants";
import { cn, filterFormSchema, tableData } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ColumnDef } from "@tanstack/react-table";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const UserTransaction = () => {
  const [filterForm, setFileterForm] = useState(true);

  const filterFormValues = useForm<z.infer<typeof filterFormSchema>>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      date: "",
      email: "",
      organization: "",
      phone: "",
      status: "",
      username: "",
    },
  });

  const onFilter = (values: z.infer<typeof filterFormSchema>) => {
    console.log(values);
  };

  const columnDef: ColumnDef<TableData>[] = [
    {
      accessorKey: "organization",
      header: () => <ColumnHeader title="organization" />,
    },
    {
      accessorKey: "username",
      header: () => <ColumnHeader title="username" />,
    },
    {
      accessorKey: "email",
      header: () => <ColumnHeader title="email" />,
    },
    {
      accessorKey: "phone",
      header: () => <ColumnHeader title="phone number" />,
    },
    { accessorKey: "date", header: () => <ColumnHeader title="Date joined" /> },
    {
      accessorKey: "status",
      header: () => <ColumnHeader title="status" />,
      cell: ({ row }) => <FormatStatusData status={row.getValue("status")} />,
    },
    {
      id: "actions",
      cell: ({ row }) => <TableAction email={row.original.email} />,
    },
  ];

  const columnDefFilter: ColumnDef<TableData>[] = [
    {
      accessorKey: "email",
      header: () => <ColumnHeader title="email" />,
    },
    {
      accessorKey: "phone",
      header: () => <ColumnHeader title="phone number" />,
    },
    { accessorKey: "date", header: () => <ColumnHeader title="Date joined" /> },
    {
      accessorKey: "status",
      header: () => <ColumnHeader title="status" />,
      cell: ({ row }) => <FormatStatusData status={row.getValue("status")} />,
    },
    {
      id: "actions",
      cell: ({ row }) => <TableAction email={row.original.email} />,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-end pr-16">
        <Button
          variant={"outline"}
          onClick={() => setFileterForm((form) => !form)}
        >
          {filterForm ? "Hide Filter" : "Show Filter"}
        </Button>
      </div>
      <div className="flex">
        <div
          className={cn("w-[280px] flex flex-col shadow-lg", {
            hidden: !filterForm,
          })}
        >
          <div className="flex gap-5 pl-5 pt-4">
            <ColumnHeader title="Organization" />
            <ColumnHeader title="username" />
          </div>
          <Form {...filterFormValues}>
            <form
              onSubmit={filterFormValues.handleSubmit(onFilter)}
              className="flex flex-col px-5 pt-8"
            >
              <FilterFormInput
                placeholder="Select"
                control={filterFormValues.control}
                label="Organization"
                name="organization"
                type="select"
                select={mockOrgData}
              />

              <FilterFormInput
                control={filterFormValues.control}
                label="username"
                name="username"
                placeholder="User"
              />

              <FilterFormInput
                control={filterFormValues.control}
                label="email"
                name="email"
                placeholder="Email"
              />

              <FilterFormInput
                control={filterFormValues.control}
                label="date"
                name="date"
                placeholder="Date"
                type="date"
              />

              <FilterFormInput
                control={filterFormValues.control}
                label="phone number"
                name="phone"
                placeholder="Phone Number"
              />

              <FilterFormInput
                placeholder="Select"
                control={filterFormValues.control}
                label="status"
                name="status"
                type="select"
                select={mockStatusData}
              />

              <div className="flex gap-5 w-full">
                <Button
                  type="button"
                  variant={"outline"}
                  className="text-primary-400 px-6"
                >
                  Reset
                </Button>
                <Button type="submit" className="form-btn px-6">
                  Filter
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <TableComp
          columns={filterForm ? columnDefFilter : columnDef}
          data={tableData}
        />
      </div>
    </div>
  );
};

export default UserTransaction;
