"use client";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Menu from "./Menu";
import {
  businessSideLinks,
  customerSideLinks,
  settingsSideLinks,
} from "@/constants";

const MobileNav = () => {
  const pathName = usePathname();
  let isActive = pathName === "/";

  return (
    <section className="xl:hidden w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger className="!pl-0">
          <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" />
        </SheetTrigger>
        <SheetContent side="right" className="bg-white border-none px-0">
          <ScrollArea className="h-screen">
            <SheetClose asChild>
              <nav className="flex flex-col h-full w-full py-4">
                {/* dropdown */}
                <SheetClose asChild>
                  <>
                    <Link
                      href="/"
                      className={cn(
                        "flex gap-6  justify-start pl-4 py-3 mb-2",
                        {
                          "text-primary-400 bg-primary-300/10 border-r-8 border-primary-300":
                            isActive,
                        }
                      )}
                    >
                      <div className="relative size-6">
                        <Image src={"/icons/home.svg"} alt={"dashboard"} fill />
                      </div>
                      <p
                        className={cn("text-primary-400", {
                          "font-semibold": isActive,
                        })}
                      >
                        Dashboard
                      </p>
                    </Link>

                    <p className="text-primary-400 pl-4 uppercase font-medium">
                      customers
                    </p>
                    {customerSideLinks.map((link) => {
                      isActive =
                        pathName.includes(link.route) && link.route !== "/";
                      return (
                        <SheetClose asChild key={link.label}>
                          <Link
                            key={link.label}
                            href={link.route}
                            className={cn(
                              "flex gap-6  justify-start pl-4 py-3 mb-2",
                              {
                                "text-primary-400 bg-primary-300/10 border-r-8 border-primary-300":
                                  isActive,
                              }
                            )}
                          >
                            <div className="relative size-6">
                              <Image src={link.imgURL} alt={"dashboard"} fill />
                            </div>
                            <p
                              className={cn("text-primary-400 capitalize", {
                                "font-semibold": isActive,
                              })}
                            >
                              {link.label}
                            </p>
                          </Link>
                        </SheetClose>
                      );
                    })}

                    <p className="text-primary-400 pl-4 uppercase font-medium">
                      businesses
                    </p>
                    {businessSideLinks.map((link) => {
                      isActive =
                        pathName.includes(link.route) && link.route !== "/";
                      return (
                        <SheetClose asChild key={link.label}>
                          <Link
                            key={link.label}
                            href={link.route}
                            className={cn(
                              "flex gap-6  justify-start pl-4 py-3 mb-2",
                              {
                                "text-primary-400 bg-primary-300/10 border-r-8 border-primary-300":
                                  isActive,
                              }
                            )}
                          >
                            <div className="relative size-6">
                              <Image src={link.imgURL} alt={"dashboard"} fill />
                            </div>
                            <p
                              className={cn("text-primary-400 capitalize", {
                                "font-semibold": isActive,
                              })}
                            >
                              {link.label}
                            </p>
                          </Link>
                        </SheetClose>
                      );
                    })}

                    <p className="text-primary-400 pl-4 uppercase font-medium">
                      settings
                    </p>
                    {settingsSideLinks.map((link) => {
                      isActive =
                        pathName.includes(link.route) && link.route !== "/";
                      return (
                        <SheetClose asChild key={link.label}>
                          <Link
                            key={link.label}
                            href={link.route}
                            className={cn(
                              "flex gap-6  justify-start pl-4 py-3 mb-2",
                              {
                                "text-primary-400 bg-primary-300/10 border-r-8 border-primary-300":
                                  isActive,
                              }
                            )}
                          >
                            <div className="relative size-6">
                              <Image src={link.imgURL} alt={"dashboard"} fill />
                            </div>
                            <p
                              className={cn("text-primary-400 capitalize", {
                                "font-semibold": isActive,
                              })}
                            >
                              {link.label}
                            </p>
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </>
                </SheetClose>
              </nav>
            </SheetClose>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
