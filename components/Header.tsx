import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AvatarImage, Avatar } from "./ui/avatar";
import MobileNav from "./MobileNav";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-white h-20 flex items-center justify-between">
      <div className="flex gap-3">
        <Link href="/" className="cursor-pointer ml-4 xl:hidden">
          <Image width={100} height={45} alt="logo" src="/icons/logo.svg" />
        </Link>
        <SearchBar />
      </div>

      <div className="flex gap-3 items-center pr-4">
        <p className="underline font-normal px-1">Docs</p>
        <Image
          width={20}
          height={20}
          alt="notification"
          src="/icons/notify.png"
        />

        <Avatar>
          <AvatarImage src="/icons/profile.svg" />
        </Avatar>

        <p className="hidden xl:block font-normal">Adedeji</p>

        <Image
          width={20}
          height={20}
          alt="notification"
          src="/icons/profile_down.svg"
          className="-ml-4 xl:-ml-3"
        />

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
