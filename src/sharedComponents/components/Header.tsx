import { Link } from "react-router-dom";
import { arrowDown, icon, logo, notify } from "../../assets";
import { USER } from "../helpers/variables";
import { Typography } from "../";
import { Avatar } from "./";
import { BellIcon,MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header: React.FC<any> = () => {
  return (
    //     <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-4 h-20">
    //       <div className="inline-flex">
    //         <Link className="_o6689fn" to={USER}>
    //           <div className="hidden md:block">
    //             <img src={logo} alt="Logo" className="" />
    //           </div>
    //           <div className="block md:hidden">
    //             <img src={icon} alt="Logo" className="" />
    //           </div>
    //         </Link>
    //       </div>

    //       {/* <!-- end logo -->

    //   <!-- search bar --> */}
    //       <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
    //         <div className="inline-block">
    //           <div className="inline-flex items-center max-w-full">
    //             <button
    //               className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
    //               type="button"
    //             >
    //               <div className="block flex-grow flex-shrink overflow-hidden">
    //                 Start your search
    //               </div>
    //               <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
    //                 <svg
    //                   viewBox="0 0 32 32"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   aria-hidden="true"
    //                   role="presentation"
    //                   focusable="false"
    //                   //   style="
    //                   //               display: block;
    //                   //               fill: none;
    //                   //               height: 12px;
    //                   //               width: 12px;
    //                   //               stroke: currentcolor;
    //                   //               stroke-width: 5.33333;
    //                   //               overflow: visible;
    //                   //           "
    //                 >
    //                   <g fill="none">
    //                     <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
    //                   </g>
    //                 </svg>
    //               </div>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <!-- end search bar -->

    //   <!-- login --> */}
    //       <div className="flex-initial">
    //         <div className="flex justify-end items-center relative">
    //           <div className="block">
    //             <div className="inline relative">
    //               {/* <button
    //                 type="button"
    //                 className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
    //               > */}
    //               {/* <div className="pl-1">
    //                 <svg
    //                   viewBox="0 0 32 32"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   aria-hidden="true"
    //                   role="presentation"
    //                   focusable="false"
    //                   // style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"
    //                 >
    //                   <g fill="none" fillRule="nonzero">
    //                     <path d="m2 16h28"></path>
    //                     <path d="m2 24h28"></path>
    //                     <path d="m2 8h28"></path>
    //                   </g>
    //                 </svg>
    //               </div> */}

    //               <div className="flex-row flex-grow-0 flex-shrink-0 h-10  pl-5">
    //                 <Avatar
    //                   {...{ name: icon, avatarAlt: "user", className: "-mt-16" }}
    //                 />
    //                 <Typography
    //                   {...{
    //                     variant: "small",
    //                     fontVariant: "body2",
    //                     color: "black",
    //                   }}
    //                 >
    //                   Name
    //                 </Typography>
    //               </div>
    //               {/* </button> */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <!-- end login --> */}
    //     </nav>
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
                  <MagnifyingGlassIcon className="h-6 w-6"/>
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
