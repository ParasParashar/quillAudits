"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ErrorState = ({ error }) => {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-gradient-to-br from-[#070821]  opacity-95  to-[#2d155a]">
      {" "}
      <h2 className=" text-xl text-white">Uh Oh</h2>
      <h3 className="font-light text-lg text-white">Something went wrong!</h3>
      <button
        onClick={() => router.push("/")}
        variant={"outline"}
        className="border p-2"
      >
        Refresh
      </button>
    </div>
  );
};

export default ErrorState;
