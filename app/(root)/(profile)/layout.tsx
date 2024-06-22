"use client";
import UserDetails from "@/components/UserDetails";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockUser } from "@/constants";
import { profile } from "@/lib/actions";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<Profile>();
  const [account, setAccount] = useState<Account>();

  const getProfile = async () => {
    try {
      const data = await profile();
      if (data) {
        setUser(data.user);
        setAccount(data.account);
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

  if (!user || !account) {
    return <div>Loading...</div>; //
  }

  return (
    <main className="size-full flex flex-col bg-gray-50">
      <div className="px-8 pt-5 flex flex-col">
        <UserDetails account={account} user={user} />
        <main className="flex flex-col size-full bg-white py-5">
          <Card className="shadow-lg bg-white border-none">{children}</Card>
        </main>
      </div>
    </main>
  );
}
