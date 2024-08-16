import Image from 'next/image';
import React from 'react';
import NoticeBoard from '../home/NoticeBoard';

const Header = () => {
    return (
        <div className='md:my-8 md:min-h-96 container lg:flex gap-8 justify-between  mx-auto'>
            <div className=' w-full  shadow-lg  p-2 rounded-md   bg-cover bg-center object-center ' 
             style={{backgroundImage: "url(https://i.postimg.cc/bvsPTXQ8/ict-dept.png)",
          }}>
            <div className='bg-black/20   lg:h-full flex flex-col justify-center items-baseline w-full'>

          <div className='flex md:px-10   container py-14 lg:py-0 mx-auto font-kalpurush gap-2 md:gap-4'>
          <Image
         
             src="https://seeklogo.com/images/B/bangladesh-govt-republic-of-bangladesh-logo-D8A916D881-seeklogo.com.png"
             width={100}
             height={100}
             alt='bd-gov' />

             <div className='p-2 text-white'>
                <h1 className="text-2xl 2xl:text-5xl  font-bold">তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
                </h1>
                <h2 className='text-xl py-2 font-normal'>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h2>
             </div>
          </div>
          
          </div>
        </div>
{/* notice  */}
        <div className= 'mt-4 md:mt-0 lg:w-2/4'>

        <NoticeBoard/>
        </div>
        </div>
    );
};

export default Header;