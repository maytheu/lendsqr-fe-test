import { Link } from "react-router-dom";
import {
  orgAcct,
  users,
  user,
  currency,
  handshake,
  home,
  savings,
  loanRepay,
  userTimes,
  userCheck,
  product,
  coinSolid,
  trans,
  galaxy,
  userCog,
  scroll,
  chart,
  sliders,
  badgePercent,
  clipboardList,
  tire,
  signout,
} from "../../assets";
import Typography from "../Typography";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SideNav = () => {
  const custormerLink = [
    { name: "users", icon: <img src={user} alt="" className="h-4 w-6" /> },
    {
      name: "guarantors",
      icon: <img src={users} alt="" className="h-4 w-6" />,
    },
    {
      name: "loans",
      icon: <img src={currency} alt="" className="h-6 w-6" />,
    },
    {
      name: "decision models",
      icon: <img src={handshake} alt="" className="h-4 w-6" />,
    },
    {
      name: "savings",
      icon: <img src={savings} alt="" className="h-5 w-6" />,
    },
    {
      name: "loan requests",
      icon: <img src={loanRepay} alt="" className="h-6 w-6" />,
    },
    {
      name: "whitelist",
      icon: <img src={userCheck} alt="" className="h-4 w-6" />,
    },
    {
      name: "karma",
      icon: <img src={userTimes} alt="" className="h-4 w-6" />,
    },
  ];

  const BusinessLink = [
    {
      name: "organization",
      icon: <img src={orgAcct} alt="" className="h-6 w-6" />,
    },
    {
      name: "loan product",
      icon: <img src={loanRepay} alt="" className="h-6 w-6" />,
    },
    {
      name: "savings product",
      icon: <img src={product} alt="" className="h-6 w-6" />,
    },
    {
      name: "fees and charges",
      icon: <img src={coinSolid} alt="" className="h-6 w-6" />,
    },
    {
      name: "transactions",
      icon: <img src={trans} alt="" className="h-6 w-6" />,
    },
    {
      name: "sevices",
      icon: <img src={galaxy} alt="" className="h-6 w-6" />,
    },
    {
      name: "sevice account",
      icon: <img src={userCog} alt="" className="h-4 w-6" />,
    },
    {
      name: "settlements",
      icon: <img src={scroll} alt="" className="h-6 w-6" />,
    },
    {
      name: "reports",
      icon: <img src={chart} alt="" className="h-6 w-6" />,
    },
  ];

  const settingsLink = [
    {
      name: "preferences",
      icon: <img src={sliders} alt="" className="h-6 w-6" />,
    },
    {
      name: "fees and pricing",
      icon: <img src={badgePercent} alt="" className="h-6 w-6" />,
    },
    {
      name: "audit logs",
      icon: <img src={clipboardList} alt="" className="h-8 w-6" />,
    },
    {
      name: "system messages",
      icon: <img src={tire} alt="" className="h-6 w-6" />,
    },
  ];
  return (
    <div className=" flex pt-10 flex-col">
      <Link to="" className="flex gap-3 items-center pl-4">
        <img src={home} alt="" className="h-6 w-6" />
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
        <img src={orgAcct} alt="" className="h-6 w-6" />
        <Typography
          {...{
            variant: "span",
            color: "link",
            fontVariant: "body",
            capitalize: true,
          }}
        >
          Dashboard{" "}
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
            className={`py-2 my-1.5 flex gap-3 pl-4 items-center ${
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
          <Link
            to=""
            key={i}
            className="py-2 my-1.5 flex gap-3 items-center pl-4"
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
        settings{" "}
      </Typography>

      {settingsLink.map((el, i) => {
        return (
          <Link
            to=""
            key={i}
            className="py-2 my-1.5 flex items-center gap-3 pl-4"
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

      <Link
        to=""
        className="flex gap-3 items-center mb-4 pl-4 pt-3 mt-14 border-t borlink"
      >
        <img src={signout} alt="" className="h-6 w-6" />
        <Typography
          {...{
            variant: "span",
            color: "link",
            fontVariant: "body",
            capitalize: true,
          }}
        >
          Logout
        </Typography>
      </Link>

      <Typography
        {...{
          variant: "span",
          color: "link",
          fontVariant: "body2",
          className: "pl-4",
        }}
      >
        v1.2.0
      </Typography>
    </div>
  );
};
export default SideNav;
