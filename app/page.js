import AnimateComponent from "@/components/AnimateComponent";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center  justify-center flex-col w-full overflow-x-hidden main-scrollbar ">
      <div className="flex flex-col relative w-full justify-center ">
        {/* navbar */}
        <Navbar />
        <section className=" relative  border-none  z-0  h-[660px] overflow-hidden  w-screen">
          <Image
            src="https://s3-alpha-sig.figma.com/img/9b44/72ec/0a99099ec54b48207331384cdbb986c0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lN1uEps~mfnyRXE9txlxIUnpW~18P3efv5~tsTSsrFgh7~2wFz0mnQZva8GOXc3lsj7trHQgi0rOTqrz4xIf5-Z54qlcgAcRXQMfOydh4i2MpWaKqkuD-rGHA-iSmfbLvcZe8WXDmymQjOYklb4eleBrsFM~99joiQXz8kc~wcBYY7uQtzkr0gMwRJXa~J-L06uBrCYujU9-90El7ps1d1v6I2wCfJATcafXyzNpBYDSR1smApGwoxILh2~t5jw-cJx3IUyhVxQ8yeZ8XhMJQ3doZf8WG4efnezYLO1JyLCx9kYeZj4UEw4rlLDcKayq948tfWbCuvgV-zvSNsDipQ__"
            alt="Background Image"
            fill
            sizes="max-width:100%"
            priority={true}
          />
        </section>
        {/* hero section */}
        <Hero />
      </div>
      <MainContent />
      <NewsLetter />
      <Footer />
    </main>
  );
}
