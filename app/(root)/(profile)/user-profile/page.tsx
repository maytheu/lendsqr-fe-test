"use client";
import UserInfor from "@/components/UserInfor";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { mockUser } from "@/constants";
import { profile } from "@/lib/actions";
import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState<Profile>();
  const [profession, setProfession] = useState<Education>();
  const [guarantor, setGuarantor] = useState<Guarantors>();
  const [socials, setSocials] = useState<Socials>();

  const getProfile = async () => {
    try {
      const data = await profile();
      if (data) {
        setUser(data.user);
        setProfession(data.profession);
        setGuarantor(data.guarantor);
        setSocials(data.socials);
        console.log(data,);
        
      } else {
        console.error("No data returned from profile function");
      }
    } catch (error) {
      console.error("Error in getProfile function:", error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      {user && profession && guarantor && socials ? (
        <>
          <section className="w-full">
            <CardHeader className="font-semibold text-primary-400">
              Personal Information
            </CardHeader>
            <CardContent>
              <UserInfor data={user} />
            </CardContent>
            <div className="mx-6 h-0.5 bg-gray-200"></div>
          </section>

          <section className="w-full">
            <CardHeader className="font-semibold text-primary-400">
              Education and Employment
            </CardHeader>
            <CardContent>
              <UserInfor data={profession} />
            </CardContent>
            <div className="mx-6 h-0.5 bg-gray-200"></div>
          </section>

          <section className="w-full">
            <CardHeader className="font-semibold text-primary-400">
              Socials
            </CardHeader>
            <CardContent>
              <UserInfor data={socials} />
            </CardContent>
            <div className="mx-6 h-0.5 bg-gray-200"></div>
          </section>

          <section className="w-full">
            <CardHeader className="font-semibold text-primary-400">
              Guarantor
            </CardHeader>
            <CardContent>
              <UserInfor data={guarantor} />
            </CardContent>
            <div className="mx-6 h-0.5 bg-gray-200"></div>
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default UserProfile;
