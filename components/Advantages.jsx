const Advantages = () => {
  return (
    <section className="grid grid-cols-1 gap-2 sm:gap-0 sm:grid-cols-2  p-1 lg:p-2 md:mt-6">
      <div className=" grid-rows-3 grid w-full sm:w-full  md:w-96 min-h-60 md:h-80 sm:p-5 lg:py-3   sm:border-r-2">
        <h4 className="advantage_content bg-[#ffabc9] p-1 font-bold h-8">
          Before QuillAudits
        </h4>
        <p className="advantage_content_point break-words break-all ">
          Exploits like reentrancy and front-running can let attackers withdraw
          extra funds and manipulate transaction timing for unfair gains
        </p>
        <p className="advantage_content_point">
          Vulnerabilities could allow users to mint CDP tokens or pension shares
          indefinitely, disrupting the system&apos;s economic balance{" "}
        </p>
      </div>
      <div className=" grid-rows-3 grid w-full sm:w-full md:w-96 min-h-60 md:h-80 sm:p-5 lg:py-3 ">
        <h4 className="advantage_content  bg-[#abccff] p-1 font-bold h-8">
          After QuillAudits
        </h4>
        <p className="advantage_content_point">
          Implementation of reentrancy protection mechanisms.
        </p>
        <p className="advantage_content_point">
          Ensure precision in decimal handling with standard libraries,
          recalculate accurately, fix logic errors, and secure referral systems
          against exploitation.
        </p>
      </div>
    </section>
  );
};

export default Advantages;
