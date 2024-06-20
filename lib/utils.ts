import { tableLink } from "@/constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * login schema form definition
 */
export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password cannot be less than 8 characters" }),
});

/**
 * Duplicate initial table array
 * @param arr - TableData[]
 * @param dataLength - number new array length
 * @returns 
 */
const dupTableData = (arr: TableData[], dataLength: number) => {
  let duplicatedArray: TableData[] = [];
  while (duplicatedArray.length < dataLength) {
    duplicatedArray = duplicatedArray.concat(arr);
  }
  return duplicatedArray.slice(0, dataLength);
};

export const tableData = dupTableData(tableLink, 200);
