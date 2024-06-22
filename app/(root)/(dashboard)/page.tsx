"use client";
import { ColumnDef } from "@tanstack/react-table";
import { tableData } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import {
  ColumnHeader,
  FormatStatusData,
  TableAction,
  TableComp,
} from "@/components/TableComp";
import { fetchUsers } from "@/lib/actions";

const Dashboard = () => {
  const [users, setUsers] = useState<TableData[]>([]);

  const getUsers = async () => {
    try {      
      const data = await fetchUsers();      
      if (data?.length) setUsers(data);
    } catch (error) {
      console.error("Error fetching data");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);


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

  return <TableComp columns={columnDef} data={users} />;
};

export default Dashboard;
