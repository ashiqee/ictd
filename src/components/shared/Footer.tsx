import Image from 'next/image';
import React from 'react';
import ScrollTop from '../ui/ScrollTop';

const Footer = () => {
    return (
      <div className='mt-8'>
         <Image 
                alt='a'
                className='md:w-[1920px] md:h-[100px] w-[500px] h-[50px]'
                src={"https://i.postimg.cc/L6tJ120g/footer-top-bg.png"}
                width={1920}
                height={100}
                />
 <div className='h-40 flex flex-col p-2 bg-cover md:bg-contain bg-no-repeat   justify-center  bg-green-800/10'
        // style={{backgroundImage: "url(https://i.postimg.cc/L6tJ120g/footer-top-bg.png)"}}
    
        >
            <div className='font-kalpurush p-2 md:flex container mx-auto items-center justify-between '>
          <div className='text-md font-bold'>
          <p>
            তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তরের ওয়েবসাইট ভিজিট করার জন্য ধন্যবাদ
            </p>
            <p>
            যোগাযোগ
            </p>

            <p className='text-[13px] font-thin'>
            সাইটটি শেষ হাল-নাগাদ করা হয়েছে: <span>২০২৪-০৮-১৬ ১০:১০:১৪</span>
            </p>
          </div>

            <div>
                <Image 
                alt='a'
                className='w-full'
                src={"https://i.postimg.cc/cHPvQHSw/np-logo-set.png"}
                width={200}
                height={100}
                />
            </div>
        </div>
        </div>
        <div className='text-center font-kalpurush'>
            <small>২০২৪ &copy; তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তর</small>
        </div>
        <ScrollTop/>
      </div>
       
    );
};

export default Footer;