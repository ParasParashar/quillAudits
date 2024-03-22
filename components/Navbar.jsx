"use client";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import MobileNavbar from "./MobileNavbar";
import { useEffect, useState } from "react";
import Image from "next/image";
import { navRoutes } from "@/utils/navRoutes";
import { IconBase } from "react-icons";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 210) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <nav
      className={`z-[99999] fixed w-full  text-[#ffffff] top-0 left-0 backdrop-filter   backdrop-blur-lg  ${
        show && " bg-gradient-to-br from-[#070821]  to-[#2d155a] opacity-95 "
      }`}
    >
      <div
        className={`flex items-center justify-between    xl:max-w-[80%] mx-auto border-b-2  border-gray-600  px-2  p-2 ${
          show && "border-none"
        }`}
      >
        {/* logo */}
        <Link href="/" className="flex items-center gap-x-1">
          <div className="relative size-10">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              priority
              sizes="max-width:50px,max-height:50px"
              className="object-fill"
            />
          </div>
          <h3 className=" hidden lg:block font-semibold text-xl ">
            QuillAudits
          </h3>
        </Link>
        {/* routes */}
        <section className="hidden md:text-xs lg:text-sm transition-all ease-in duration-300 items-center justify-center md:flex gap-x-6   xl:gap-x-10 ">
          {navRoutes?.map((item) => {
            const Icon = item?.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex hover:text-white/70  items-center gap-x-1"
              >
                {item.name}
                {Icon && <Icon size={10} />}
              </Link>
            );
          })}
        </section>
        {/* button */}
        <button className="navbarButton  ">Request an Audit</button>
        {/* toggle button */}
        <div className="block md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
