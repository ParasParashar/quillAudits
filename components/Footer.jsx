import { footerInfo } from "@/utils/footerInfo";
import Image from "next/image";
import { FooterInfoItem, FooterInfoProfile } from "./FooterInfoItem";
import {
  FaDiscord,
  FaLinkedin,
  FaMedium,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { PiRedditLogoFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import React from "react";
const footerInfoCSS = {
  fontFamily: "Jost",
  fontStyle: "normal",
  fontWeight: " 400",
  fontSize: "10.86px",
  lineHeight: "20px",
  color: "#FFFFFF",
};

const Footer = () => {
  return (
    <footer className=" h-full w-full relative m-0  border-none text-[#ffffff] border   footer_image  p-5 pt-8 lg:px-8 xl:px-16 flex flex-col items-center  gap-9 mt-5 ">
      {/* logo */}
      <section className="flex md:mr-auto  items-center w-[234px] md:w-[298px]  h-[46px] gap-1">
        <div className="relative size-16">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            priority
            sizes="max-width:80px,max-height:80px"
            className="object-fill"
          />
        </div>
        <p className=" font-semibold text-xl flex flex-col gap-1 ">
          QuillAudits
          <span className="text-sm font-light   font-[jost] text-end ">
            Making Web3 a safer place
          </span>
        </p>
      </section>
      {/* programs */}
      <section className=" w-full space-y-3  block xl:hidden">
        <h2 className="text-lg font-semibold font-[jost]  ">
          <span className="border-b pb-1 hidden md:block text-lg  font-medium font-[jost]  border-[#2D83EE] text-[#ffffff]">
            Our Programmes
          </span>
        </h2>

        <div className="grid grid-cols-2 w-full md:grid-cols-4 gap-3 ">
          <button className="navbarButton ">WAGSI Grants</button>
          <button className="navbarButton ">Ambassador Program</button>
          <button className="navbarButton ">Refer-Earn-Secure</button>
          <button className="navbarButton ">Partnership Program</button>
        </div>
      </section>
      {/* informations */}
      <article className="grid grid-cols-2 gap-10 relative   lg:grid-cols-5 w-full">
        {/* mapping keys of footer info to get the footer info  */}
        <div className="hidden lg:block">
          <FooterInfoProfile />
        </div>

        {Object.keys(footerInfo).map((item) => (
          <FooterInfoItem key={item} title={item} info={footerInfo[item]} />
        ))}
        <div className="block lg:hidden ">
          <FooterInfoProfile />
        </div>

        <section className=" hidden xl:block space-y-3 absolute bottom-0  right-0">
          <h2 className="text-lg font-semibold font-[jost]  ">
            <span className="border-b pb-1  text-lg  font-medium font-[jost]  border-[#2D83EE] text-[#ffffff]">
              Our Programmes
            </span>
          </h2>

          <div className="flex gap-3 items-center flex-nowrap">
            <button className="navbarButton w-[190px]">WAGSI Grants</button>
            <button className="navbarButton w-[190px]">
              Ambassador Program
            </button>
            <button className="navbarButton w-[190px]">
              Refer-Earn-Secure
            </button>
            <button className="navbarButton w-[190px]">
              Partnership Program
            </button>
          </div>
        </section>
      </article>
      {/* company socials */}
      <section className="flex flex-col items-center gap-5  py-4  justify-center w-full md:flex-row md:justify-between">
        <div className="flex flex-nowrap items-center  justify-between w-full md:w-[460px]  ">
          <div className="relative h-[48px] md:h-[60px] w-[135px] md:w-[212px] ">
            <Image
              src="https://s3-alpha-sig.figma.com/img/f652/2a8a/7ababdcdf0d80fb9ef74060cdac9209f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RDAwJj6b7F0hFGlQPrvBQ4x8C0wjXXsXlJnkPu3kecCBk~Sa6DJTJ-NUHru8sUOaXh~b9C9NPTsOwLBmt3d3aSO~x~wwlenqV5oRuMPCJpcymU8yg4HlLCjI00ShA1UlB2hZc7am39g-CUlmolSyer8JzgqzZWzbUBHzBcdOGcGCpM1lm9Ll2VKklaNKlrCkNbI-a7qOqP9I56g6FKD8-~u2UrlowiefEKXw~A-sS7OnlGG1DAE9h5tXb5~WfRZ3KhHDBmjMMJVDkNutkOKOxHMz2SgHkxSt9DdZLa2QpatHzCVBsWFsX74huikOiJWVZuU3t76ZerXgbor6fJO9cw__"
              alt="Customer Image"
              fill
              priority
              sizes={"min-width:120px,min-height:45px"}
            />
          </div>
          <div className="relative h-[48px] md:h-[60px] w-[135px] md:w-[198px] ">
            <Image
              src="https://www.figma.com/file/LkU7VqGlBqaAeN8ZS6wcNn/image/1a3c3a5d4e3161bde003ae7089489b23aae58f1a"
              alt="Customer Image"
              fill
              priority
              sizes={"min-width:120px,min-height:45px"}
            />
          </div>
        </div>
        <div className="flex  flex-nowrap text-[##DDDDDD] w-full justify-between md:w-[414px]">
          <Link href="https://twitter.com/quillaudits" target="_blank">
            <FaXTwitter size={23} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/quillaudits"
            target="_blank"
          >
            <FaLinkedin size={23} />
          </Link>
          <Link href="t.me/quillaudits" target="_blank">
            <FaTelegramPlane size={23} />
          </Link>
          <Link href="https://www.reddit.com/r/QuillAudits" target="_blank">
            <PiRedditLogoFill size={23} />
          </Link>
          <Link href="https://quillaudits.medium.com" target="_blank">
            <FaMedium size={23} />
          </Link>
          <Link href="https://discord.com/invite/jJfN9UD4YX" target="_blank">
            <FaDiscord size={23} />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC5Yt_8qEaAr-PiTMmGBuPCQ/videos"
            target="_blank"
          >
            <FaYoutube size={23} />
          </Link>
        </div>
      </section>
      {/* footers footer */}
      <section className="flex  flex-col-reverse sm:flex-row  p-1 items-center w-full   justify-center sm:justify-between  border-t-[.5px] border-[#F1F1F180]">
        <p style={footerInfoCSS}>
          All Rights Reserved. &#169; Copyright 2023. QuillAudits - LLC
        </p>
        <p style={footerInfoCSS}>Privacy Policy</p>
      </section>
    </footer>
  );
};

export default Footer;
