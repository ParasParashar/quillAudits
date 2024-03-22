"use client";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { GiRoundStar } from "react-icons/gi";
import { useEffect, useState } from "react";
import Image from "next/image";

const style = {
  background:
    "linear-gradient(90.3deg, #2B4D93 -10.68%, #0E205B 27.98%, #162867 55.94%, #323A87 103.52%)",
  borderRadius: " 4.8px 4.8px 0px 0px",
  height: "157px",
  width: "100%",
  position: "relative",
};
const userStyle = {
  width: "158px",
  height: "42px",
  fontFamily: "Jost",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "28.8px",
  lineHeight: "42px",
  color: "#FFFFFF",
};
const userStyle2 = {
  width: "123px",
  height: "28px",
  fontFamily: "Jost",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "19.2px",
  lineHeight: "28px",
  color: "#FFFFFF",
};
const content = {
  fontFamily: "Jost",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "23px",

  color: "#000000",
};
const TestimonialCard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileS, setIsMobileS] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
      setIsMobileS(window.innerWidth < 380);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="  w-full  h-full  md:w-[610px] bg-[#ffffff]   rounded-lg  group   my-8 cursor-pointer hover:shadow-xl   transition-all ease-in duration-300">
      <div style={style}>
        <span className=" z-50 text-white absolute top-1 left-1">
          <RiDoubleQuotesL size={60} />
        </span>
        {isMobile ? (
          <div
            className={`absolute top-1/2  ${isMobileS ? "right-0" : "right-8"}`}
          >
            <p style={userStyle} className=" text-lg">
              Carpediem
            </p>
            <p style={userStyle2}>TEAM</p>
          </div>
        ) : (
          <div className="absolute top-1/2 left-12">
            <p style={userStyle}>Sally Radley</p>
            <p style={userStyle2}>WebGFi - CEO</p>
          </div>
        )}
        {isMobile ? (
          <div
            className={`absolute left-6 z-50 bottom-[-40px] object-fill ${
              isMobileS ? " size-28" : "size-36"
            }`}
          >
            <Image
              src="https://s3-alpha-sig.figma.com/img/d81a/c3fb/63886839737d20794c060a1fb4f2c6aa?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WPCp8SJ0-m3Q32KQNKVxhFzFSRM2bBeKx1DOYcUg98azdX5lLMrbwXZ09qXXQOHDLIXgMwhMwmJJ1NDi1QZZiyiro6EQFhgcDm667PHBNDSU4XBva8K4NErUiQHopIZa054HAZ0xe1hpiQw88BAgNhA1aTkxhf2v28FnKK0GQvbffpepBu4dz9ZinrMshSTvwZWiu7l4x9urIAZRAOX0zg0Kd8OGTrCW8xqgvYZHTeGLognPn397XKakYi0V8ANyAmScO1u891G~9F6w7V5kX3prrxLW0bhqpTtrI-3d6973qkBqnGv-n81w5W33EpqbNTrZ4F-FuTDu209wj5zCvw__"
              alt="Profile Image"
              fill
              priority={false}
              sizes={"max-width:160px,max-height:160px"}
              className=" object-fill rounded-lg"
            />
          </div>
        ) : (
          <div
            className=" size-44 rounded-lg bg-[#204ECF] absolute right-10 z-50 bottom-[-40px]
            "
          />
        )}
      </div>
      <div className="px-10 p-5  flex flex-col gap-1  w-full relative  shadow-lg border">
        {/* starts */}
        <div
          className={`text-[#FFCE50] flex w-full  gap-1 ${
            isMobile ? "justify-end" : "justify-start"
          }`}
        >
          <GiRoundStar size={20} />
          <GiRoundStar size={20} />
          <GiRoundStar size={20} />
          <GiRoundStar size={20} />
          <GiRoundStar size={20} />
        </div>
        <p style={content} className="w-full sm:w-[477px]   h-full md:h-[92px]">
          {" "}
          “It felt like the auditing team was available within a short
          timeframe, which was excellent. The auditing process looked thorough,
          and I really appreciate the fact that you took time to investigate GAS
          optimizations.”
        </p>
        <span className=" z-50 text-[#204ECF] absolute bottom-1 right-1">
          <RiDoubleQuotesR size={60} />
        </span>
      </div>
    </section>
  );
};

export default TestimonialCard;
