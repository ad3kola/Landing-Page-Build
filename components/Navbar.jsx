"use client";
import { Bars2Icon, Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const navToggle = () => {
    setNav((prev) => !prev);
  };
  const links = [
    {
      id: 1,
      page: "Services",
      path: "/",
    },
    {
      id: 2,
      page: "Resources",
      path: "/",
    },
    {
      id: 3,
      page: "Explore",
      path: "/",
    },
    {
      id: 4,
      page: "Options",
      path: "/",
    },
  ];
  return (
    <>
      <div className="w-full relative flex items-center justify-between py-5 px-6 md:px-10 overflow-hidden">
        <div className="text-2xl font-bold text-green-500">KOLA...</div>
        <ul className="hidden md:flex items-center space-x-3 md:space-x-6 lg:space-x-10 text-white font-semibold">
          <Link href="/">
            <li className="cursor-pointer hover:underline hover:scale-105 duration-200">
              Dashboard
            </li>
          </Link>
          {links.map((link) => (
            <>
              <Link href={link.path}>
                <li
                  key={link.id}
                  className="cursor-pointer hover:underline hover:scale-105 duration-200"
                >
                  {link.page}
                </li>
              </Link>
            </>
          ))}
        </ul>
        {nav ? (
          <Bars2Icon
            onClick={navToggle}
            className="md:hidden flex text-white cursor-pointer h-8"
          />
        ) : (
          <Bars3Icon
            onClick={navToggle}
            className="md:hidden flex text-white cursor-pointer h-8"
          />
        )}
        <div
          className={
            nav
              ? "absolute duration-200 top-16 right-4 z-50 bg-white w-52 rounded-l-2xl rounded-tr-2xl overflow-hidden"
              : "absolute duration-200 top-16 -right-full z-50 bg-white w-52 rounded-l-2xl rounded-tr-2xl overflow-hidden"
          }
        >
          <ul className="flex flex-col justify-center items-stretch w-full p-5 bg-gray-100 overflow-hidden">
            <Link href="/">
              <li className="cursor-pointer hover:bg-gray-200 p-2 duration-200">
                Dashboard
              </li>
            </Link>
            {links.map((link) => (
              <>
                <Link href={link.path}>
                  <li
                    key={link.id}
                    className="cursor-pointer mt-1 hover:bg-gray-200 p-2 duration-200"
                  >
                    {link.page}
                  </li>
                </Link>
              </>
            ))}{" "}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
