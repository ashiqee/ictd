import InformationSection from "@/components/home/InformationSection";
import NewsBar from "@/components/home/NewsBar";
import Rightbar from "@/components/home/Rightbar";
import Header from "@/components/shared/Header";
import Menubar from "@/components/shared/Menubar";

import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen  mx-4 md:mx-0  ">
      <NewsBar/>
    <Header/>
   <Menubar/>
   {/* main container  */}

   <section className="container flex justify-between gap-8 mx-auto ">
   <InformationSection/>
<Rightbar/>
   </section>
    <h3 className="text-3xl">
    Home Page


    </h3>

    <Image src="https://designstripe-secure.imgix.net/scene-snapshots/8ad34d0d-88c1-4f21-9646-42864867054d/1659566853799/default?auto=format&fit=clip&h=850&mark=%2Fwatermark.png&markfit=max&markalign=middle%2Ccenter&markw=1&markh=1&s=612575cd40f0936feacf44b74833cdb8" width={600} height={400} alt="asdas" />

    </main>
  );
}
