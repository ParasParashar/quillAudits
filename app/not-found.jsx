import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-gradient-to-br from-[#070821]  opacity-95  to-[#2d155a]">
      <div className="flex flex-col p-8 items-center justify-center rounded-lg border-2 border-white/60 ">
        <h2 className="text-2xl p-4  font-serif   text-white">
          This is not valid route or page.
        </h2>
        <p className="text-lg text-white font-light">
          Could not find requested resource.
        </p>
        <button className="navbarButton" variant="link" size="sm">
          View <Link href="/">Home</Link>
        </button>
      </div>
    </div>
  );
}
