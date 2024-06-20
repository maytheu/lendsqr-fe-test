"use client";
import { ColumnDef } from "@tanstack/react-table";
import { tableData } from "@/lib/utils";
import React from "react";
import {
  ColumnHeader,
  FormatStatusData,
  TableAction,
  TableComp,
} from "@/components/TableComp";

const Dashboard = () => {
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

  return <TableComp columns={columnDef} data={tableData} />;
};

export default Dashboard;
