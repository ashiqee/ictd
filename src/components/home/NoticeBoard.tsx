import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

const NoticeBoard = () => {

    const noticeData = [
        {
        noticeId :"1",
        noticeDate:'15-08-2024',
        noticeTitle:"অফিস আদেশঃ পদনাম পরিবর্তন"
    },
        {
        noticeId :"2",
        noticeDate:'13-08-2024',
        noticeTitle:"অফিস আদেশঃ মাঠ পর্যায়ের এসিআর"
    },
        {
        noticeId :"3",
        noticeDate:'12-08-2024',
        noticeTitle:"অফিস আদেশঃ অবমুক্তি"
    },
        {
        noticeId :"4",
        noticeDate:'10-07-2024',
        noticeTitle:"পাসপোর্ট অনাপত্তি (জনাব মিহির কুমার মিত্র)"
    },
        {
        noticeId :"5",
        noticeDate:'10-07-2024',
        noticeTitle:"অফিস আদেশঃ বহিঃ বাংলাদেশ ছুটি (জনাব নিলুফা ইয়াসমিন)"
    },
        {
        noticeId :"6",
        noticeDate:'10-07-2024',
        noticeTitle:"অফিস আদেশঃ বহিঃ বাংলাদেশ ছুটি (জনাব মোঃ শাহাদাত হোসেন)"
    },
   

]

    return (
        <div className='shadow-lg min-h-96 bg-green-300/5 flex flex-col justify-between rounded-lg font-kalpurush border-[1px] p-6'>
           <div>
           <h3 className='font-bold text-xl border-b-2'>নোটিশ বোর্ড</h3>
            <ul className='py-2'>
             {
                noticeData?.map((notice)=>(
                    <li key={notice.noticeId} className='flex justify-between py-1.5 rounded-md hover:text-green-700 cursor-pointer hover:shadow-md items-center'>
                    <p className='flex gap-4'><CaretRightOutlined className="text-green-700" /> <span className='max-w-56 md:max-w-80 '>{notice.noticeTitle}</span></p> <span className='text-[13px] border p-0.5 rounded-md bg-green-700/5 w-fit font-mono'>{notice.noticeDate}</span>
                    </li>   
                )
                    
                )
             }
               
            </ul>
           </div>
            
            <div className='flex justify-end '>
            <Link className='hover:text-green-700' href="#">সকল</Link>
            </div>
        </div>
    );
};

export default NoticeBoard;