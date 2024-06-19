import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import UserDetails from "@/components/UserDetails";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: Profile = {
    id: "LSQFf587g90",
    name: "Grace Effiom",
    email: "grace@gmail.com",
    tier: 1,
  };
  const account: Account = {
    accountNum: "9912345678",
    balance: 200000.0,
    bank: "Providus Bank",
  };
  return (
    <main className="size-full flex flex-col bg-gray-50">
      <div className="px-8 pt-5 flex flex-col">
        <UserDetails account={account} user={user} />
        {children}
      </div>
    </main>
  );
}
