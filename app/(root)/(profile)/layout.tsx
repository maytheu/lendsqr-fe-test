import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import UserDetails from "@/components/UserDetails";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockUser } from "@/constants";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="size-full flex flex-col bg-gray-50">
      <div className="px-8 pt-5 flex flex-col">
        <UserDetails account={mockUser.account} user={mockUser.user} />
        <main className="flex flex-col size-full bg-white py-5">
          <Card className="shadow-lg bg-white border-none">{children}</Card>
        </main>
      </div>
    </main>
  );
}
