import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { setViewMode } from "@/src/store/slices/viewModeSlice";
import { viewModeList } from "@/src/constants/viewMode";

const Navbar = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state: RootState) => state.viewMode.viewMode);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
                width={20}
                height={30}
              />
              <h1 className="self-center text-gray-900 text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Provider Calender
              </h1>
            </a>
          </div>
          <div className="flex items-center">
            <div className="border-2 ml-auto border-[#E0E0E0] rounded-lg flex items-center">
              <div
                className={`p-2 ${
                  viewMode === viewModeList.NORMAL ? "bg-[#DBE7CC]" : ""
                }`}
                onClick={() => dispatch(setViewMode("NORMAL"))}
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1740727301/amaha_health/list_jn5oa7.svg"
                  }
                  alt="List"
                  width={25}
                  height={25}
                />
              </div>
              <div
                className={`p-2 border-l-2 border-[#E0E0E0] ${
                  viewMode === viewModeList.CALENDER ? "bg-[#DBE7CC]" : ""
                }`}
                onClick={() => dispatch(setViewMode("CALENDAR"))}
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1740727342/amaha_health/stroke_icon_1_wux1ad.svg"
                  }
                  alt="Calender"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
