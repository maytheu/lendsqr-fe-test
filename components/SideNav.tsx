import styles from "./component.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";
import Menu from "./Menu";

const SideNav = () => {
  return (
    <section className={styles.sidebar}>
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="mb-12 ml-6 cursor-pointer items-center gap-2 flex"
        >
          <Image src="/icons/logo.svg" width={150} height={32} alt="Logo" />
        </Link>
        <ScrollArea className={styles.sidebarHeight}>
          <Menu />
        </ScrollArea>
      </nav>
    </section>
  );
};

export default SideNav;
