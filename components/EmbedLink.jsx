import Link from "next/link";
const EmbedLink = () => {
  return (
    <p className="main_heading_content  w-3/4  py-5">
      <span className="font-bold "> Embed this tweet :-</span>
      <Link
        className="text-blue-500 break-words break-all"
        href="https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20"
        target="_blank"
      >
        https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20
      </Link>
    </p>
  );
};

export default EmbedLink;
