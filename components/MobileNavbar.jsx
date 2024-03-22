"use client";

import { navRoutes } from "@/utils/navRoutes";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBlur = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="relative lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
        {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
      </button>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        className="fixed inset-0 top-[56px] z-50 h-full w-full flex justify-end  transition-all ease-in-out "
      >
        <section
          onBlur={(e) => handleBlur(e)}
          className="w-full md:hidden backdrop-blur-lg backdrop-filter bg-gradient-to-br from-[#070821] to-[#2d155a] opacity-95 gap-5 text-xl h-[400px] py-4 px-2 flex flex-col shadow-xl items-center"
        >
          {navRoutes?.map((item) => {
            const Icon = item?.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300"
              >
                {item.name}
                {Icon && <Icon size={10} />}
              </Link>
            );
          })}
        </section>
      </motion.div>
    </div>
  );
};

export default MobileNavbar;
