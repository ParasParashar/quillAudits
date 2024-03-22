import Advantages from "./Advantages";
import AnimateComponent from "./AnimateComponent";
import ContentInfos from "./ContentInfos";
import InfoBox from "./InfoBox";
import QuillAditsPartners from "./QuillAditsPartners";
import TestimonialCard from "./TestimonialCard";

const MainContent = () => {
  return (
    <div className="flex flex-col px-3   ">
      <AnimateComponent>
        <Advantages />
      </AnimateComponent>
      {/* animation components */}
      <AnimateComponent>
        <QuillAditsPartners />
      </AnimateComponent>
      <AnimateComponent>
        <div className=" block lg:hidden max-sm:mt-3">
          <InfoBox />
        </div>
      </AnimateComponent>
      <ContentInfos />
      <AnimateComponent>
        <TestimonialCard />
      </AnimateComponent>
    </div>
  );
};

export default MainContent;
