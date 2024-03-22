import Image from "next/image";
import AnimateComponent from "./AnimateComponent";

const headingStyle = {
  width: "439px",
  height: "128px",
  fontFamily: "Jost",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "48px",
  lineHeight: "69px",
  letterSpacing: "-0.01em",
  color: "#14316C",
};
const Content = {
  height: "72px",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "150%",
  letterSpacing: "-0.01em",
};

const mobileContent = {
  top: "11479px",
  fontFamily: "Jost",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "13px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#000000",
};
const NewsLetter = () => {
  return (
    <>
      <section className="md:flex items-center  justify-center  px-3 w-full md:bg-gradient-to-r from-[#EDF2FE] to-[#D9D9D900] h-[485px] hidden mx-auto ">
        <div className="flex flex-col h-full justify-evenly w-[500px]  ">
          <h6 className="text-[#407AFF]  font-bold text-2xl ">NEWSLETTER</h6>
          <p style={headingStyle}>Security First News Letter by QuillAudits</p>
          <p
            style={{
              ...Content,
              fontFamily: "Inter",
              color: "#2D3648",
              width: "364px",
            }}
          >
            Subscribe for the most Exclusive Weekly security based newsletter
            and covering all the recent hacks up to date.
          </p>
        </div>
        <div className="flex items-center flex-col w-[600px] h-full justify-center gap-1  ">
          <AnimateComponent>
            <div className="relative sm:w-full  sm:h-[280px]  lg:w-[600px]  lg:h-[300px]  object-contain ">
              <Image
                src={"/newsletter.png"}
                alt="NewsLetter Image"
                fill
                priority
                sizes="max-width:600px,max-height:500px  "
                className="object-contain"
              />
            </div>
          </AnimateComponent>
          <div className="flex items-center justify-between rounded-lg border bg-[#ffffff] gap-x-2 p-2 shadow-sm sm:w-full   lg:w-[450px] ">
            <input
              placeholder="vitalik@ethereum.org"
              className="border-none focus-none text-lg  outline-none  w-full    "
            />
            <button className="navbarButton">Subscribe</button>
          </div>
        </div>
      </section>
      {/* for the mobile */}
      <section className="flex md:hidden flex-col px-10 w-full items-center justify-center">
        <p
          className=" text-center"
          style={{
            ...Content,
            fontFamily: "Jost",
            color: "#000000",
            width: "100%",
          }}
        >
          Security First
          <span className=" pb-1 px-1 border-b-2 border-[#2D83EE]    ">
            Newsletter
          </span>{" "}
          by QuillAudits
        </p>
        <AnimateComponent>
          <div className="flex flex-col gap-4">
            <div className="aspect-video relative object-contain">
              <Image
                src={"/newsletter.png"}
                alt="NewsLetter Image"
                fill
                priority
                sizes="min-width:280px,min-height:300px  "
                className="object-contain"
              />
            </div>

            <p
              style={mobileContent}
              className=" w-full h-full  md:w-[224px]
            "
            >
              DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight
              to your Inbox. Explore our weekly newsletter:
              <span className="text-[#2D83EE] font-semibold ">
                HashingBits
              </span>{" "}
              . Stay updated on everything we’re publishing. Stand a step ahead.
            </p>
          </div>
        </AnimateComponent>
        <div className=" flex flex-col w-full items-center  justify-center  gap-y-4">
          <div className="p-2  border w-full   rounded-lg border-[#5A5A5A]">
            <input
              placeholder="vitalik@ethereum.org"
              className="border-none focus-none text-sm  outline-none     "
            />
          </div>
          <button className="navbarButton">Subscribe</button>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
