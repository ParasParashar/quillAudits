const InfoBox = () => {
  return (
    <section className="info_box w-full h-40 md:w-[342px] p-2  z-50 flex-col gap-5 border-2 border-[#7184FD]  flex">
      <div className="flex flex-col gap-2">
        <p className="text-[#808080]  text-[14px]  font-normal">Headquarters</p>
        <span className="text-[#00000A] text-[16px] font-[500] ">
          Switzerland
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#808080]  text-[14px]  font-normal">Chain</p>
        <span className="text-[#00000A] text-[16px] font-[500] ">
          Pulse Blockchain
        </span>
      </div>
    </section>
  );
};

export default InfoBox;
