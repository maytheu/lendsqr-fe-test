import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-full flex">
      <SideNav />
      <div className="flex flex-col size-full">
        <Header />
        <ScrollArea className="">{children}</ScrollArea>
      </div>
    </main>
  );
}
