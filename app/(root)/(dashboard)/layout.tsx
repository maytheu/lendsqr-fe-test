import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userCards = [
    {
      img: "/icons/user_outline.svg",
      title: "users",
      value: "2,453",
      bg: "bg-primary-400/5",
    },
    {
      img: "/icons/group_outline.svg",
      title: "active users",
      value: "2,453",
      bg: "bg-primary-500/5",
    },
    {
      img: "/icons/loan_outline.svg",
      title: "users with loans",
      value: "2,453",
      bg: "bg-primary-600/5",
    },
    {
      img: "/icons/savings_outline.svg",
      title: "users with savings",
      value: "2,453",
      bg: "bg-primary-700/5",
    },
  ];
  return (
    <main className="flex flex-col w-full h-full bg-gray-50 px-8">
      <section className="flex flex-col justify-start pt-12 mb-12">
        <h1 className="text-2xl font-semibold mb-8">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {userCards.map((card) => {
            return (
              <div className="flex justify-center" key={card.title}>
                <Card className="pt-7 w-[300px] border-none shadow-lg bg-white">
                  <CardHeader>
                    <div className="relative flex">
                      <div
                        className={`${card.bg} flex-center absolute -top-8 size-12 rounded-full  p-2`}
                      >
                        <Image
                          src={card.img}
                          width={28}
                          height={28}
                          alt={card.title}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-1 pb-4">
                    <p className="uppercase pb-2 ">{card.title}</p>
                    <p className="font-bold text-16">{card.value}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col size-full bg-white py-5">
        {children}
      </section>
    </main>
  );
}
