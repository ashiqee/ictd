import HelpLineNumber from "@/components/home/HelpLineNumber";
import InformationSection from "@/components/home/InformationSection";
import Loaction from "@/components/home/Loaction";
import NewsBar from "@/components/home/NewsBar";
import OthersInfo from "@/components/home/OthersInfo";
import Rightbar from "@/components/home/Rightbar";
import VideoGallery from "@/components/home/VideoGallery";
import Header from "@/components/shared/Header";
import Menubar from "@/components/shared/Menubar";
import TittleCard from "@/components/ui/TittleCard";

import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen  mx-4 md:mx-0  ">
      <NewsBar/>
    <Header/>
   <Menubar/>
   {/* main container  */}

   <section className="container lg:flex justify-between gap-8 mx-auto ">
   <div className="space-y-16">
   <InformationSection/>
   <OthersInfo/>
   <VideoGallery/>
   <Loaction/>
      <HelpLineNumber/>
   </div>
<Rightbar/>
   </section>

    </main>
  );
}
