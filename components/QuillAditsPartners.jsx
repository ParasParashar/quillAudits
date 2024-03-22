import InfoBox from "./InfoBox";

const QuillAditsPartners = () => {
  return (
    <div className="flex flex-col items-start w-full relative  ">
      <h6 className="quilAditsPartner_info text-center w-full lg:w-[692px] text-xl  mx-auto md:text-2xl lg:text-3xl">
        See how QuillAudits is a trusted partner in 1000+ Audit stories
      </h6>
      <button className="navbarButton mx-auto   text-sm md:text-[14px] my-3">
        Request an Audit
      </button>
      <p className=" w-full md:w-[500px] quilAudit_info mt-3 max-sm:text-sm">
        Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
        self-managed, inclusive, globally portable fund. Unique for its token
        burn mechanism, it ensures a sustainable 4.32% inflation payout. With
        $143.11k and 41.06% of CDP already burned, it serves 35 users globally.
      </p>
      <div className=" hidden lg:block absolute top-32 right-[-110px] ">
        <InfoBox />
      </div>
    </div>
  );
};

export default QuillAditsPartners;
