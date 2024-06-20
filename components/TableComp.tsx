"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { Fragment, useState } from "react";
import { Button } from "./ui/button";
import {
  Eye,
  ListFilter,
  MoreVertical,
  UserRoundCheck,
  UserX,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filter?: TData;
}

/**
 * Data tablel component
 * @param {columnDef, data}
 * @returns Table component
 */
export const TableComp = ({
  columns,
  data,
  filter = {},
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // pagination
    getPaginationRowModel: getPaginationRowModel(),
    // sorting
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    // filtering
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });
  // table.getColumn("email")?.setFilterValue(event.target.value)
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
};

/**
 * Render column title
 * @param title - string
 * @returns formatted title
 */
export const ColumnHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold uppercase text-12 text-primary-400">
        {title}
      </span>
      <ListFilter size={16} />
    </div>
  );
};

/**
 * Assign class to status based on value
 * @param status - string
 * @returns
 */
export const FormatStatusData = ({ status }: { status: string }) => {
  return (
    <div
      className={cn("flex items-center justify-center py-1.5", {
        "bg-primary-400/5 text-primary-400 rounded-2xl": status === "Inactive",
        "bg-green-500/5 text-green-500 rounded-2xl": status === "Active",
        "bg-red-500/5 text-red-500 rounded-2xl": status === "Blacklisted",
        "bg-orange-500/5 text-orange-500 rounded-2xl": status === "Pending",
      })}
    >
      {status}
    </div>
  );
};

export const TableAction = ({ email }: { email: string }) => {
  const onViewUser = (email: string) => {
    console.log(`view ${email} details`);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border-none px-3">
        <DropdownMenuItem
          className="flex gap-5"
          onClick={() => onViewUser(email)}
        >
          <Eye />
          <span>View Details</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-5">
          <UserX />
          <span>Blacklist User</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-5">
          <UserRoundCheck />
          <span>Activate User</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DataTablePagination = ({ table }: DataTablePaginationProps<TData>) => {
  const firstPages = [0, 1, 2,];
  const lastPages = [table.getPageCount() - 2, table.getPageCount() - 1];
  const pagesToShow = Array.from(new Set([...firstPages, ...lastPages])).filter(
    (page) => page >= 0 && page < table.getPageCount()
  );
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center">
        Showing{" "}
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        out of {table.getFilteredRowModel().rows.length}
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <div className="flex">
        {pagesToShow.map((page, i) => (
          <Fragment key={i}>
            {i > 0 && pagesToShow[i - 1] !== page - 1 && (
              <span className="ellipsis">...</span>
            )}
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => console.log(`Go to page ${i + 1}`)}
            >
              <span className="">{i + 1}</span>
            </Button>
          </Fragment>
        ))}</div>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

