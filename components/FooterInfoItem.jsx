import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const infoCSS = {
  fontFamily: "Jost",
  fontStyle: "normal",
  fontWeight: " 500",
  fontSize: "16.17px",
  lineHeight: "23px",
  color: "#F1F1F1",
};
export const FooterInfoItem = ({ title, info }) => {
  return (
    <section className="flex flex-col gap-1">
      <h2 className="text-lg font-semibold font-[jost]  ">
        <span className="border-b pb-1  border-[#2D83EE] text-[#ffffff]">
          {title}
        </span>
      </h2>
      <ul className="flex flex-col gap-1 mt-2">
        {info.map((item) => (
          <li key={item} style={infoCSS}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};
export const FooterInfoProfile = () => {
  return (
    <section className="flex flex-col gap-1">
      <h2 className="text-lg font-semibold font-[jost]  ">
        <span className="border-b pb-1  border-[#2D83EE] text-[#ffffff]">
          More About Quill
        </span>
      </h2>
      <ul className="flex flex-col gap-1 mt-2">
        <li style={infoCSS}>About Us</li>
        <li style={infoCSS}>FAQs</li>
        <li style={infoCSS}>Blockchains We Audit</li>
      </ul>

      <ul className="flex flex-col gap-1 mt-2 my-3">
        <p style={infoCSS}>
          <span className="text-lg">Contact Us</span>
        </p>
        <li style={infoCSS} className="flex items-center gap-1">
          <TbMailFilled size={20} />
          <Link
            href={"audits@quillhash.com"}
            target="_blank"
            style={infoCSS}
            className="italic underline"
          >
            audits@quillhash.com
          </Link>
        </li>
        <li style={infoCSS} className="flex items-center gap-1">
          <FaTelegramPlane size={20} />
          <Link
            href={"t.me/quillaudits"}
            target="_blank"
            style={infoCSS}
            className="italic underline"
          >
            t.me/quillaudits
          </Link>
        </li>{" "}
      </ul>
      <ul className="flex flex-col gap-1 mt-2">
        <p style={infoCSS} className="flex items-center gap-1">
          <FaLocationDot size={19} />

          <span className="text-lg">Our Location </span>
        </p>{" "}
        <li style={infoCSS}>
          Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed Bin
          Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box: 416654/
        </li>
      </ul>
    </section>
  );
};
