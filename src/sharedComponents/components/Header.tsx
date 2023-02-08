import { Link } from "react-router-dom";
import { arrowDown, icon, logo } from "../../assets";
import { USER } from "../helpers/variables";
import { Typography } from "../";
import { Avatar } from "./";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header: React.FC<any> = () => {
  return (
    <nav className="grid grid-cols-2 bg-white w-full px-4 h-20 items-center md:grid-cols-4">
      <div className="md:col-span-3 grid grid-cols-3 ">
        <div className="inline-flex">
          <Link className="" to={USER}>
            <div className="hidden md:block">
              <img src={logo} alt="Logo" className="" />
            </div>
            <div className="block md:hidden">
              <img src={icon} alt="Logo" className="" />
            </div>
          </Link>
        </div>

        <div className="hidden md:grid col-span-2 flex-shrink flex-grow-0 justify-start px-2">
          <div className="inline-block">
            <div className="inline-flex items-center max-w-full">
              <form className="flex items-center">
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                  <input
                    type="text"
                    className="bg-white border border-container/10 text-primary/30 text-sm rounded-l-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Search for anything"
                  />
                </div>
                <button
                  type="submit"
                  className="py-2.5 px-5 text-sm font-medium text-white bg-primary rounded-r-lg border border-transparent hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary/70"
                >
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-initial">
        <div className="grid grid-cols-3 gap-x-1 justify-end items-center">
          <Link {...{ to: USER, className: "justify-center mx-auto pl-4" }}>
            <Typography
              {...{
                color: "black",
                fontVariant: "body2",
                variant: "span",
                className: "underline",
              }}
            >
              Docs
            </Typography>
          </Link>

          <div className="flex items-center gap-x-3">
            <BellIcon className="h-6 w-6" />

            <Avatar
              {...{ name: icon, avatarAlt: "user", className: "w-10 h-10" }}
            />
          </div>

          <div className="flex items-center">
            <Typography
              {...{
                variant: "small",
                fontVariant: "body2",
                color: "black",
              }}
            >
              Name
            </Typography>
            <img {...{ src: arrowDown, alt: "", className: "h-1.5 pl-2" }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
