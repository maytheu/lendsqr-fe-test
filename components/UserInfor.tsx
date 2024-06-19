import { cn } from "@/lib/utils";
import React from "react";

const UserInfor = ({ data }: UserInfoProps) => {
  return (
    <div className="text-primary-400">
      {data.type === "education" ? (
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">level of education</h2>
            <p className="font-semibold">{data.level}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">employment status</h2>
            <p className="font-semibold">{data.employmentStatus}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">sector of employment</h2>
            <p className="font-semibold">{data.sector}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">Duration of employment</h2>
            <p className="font-semibold">{data.employmentDuration}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">office email</h2>
            <p className="font-semibold">{data.officialEmail}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">Monthly income</h2>
            <p className="font-semibold">{`N${
              data.incomeRange.split("-")[0]
            } - N${data.incomeRange.split("-")[1].trimStart()}`}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">loan repayment</h2>
            <p className="font-semibold">{data.loanRepay}</p>
          </div>
        </div>
      ) : data.type === "profile" ? (
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">full name</h2>
            <p className="font-semibold">{data.name}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">Phone Number</h2>
            <p className="font-semibold">{data.phone}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">Email Address</h2>
            <p className="font-semibold">{data.email}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">Bvn</h2>
            <p className="font-semibold">{data.bvn}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">Gender</h2>
            <p className="font-semibold capitalize">{data.gender}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">Marital status</h2>
            <p className="font-semibold">
              {data.isMarried === true ? "Married" : "Single"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">Children</h2>
            <p className="font-semibold">
              {data.children > 0 ? data.children : "None"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-14">Type of residence</h2>
            <p className="font-semibold">{data.residence}</p>
          </div>
        </div>
      ) : data.type === "social" ? (
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {data.data.map((handle) => {
            return (
              <div className="flex flex-col gap-2" key={handle.name}>
                <h2 className="uppercase text-14">{handle.name}</h2>
                <p className="font-semibold">{handle.id}</p>
              </div>
            );
          })}
        </div>
      ) : (
        data.data.map((user, i) => {
          return (
            <div key={i} className="flex flex-col">
              <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-5">
                <div className="flex flex-col gap-2">
                  <h2 className="uppercase text-14">full name</h2>
                  <p className="font-semibold">{user.name}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="uppercase text-14">Phone Number</h2>
                  <p className="font-semibold">{user.phone}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="uppercase text-14">Email Address</h2>
                  <p className="font-semibold">{user.email}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="uppercase text-14">Relationship</h2>
                  <p className="font-semibold">{user.relationship}</p>
                </div>
              </div>
              <div
                className={cn("mx-0 my-6 h-0.5 bg-gray-200", {
                  hidden: data.data.length - 1 === i,
                })}
              ></div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UserInfor;
