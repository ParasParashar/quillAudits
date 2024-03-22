import Image from "next/image";
import BreadCrumb from "./BreadCrumb";

const Hero = () => {
  return (
    <section className="items-center w-full h-[80%] absolute top-20 md:top-30 lg:top-20  justify-center rounded-lg  flex flex-col lg:flex-row  px-2 xl:px-40 lg:px-20 md:gap-3  gap-8 mx-auto">
      {/* left side */}
      {/* <div className=" p-2 w-full h-[300px] lg:h-[500px] flex items-center justify-center lg:w-[520px] rounded-lg  bg-gradient-to-r from-[#020f01] to-[#034101]"> */}
      <div className=" w-full h-[300px] aspect-square lg:size-[500px]  p-2 flex items-center justify-center  rounded-lg  bg-gradient-to-r from-[#020f01] to-[#034101]">
        <div className="relative  w-full sm:max-w-[300px]    h-[140px] lg:w-[500px] flex flex-col gap-8 items-center justify-center   object-fill">
          <Image
            src="https://s3-alpha-sig.figma.com/img/697f/d0da/7fe50eddbb1aafa13170597391afbbdb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K5vDn-riMujWaPL-qPa4brBh-fyieqr1DsnI0iq~seI5yiYJY4LRZ4F58Nw~5FZ6KWzAiZIFtbBCgHDyYxyof524fYL3VrA6hUyzmUugG0pWv8w32xm~781DRd~EdAIKalnS1hIzdMb3F1b44VJdNk822GX4cL3VzCSaI9s8-A6VBjJtHSwhzUvk-f22xy-nYf17iFX5vXHbOze9oyjYdXtOgFzkRUA2EhC3l-~uX1SVQScxARswAn-QOMYyxsewvDNP3MoU2sWG~8D5Bl9LX9-KeLPV1AvaA4p~RCNF1W-LILzCffS9r4tgDxavfrSCuZtYDOiWSPcjkVgb5Iuxow__"
            alt="Hero Image"
            fill
            sizes="max-width:520px ,max-height:140px"
            priority={true}
            quality={100}
          />
          <p className="hero_content absolute  hidden lg:block  break-words break-all  top-[140%] left-[-1rem] ">
            Carpe Diem Pension, a blockchain-based retirement fund, offers
            permanent payouts through CDP deposits, with a 4.32% annual
            inflation claimable by depositors.
          </p>
          <div className="absolute bg-white rounded-lg h-16   w-32  bottom-[-4rem] right-[10px] sm:right-[-3rem] lg:top-[-144px] lg:left-[300px]  object-contain">
            <Image
              src="https://s3-alpha-sig.figma.com/img/697f/d0da/7fe50eddbb1aafa13170597391afbbdb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K5vDn-riMujWaPL-qPa4brBh-fyieqr1DsnI0iq~seI5yiYJY4LRZ4F58Nw~5FZ6KWzAiZIFtbBCgHDyYxyof524fYL3VrA6hUyzmUugG0pWv8w32xm~781DRd~EdAIKalnS1hIzdMb3F1b44VJdNk822GX4cL3VzCSaI9s8-A6VBjJtHSwhzUvk-f22xy-nYf17iFX5vXHbOze9oyjYdXtOgFzkRUA2EhC3l-~uX1SVQScxARswAn-QOMYyxsewvDNP3MoU2sWG~8D5Bl9LX9-KeLPV1AvaA4p~RCNF1W-LILzCffS9r4tgDxavfrSCuZtYDOiWSPcjkVgb5Iuxow__"
              alt="Hero small image Image"
              fill
              sizes="max-width:100px ,max-height:100px"
              priority={true}
              quality={100}
            />
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col m-3 lg:m-6 text-[#ffffff] gap-8 lg:gap-4 mt-3 max-sm:mt-8">
        <h2 className="hero_content_heading  w-full xl:w-[649px] ">
          Securing Trust : Boosting Security and Strengthening Trust at Carpe
          Diem Pension
        </h2>
        <p className="hero_content_main_content w-full xl:w-[541px] ">
          QuillAudits enhances Carpe Diem Pension by addressing 33
          vulnerabilities on the Pulse blockchain, boosting security and user
          trust in digital pensions.
        </p>
      </div>
      <BreadCrumb />
    </section>
  );
};

export default Hero;
