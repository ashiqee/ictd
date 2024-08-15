import Image from 'next/image';
import React from 'react';
import TittleCard from '../ui/TittleCard';
import Link from 'next/link';
import { CheckCircleOutlined } from '@ant-design/icons';
import Button from '../ui/Button';

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
            profileImg:"https://i.postimg.cc/vBwqj2Pg/image.png"
        },
        {
            degination:"মহাপরিচালক",
            name:"জনাব মোঃ মোস্তফা কামাল",
            profileImg:"https://i.postimg.cc/BvK7mfCf/image.jpg"
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
        <div className='shadow-xl space-y-16 font-kalpurush bg-green-500/5 rounded-xl w-1/4 p-8 h-fit '>
         
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
                <p>{officer.name}</p>
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


         {/* Help Line */}
         <section className='space-y-8'>
         <div>
         <TittleCard title={"জরুরি হেল্পলাইন নম্বর"}/>
                <Image 
                className='rounded-b-3xl  hover:shadow-2xl object-cover w-full'
                src={"https://i.postimg.cc/d03r85MX/help-line.png"}
                width={180}
                height={180}
                alt='#'/>
         </div>
          
         </section>
        </div>
    );
};

export default Rightbar;