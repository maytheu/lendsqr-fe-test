"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  businessSideLinks,
  customerSideLinks,
  settingsSideLinks,
} from "@/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Menu = () => {
  const pathName = usePathname();
  let isActive = pathName === "/";

  return (
    <>
      <div className="flex gp-3 items-center justify-center xl:justify-start pl-4 py-3 mb-2">
        <Image
          src={"/icons/org.svg"}
          alt={"dashboard"}
          width={20}
          height={20}
        />
        <Select>
          <SelectTrigger className="w-[180px] text-primary-400 border-none">
            <SelectValue placeholder="Switch Oranization" />
          </SelectTrigger>
          <SelectContent className="bg-white">
              <SelectItem value="organization 1">Organization 1</SelectItem>
              <SelectItem value="organization 2">Organization 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Link
        href="/"
        className={cn(
          "flex gap-3 items-center justify-center xl:justify-start pl-4 py-3 mb-2",
          {
            "text-primary-400 bg-primary-300/10 border-l-8 border-primary-300":
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
      {/* customer menu */}
      <p className="text-primary-400 pl-6 uppercase font-medium">customers</p>
      {customerSideLinks.map((link) => {
        isActive = pathName.includes(link.route) && link.route !== "/";
        return (
          <Link
            key={link.label}
            href={link.route}
            className={cn(
              "flex gap-3 items-center justify-center xl:justify-start pl-4 py-3 mb-2",
              {
                "text-primary-400 bg-primary-300/10 border-l-8 border-primary-300":
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
        );
      })}
      {/* business menu */}
      <p className="text-primary-400 pl-6 uppercase font-medium">businesses</p>
      {businessSideLinks.map((link) => {
        isActive = pathName.includes(link.route) && link.route !== "/";
        return (
          <Link
            key={link.label}
            href={link.route}
            className={cn(
              "flex gap-3 items-center justify-center xl:justify-start pl-4 py-3 mb-2",
              {
                "text-primary-400 bg-primary-300/10 border-l-8 border-primary-300":
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
        );
      })}
      <p className="text-primary-400 pl-6 uppercase font-medium">settings</p>
      {settingsSideLinks.map((link) => {
        isActive = pathName.includes(link.route) && link.route !== "/";
        return (
          <Link
            key={link.label}
            href={link.route}
            className={cn(
              "flex gap-3 items-center justify-center xl:justify-start pl-4 py-3 mb-2",
              {
                "text-primary-400 bg-primary-300/10 border-l-8 border-primary-300":
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
        );
      })}
    </>
  );
};

export default Menu;
