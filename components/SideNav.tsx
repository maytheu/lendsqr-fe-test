"use client";
import { usePathname } from "next/navigation";
import styles from "./component.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  businessSideLinks,
  customerSideLinks,
  settingsSideLinks,
} from "@/constants";

const SideNav = () => {
  const pathName = usePathname();
  let isActive = pathName === "/";

  return (
    <section className={styles.sidebar}>
      <nav className="flex flex-col gap-4 overflow-y-auto">
        <Link
          href="/"
          className="mb-12 ml-6 cursor-pointer items-center gap-2 flex"
        >
          <Image src="/icons/logo.svg" width={150} height={32} alt="Logo" />
        </Link>
        <div className="flex flex-col gap-4 overflow-y-auto">
          {/* dropdown */}
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
          <p className="text-primary-400 pl-6 uppercase font-medium">
            customers
          </p>
          {customerSideLinks.map((link) => {
            isActive = pathName.includes(link.route) && pathName !== "/";
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
          <p className="text-primary-400 pl-6 uppercase font-medium">
            businesses
          </p>
          {businessSideLinks.map((link) => {
            isActive = pathName.includes(link.route) && pathName !== "/";
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

          <p className="text-primary-400 pl-6 uppercase font-medium">
            settings
          </p>
          {settingsSideLinks.map((link) => {
            isActive = pathName.includes(link.route) && pathName !== "/";
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
        </div>
      </nav>
    </section>
  );
};

export default SideNav;
