import UserInfor from "@/components/UserInfor";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { mockUser } from "@/constants";
import React from "react";

const UserProfile = () => {
  return (
    <>
      <section className="w-full">
        <CardHeader className="font-semibold text-primary-400">
          Personal Information
        </CardHeader>
        <CardContent>
          <UserInfor data={mockUser.user} />
        </CardContent>
        <div className="mx-6 h-0.5 bg-gray-200"></div>
      </section>

      <section className="w-full">
        <CardHeader className="font-semibold text-primary-400">
          Education and Employment
        </CardHeader>
        <CardContent>
          <UserInfor data={mockUser.profession} />
        </CardContent>
        <div className="mx-6 h-0.5 bg-gray-200"></div>
      </section>

      <section className="w-full">
        <CardHeader className="font-semibold text-primary-400">
          Socials
        </CardHeader>
        <CardContent>
          <UserInfor data={mockUser.socials} />
        </CardContent>
        <div className="mx-6 h-0.5 bg-gray-200"></div>
      </section>

      
      <section className="w-full">
        <CardHeader className="font-semibold text-primary-400">
        Guarantor
        </CardHeader>
        <CardContent>
          <UserInfor data={mockUser.guarantor} />
        </CardContent>
        <div className="mx-6 h-0.5 bg-gray-200"></div>
      </section>
    </>
  );
};

export default UserProfile;
