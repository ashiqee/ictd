import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';

const NewsBar = () => {

    const newsData = [
        {
        newsId :"1",
        newsTitle:"	২০২৩-২৪ অর্থবছরের তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তরের সাথে জেলা কার্যালয়ের বার্ষিক কর্মসম্পাদন চুক্তি (APA) এর চুক্তি স্বাক্ষর অনুষ্ঠান"
    },
        {
        newsId :"2",
        newsTitle:"আইসিটি অধিদপ্তরের প্রধান কার্যালয়ে আন্তর্জাতিক নারী দিবস, ২০২২ উদযাপন"
    },
        {
        newsId :"3",
        newsTitle:"আইসিটি অধিদপ্তরের মহাপরিচালক মহোদয়ের ঈদ-উল-ফিতর, ২০২১ শুভেচ্ছা"
    },
        {
        newsId :"4",
        newsTitle:"বার্ষিক কর্মসম্পাদন চুক্তি (এপিএ) ২০১৯-২০২০ এর চূড়ান্ত মূল্যায়নে তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তরের প্রথম স্থান অর্জন"
    },
   

]
    return (
        <div className='flex items-center container mx-auto gap-4 border-b-1 font-kalpurush '>
            <h2 className='text-md font-bold'>খবর: </h2>
           <div className='overflow-hidden '>
           <ul className='flex justify-between gap-20 items-center animate-marquee whitespace-nowrap '>
            {
                newsData?.map((news)=>(
                    <li key={news.newsId} className=' w-fit flex py-1.5 rounded-md hover:text-green-700 cursor-pointer items-center'>
                    <CaretRightOutlined className="text-green-700" /> <span>{news.newsTitle}  </span>
                    </li>   
                )
                    
                )
             }
            </ul>
           </div>
        </div>
    );
};

export default NewsBar;