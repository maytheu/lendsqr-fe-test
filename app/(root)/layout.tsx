"use client";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { profile } from "@/lib/actions";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<string>("");

  const getProfile = async () => {
    try {
      const data = await profile();
      if (data) {
        setUser(data.user.name);
      } else {
        console.error("No data returned from profile function");
      }
    } catch (error) {
      console.error("Error in getProfile function:", error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <main className="h-screen w-full flex">
      <SideNav />
      <div className="flex flex-col size-full">
        <Header user={user} />
        <ScrollArea className="">{children}</ScrollArea>
      </div>
    </main>
  );
}
