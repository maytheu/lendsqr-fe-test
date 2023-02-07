import { Link } from "react-router-dom";
import { orgAcct, users, user, currency, handshake } from "../../assets";
import Typography from "../Typography";
import { ChevronDownIcon, HomeIcon } from "@heroicons/react/24/outline";

const SideNav = () => {
  const custormerLink = [
    { name: "users", icon: <img src={user} alt="" className="h-4 w-6" /> },
    {
      name: "guarantors",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
    {
      name: "loans",
      icon: <img src={currency} alt="" className="h-4 w-6" />,
    },
    {
      name: "decision models",
      icon: <img src={handshake} alt="" className="h-4 w-6" />,
    },
    {
      name: "savings",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
    {
      name: "loan requests",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
    {
      name: "whitelist",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
    {
      name: "karma",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
  ];

  const BusinessLink = [
    {
      name: "organization",
      icon: <img src={orgAcct} alt="" className="h-4 w-6" />,
    },
    {
      name: "loan product",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
    {
      name: "savings product",
      icon: <img src={currency} alt="" className="h-4 w-6" />,
    },
    {
      name: "fees and charges",
      icon: <img src={handshake} alt="" className="h-4 w-6" />,
    },
    {
      name: "transactions",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
    {
      name: "sevice account",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
    {
      name: "sevices",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
    {
      name: "settlements",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
    {
      name: "reports",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
  ];

  const settingsLink = [
    {
      name: "preferences",
      icon: <img src={user} alt="" className="h-4 w-6" />,
    },
    {
      name: "fees and pricing",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
    {
      name: "audit logs",
      icon: <img src={currency} alt="" className="h-4 w-6" />,
    },
  ];
  return (
    <div className=" flex pt-3 flex-col">
      <Link to="" className="flex gap-3 items-center pl-4">
        <img src={orgAcct} alt="" className="h-6 w-6" />
        <Typography
          {...{
            variant: "span",
            color: "link",
            fontVariant: "body",
            capitalize: true,
          }}
        >
          Switch organization
        </Typography>
        <ChevronDownIcon className="h-4 w-4 " />
      </Link>

      <Link to="" className="flex gap-3 items-center my-8 pl-4">
        <HomeIcon className="h-6 w-6" />
        <Typography
          {...{
            variant: "span",
            color: "link",
            fontVariant: "body",
            capitalize: true,
          }}
        >
          Switch organization
        </Typography>
      </Link>

      <Typography
        {...{
          variant: "p",
          fontVariant: "body",
          color: "link",
          uppercase: true,
          className: "pl-4",
        }}
      >
        custormers
      </Typography>

      {custormerLink.map((el, i) => {
        return (
          <Link
            to=""
            key={i}
            className={`py-2 my-1.5 flex gap-3 pl-4 ${
              i === 0 ? "bg-primary/10 border-l-4 border-x-primary" : ""
            }`}
          >
            {el.icon}
            <Typography
              {...{
                variant: "span",
                color: "link",
                fontVariant: "body",
                capitalize: true,
              }}
            >
              {el.name}
            </Typography>
          </Link>
        );
      })}

      <Typography
        {...{
          variant: "p",
          fontVariant: "body",
          color: "link",
          uppercase: true,
          className: "pl-4",
        }}
      >
        businesses
      </Typography>

      {BusinessLink.map((el, i) => {
        return (
          <Link to="" key={i} className="py-2 my-1.5 flex gap-3 pl-4">
            {el.icon}
            <Typography
              {...{
                variant: "span",
                color: "link",
                fontVariant: "body",
                capitalize: true,
              }}
            >
              {el.name}
            </Typography>
          </Link>
        );
      })}

      <Typography
        {...{
          variant: "p",
          fontVariant: "body",
          color: "link",
          uppercase: true,
          className: "pl-4",
        }}
      >
        settings{" "}
      </Typography>

      {settingsLink.map((el, i) => {
        return (
          <Link to="" key={i} className="py-2 my-1.5 flex gap-3 pl-4">
            {el.icon}
            <Typography
              {...{
                variant: "span",
                color: "link",
                fontVariant: "body",
                capitalize: true,
              }}
            >
              {el.name}
            </Typography>
          </Link>
        );
      })}
    </div>
  );
};
export default SideNav;
