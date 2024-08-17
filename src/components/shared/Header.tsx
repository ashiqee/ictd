import Image from 'next/image';
import React from 'react';
import NoticeBoard from '../home/NoticeBoard';
import { MenuOutlined } from '@ant-design/icons';

const Header = () => {
    return (
      <>
      {/* mobile menu  */}
      <div className=' my-2 font-kalpurush flex gap-4 md:hidden'>
        <MenuOutlined className='text-xl'/>
<ul className='flex  divide-x-1'>
  <li className='pl-1 hover:bg-green-700 hover:text-white pr-1'>আমাদের সম্পর্কিত</li>
  <li className='pl-1 hover:bg-green-700 hover:text-white pr-1'>অধীনস্থ দপ্তর/অফিস/সংস্থা</li>
  <li className='pl-1 hover:bg-green-700 hover:text-white pr-1'>প্রকল্প/কর্মসূচি</li>
  
</ul>
        </div>
        <div className='md:mt-8  md:min-h-96 container lg:flex gap-8 justify-between  mx-auto'>
            <div className=' w-full  shadow-lg  p-2 rounded-md   bg-cover bg-center object-center ' 
             style={{backgroundImage: "url(https://i.postimg.cc/bvsPTXQ8/ict-dept.png)",
          }}>
            <div className='bg-black/20   lg:h-full flex flex-col justify-center items-baseline w-full'>

          <div className='flex md:px-10   container py-14 lg:py-0 mx-auto font-kalpurush gap-2 md:gap-4'>
          <Image
          className="w-28 object-cover bg-white/80 rounded-full h-fit"
             src="/images/bdMinLogo.webp"
             width={200}
             height={200}
             alt='bd-gov' />

             <div className="p-2 text-white">
  <h1
    className="text-2xl 2xl:text-5xl font-bold"
    style={{
      textShadow:
        "2px 2px 0 green, -2px -2px 0 green, -2px 2px 0 green, 2px -2px 0 green",
    }}
  >
    তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
  </h1>
  <h2
    className="text-xl py-2 font-normal"
    style={{
      textShadow:
        "2px 2px 0 green, -2px -2px 0 green, -2px 2px 0 green, 2px -2px 0 green",
    }}
  >
    গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
  </h2>
</div>
          </div>
          
          </div>
        </div>
{/* notice  */}
        <div className= 'mt-4 md:mt-0 lg:w-2/4'>

        <NoticeBoard/>
        </div>
        </div>
      </>
        
    );
};

export default Header;