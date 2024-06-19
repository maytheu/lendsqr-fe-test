import Header from "@/components/Header";
import SideNav from "@/components/SideNav";

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
        {children}
      </div>
    </main>
  );
}
