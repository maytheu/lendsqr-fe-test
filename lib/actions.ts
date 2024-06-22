"use server";

import { dupTableData } from "@/lib/utils";

export const profile = async () => {
  try {
    const url = "https://run.mocky.io/v3/0c807d99-2733-4a53-84e2-cbb00f8d8a93";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Failed to fetch profile:", error.message);
  }
};

export const fetchUsers = async () => {
  try {
    const url = "https://run.mocky.io/v3/79047ada-081c-47ed-aaa4-f3e72581f047";
    const response = await fetch(url);
    const results = await response.json();    
    return dupTableData(results, 500);
  } catch (error) {
    console.log(error);
  }
};
