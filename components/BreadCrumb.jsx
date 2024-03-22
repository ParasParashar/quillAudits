import Link from "next/link";

const BreadCrumb = () => {
  return (
    <div className="absolute w-72 h-8 bottom-[-50px] left-5 md:left-40    breadCrub ">
      <Link href={"/"}>QuillAudits --&gt; Resources --&gt;</Link>
      <span className="text-[#ffffff]">Case Studies</span>
    </div>
  );
};

export default BreadCrumb;
