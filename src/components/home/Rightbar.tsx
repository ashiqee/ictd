import Image from 'next/image';
import React from 'react';
import TittleCard from '../ui/TittleCard';
import Link from 'next/link';
import { CheckCircleOutlined, FacebookFilled, TwitterCircleFilled, YoutubeFilled } from '@ant-design/icons';
import Button from '../ui/Button';
import AudioPlayer from './AudioPlayer';

const Rightbar = () => {
    const officerData = [
        {
            degination:"মাননীয় উপদেষ্টা",
            name:"জনাব মোঃ নাহিদ ইসলাম",
            profileImg:"https://i.postimg.cc/MGv0Fkzx/nahid-islam.jpg"
        },
        {
            degination:"সচিব",
            name:"জনাব মোঃ সামসুল আরেফিন",
            profileImg:"https://i.postimg.cc/MTLPkhkq/Honorable-Secretary-Sir.jpg"
        },    
    ]

    const importantLink =[
        {
            label:"রাষ্ট্রপতির কার্যালয়",
            path:""
        },
        {
            label:"প্রধানমন্ত্রীর কার্যালয়",
            path:""
        },
        {
            label:"জাতীয় তথ্য বাতায়ন",
            path:""
        },
        {
            label:"তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ",
            path:""
        },
        {
            label:"মন্ত্রণালয় ও বিভাগসমূহ",
            path:""
        },
        {
            label:"কেন্দ্রীয় ই-সেবা",
            path:""
        },
        {
            label:"জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ",
            path:""
        },
    ]


    const internalLink =[
        {
            label:"সুরক্ষা তথ্য সংশোধনী নির্দেশিকা",
            path:""
        },
        {
            label:"সুরক্ষা তথ্য সংশোধনের আবেদন পত্র",
            path:""
        },
        {
            label:"সুরক্ষা সাপোর্ট ইমেইল",
            path:""
        },
    ]

    const inovationLink =[
        {
            label:"ইনোভেশন টিম",
            path:""
        },
        {
            label:"ইনোভেশন কর্মপরিকল্পনা",
            path:""
        },
        {
            label:"ইনোভেটিভ সেবা তালিকা",
            path:""
        },
        {
            label:"সেবা সহজিকরণ",
            path:""
        },
    ]

    return (
        <div className='shadow-xl space-y-12 font-kalpurush bg-green-500/5 rounded-xl md:w-2/4 mx-auto lg:w-1/4 p-8 h-fit '>
         
         {/* profile officers  */}
         <section className='space-y-8'>
           {
            officerData.map((officer,i)=>(
                <div key={i} className='space-y-2 shadow-xl hover:shadow-2xl p-2 rounded-md font-kalpurush'>
                <TittleCard title={officer.degination}/>
                <Image 
                className='rounded-md object-cover w-full'
                src={officer.profileImg}
                width={180}
                height={180}
                alt='#'/>
                <p className='text-center text-green-600 text-xl'>{officer.name}</p>
                <p className='text-center  text-xl'>{officer.degination}</p>
                <p className='underline flex justify-end text-green-600'>বিস্তারিত</p>
            </div>
            ))
           }
         </section>

         {/* গুরুত্বপূর্ণ লিংক */}
         <section className='space-y-8 w-full '>
         <div>
         <TittleCard title={"গুরুত্বপূর্ণ লিংক"}/>
  {
    importantLink.map((impt,i)=>(
        <div key={i} className="p-2 w-full hover:shadow-md border-b-[0.1px]
        hover:text-white
        hover:bg-gradient-to-l 
        hover:from-red-500 
        hover:via-red-800 
        hover:to-red-900 
        hover:bg-red-900/85
         border-green-900 shadow-md" >
<Link  href={"#"}><CheckCircleOutlined />  <span className='hover:underline'>{impt.label}</span></Link>
</div>

    ))
  }
  <Button text='সকল লিংক'/>
                
         </div>
          
         </section>

         {/* ডিজিটাল বাংলাদেশ এর এগিয়ে যাওয়ার ১২ বছর */}
         <section className='space-y-8 w-full '>
         <div>
         <TittleCard title={"ডিজিটাল বাংলাদেশ এর এগিয়ে যাওয়ার ১২ বছর"}/>

  <div>
  <iframe className='w-full rounded-b-md' src="https://www.youtube.com/embed/0x5mf8BUJZY?si=fM5xCr4QkirnOygz" title="YouTube video player" ></iframe>
  </div>
                
         </div>
          
         </section>
         {/* আইসিটি সম্পর্কে ভিডিও */}
         <section className='space-y-8 w-full '>
         <div>
         <TittleCard title={"আইসিটি সম্পর্কে ভিডিও"}/>

  <div>
  <iframe className='w-full rounded-b-md' src="https://www.youtube.com/embed/fXuQNttSyJ4?si=0EXGy3Pk2JzYq4hE" title="YouTube video player" ></iframe>
  </div>
                
         </div>
          
         </section>

         {/* অভ্যন্তরীণ ই-সেবাসমূহ */}
         <section className='space-y-8 w-full '>
         <div>
         <TittleCard title={"অভ্যন্তরীণ ই-সেবাসমূহ"}/>
  {
    internalLink.map((impt,i)=>(
        <div key={i} className="p-2 w-full hover:shadow-md border-b-[0.1px]
        hover:text-white
        hover:bg-gradient-to-l 
        hover:from-red-500 
        hover:via-red-800 
        hover:to-red-900 
        hover:bg-red-900/85
         border-green-900 shadow-md" >
<Link  href={"#"}><CheckCircleOutlined />  <span className='hover:underline'>{impt.label}</span></Link>
</div>

    ))
  }
  <Button text='সকল লিংক'/>
                
         </div>
          
         </section>

{/* esheba */}
<section  className='space-y-2 w-full '>
    <Image
    className='w-full rounded-md hover:shadow-lg'
    src={"https://i.postimg.cc/9f1KkRg5/eTe.jpg"}
    alt='#'
    width={200}
    height={100}
    />
    <Image
    className='w-full rounded-md hover:shadow-lg'
    src={"https://i.postimg.cc/V6VTfycK/myGov.gif"}
    alt='#'
    width={100}
    height={100}
    />
    <Image
    className='w-full rounded-md hover:shadow-lg'
    src={"https://i.postimg.cc/W33CcNxD/internal-eservice2.jpg"}
    alt='#'
    width={200}
    height={100}
    />
</section>



{/* Sebha  */}
<section  className='space-y-8 w-full '>
<Link href={"https://doict.gov.bd/site/view/sps_data"}> <TittleCard title='সেবা সহজিকরণ'/></Link>
</section>



         {/* ইনোভেশন কর্নার */}
         <section className='space-y-8 w-full '>
         <div>
         <TittleCard title={"ইনোভেশন কর্নার"}/>
  {
    inovationLink.map((impt,i)=>(
        <div key={i} className="p-2 w-full hover:shadow-md border-b-[0.1px]
        hover:text-white
        hover:bg-gradient-to-l 
        hover:from-red-500 
        hover:via-red-800 
        hover:to-red-900 
        hover:bg-red-900/85
         border-green-900 shadow-md" >
<Link  href={"#"}><CheckCircleOutlined />  <span className='hover:underline'>{impt.label}</span></Link>
</div>

    ))
  }
  <Button text='সকল লিংক'/>
                
         </div>
          
         </section>

{/* Dengu website */}
<section  className='space-y-0 w-full '>
    <TittleCard title='ডেঙ্গু প্রতিরোধে করণীয়'/>
    <Image
    className='w-full rounded-md hover:shadow-lg'
    src={"/images/dengu.jpg"}
    alt='#'
    width={200}
    height={100}
    />
</section>
<section>
    <TittleCard title='জাতীয় সংগীত'/>
    <AudioPlayer/>
</section>




{/* staff website */}
<section  className='space-y-2 w-full '>
<Image
    className='w-full rounded-md hover:shadow-lg'
    src={"/images/discount_bn.jpg"}
    alt='#'
    width={200}
    height={100}
    />
    <Image
    className='w-full rounded-md hover:shadow-lg'
    src={"https://i.postimg.cc/wMRr3Wqg/bkkb-button-bn.png"}
    alt='#'
    width={200}
    height={100}
    />
</section>

{/* social website */}
<section  className='space-y-8 w-full '>
    <TittleCard title='সামাজিক যোগাযোগ'/>
   <div className='text-5xl flex justify-center gap-8'>
    <FacebookFilled className='text-blue-700'/> <TwitterCircleFilled className='text-blue-400'/> <YoutubeFilled className='text-red-700'/>
   </div>
</section>



     
        </div>
    );
};

export default Rightbar;