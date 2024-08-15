import React from 'react';
import CardHome from '../ui/CardHome';

const InformationSection = () => {
const InformationData = [
    {
        infoTitle:"আমাদের বিষয়ে",
        infoIcon:"https://i.postimg.cc/CKc8YcL7/aboutus2-1-1.png",
        listData:[
            {
                label:"এক নজরে"
            },
            {
                label:"সিটিজেন চার্টার"
            },
            {
                label:"সাংগঠনিক কাঠামো ও কার্যাবলী"
            },
            {
                label:"মাঠ পর্যায়ের কর্মকর্তাগণের কার্যপরিধি"
            },
        ]
    },
    {
        infoTitle:"ই-সেবা সমূহ",
        infoIcon:"https://i.postimg.cc/44pJ9wrx/ict-service.png",
        listData:[
            {
                label:"ওয়েব মেইল"
            },
            {
                label:"নৈমিত্তিক ছুটি ব্যাবস্থাপনা"
            },
            {
                label:"অধিদপ্তরের প্রয়োজনীয় ফরমসমূহ"
            },
            {
                label:"ই টেন্ডারিং"
            },
        ]
    },
    {
        infoTitle:"আমাদের বিষয়ে",
        infoIcon:"",
        listData:[
            {
                label:"এক নজরে"
            },
            {
                label:"সিটিজেন চার্টার"
            },
            {
                label:"সাংগঠনিক কাঠামো ও কার্যাবলী"
            },
            {
                label:"মাঠ পর্যায়ের কর্মকর্তাগণের কার্যপরিধি"
            },
        ]
    },
    {
        infoTitle:"আমাদের বিষয়ে",
        infoIcon:"",
        listData:[
            {
                label:"এক নজরে"
            },
            {
                label:"সিটিজেন চার্টার"
            },
            {
                label:"সাংগঠনিক কাঠামো ও কার্যাবলী"
            },
            {
                label:"মাঠ পর্যায়ের কর্মকর্তাগণের কার্যপরিধি"
            },
        ]
    },
]

    return (
        <div className='grid grid-cols-2 justify-between w-full   border gap-8'>
            

{
    InformationData.map((info,i)=>(
       <CardHome key={i} title={info.infoTitle} icon={info.infoIcon} listData={info.listData} />
    ))
}

        </div>
    );
};

export default InformationSection;