"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import AnimateCurrency from "./AnimateCurrency";
import TierRating from "./TierRating";
import { userDetailLink } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface UserData {
  user: Profile;
  account: Account;
}
const UserDetails = ({ user, account }: UserData) => {
  const pathName = usePathname();

  const onBlacklist = () => {
    console.log("blacklist user operation " + JSON.stringify(user));
  };

  const onActivate = () => {
    console.log("activate user operation " + JSON.stringify(user));
  };
  return (
    <section className="flex flex-col justify-start mb-5">
      <Link href={"/user-transactions"} className="flex gap-3 items-center">
        <Image
          width={15}
          height={10}
          src={"/icons/arrow_back.svg"}
          alt="arrow_back"
        />
        <span className="text-12">Back to Users</span>
      </Link>

      <div className="flex flex-col xl:flex-row justify-between py-5 items-center">
        <h1 className="font-normal text-18 mb-5 xl:mb-0">User Details</h1>
        <div className="flex gap-5">
          <Button
            className="uppercase text-red-500 border-red-500 border hover:text-white hover:bg-red-500"
            onClick={onBlacklist}
          >
            blacklist user
          </Button>
          <Button
            className="uppercase text-green-500 border-green-500 border hover:text-white hover:bg-green-500"
            onClick={onActivate}
          >
            activate user
          </Button>
        </div>
      </div>

      <Card className="shadow-lg">
        <CardContent className="flex flex-col xl:flex-row items-center gap-3 justify-start pt-8">
          <div className="flex my-8 items-center">
            <div className="relative flex">
              <div
                className={`bg-gray-300 flex-center absolute -top-8 size-16 rounded-full  p-2`}
              >
                <Image
                  src={"/icons/user.svg"}
                  width={32}
                  height={32}
                  alt="profile img"
                />
              </div>
            </div>
            <div className="flex flex-col ml-20 -mt-5 mr-20">
              <h1 className="font-semibold">{user.name}</h1>
              <span className="text-10">{user.id}</span>
            </div>

            <div className="hidden xl:flex flex-col px-10 -mt-5 py-4  border-r-2 border-l-2">
              <h1 className="font-medium">User's Tier</h1>
              <span className="text-10">
                <TierRating tier={user.tier} />
              </span>
            </div>

            <div className="hidden xl:flex flex-col ml-20 -mt-5 mr-20">
              <h1 className="font-semibold">
                <AnimateCurrency balance={account.balance} />
              </h1>
              <span className="text-10">
                {account.accountNum}/{account.bank}
              </span>
            </div>
          </div>
          <div className="flex items-center  mt-3 gap-4  xl:hidden">
            <div className="flex flex-col justify-start items-center pr-5 border-r-2">
              <h1 className="font-medium">User's Tier</h1>
              <span className="text-10">
                <TierRating tier={user.tier} />
              </span>
            </div>

            <div className="flex flex-col justify-start items-center">
              <h1 className="font-semibold">
                <AnimateCurrency balance={account.balance} />
              </h1>
              <span className="text-10">
                {account.accountNum}/{account.bank}
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="-mb-6 w-full">
          <div className="flex gap-2 w-full">
            {userDetailLink.map((link) => {
              const isActive = link.route === pathName;
              return (
                <Link
                  key={link.route}
                  href={link.route}
                  className={cn("px-3 xl:px-8 pb-3 capitalize", {
                    "text-primary-300 font-normal border-b-4 border-primary-300":
                      isActive,
                  })}
                >
                  <span className="hidden xl:block">{link.label}</span>
                  <span className="xl:hidden">
                    <Image
                      width={18}
                      height={18}
                      src={link.imgURL}
                      alt={link.label}
                      className="brightness-75"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default UserDetails;
