import React from 'react';
import TittleCard from '../ui/TittleCard';
import Image from 'next/image';

const HelpLineNumber = () => {

    const helpImg = [
        {
            imgUrl:"https://i.postimg.cc/cLcF1KqD/999.png"
        },
        {
            imgUrl:"https://i.postimg.cc/02Dt3WV1/1098.png"
        },
        {
            imgUrl:"https://i.postimg.cc/t4brH3cZ/16171.png"
        },
        {
            imgUrl:"https://i.postimg.cc/J796pVcQ/100.png"
        },
    ]

    return (
        <div>
             {/* Help Line */}
       <section className='space-y-8 font-kalpurush'>
         <div>
         <TittleCard title={"জরুরি হেল্পলাইন নম্বর"}/>
              <div className='grid grid-cols-2 md:grid-cols-4 '>
              {
                helpImg.map((img,i)=>(
                    <Image 
                    key={i}
                    className='rounded-b-3xl  hover:shadow-2xl object-cover w-[400px]'
                    src={img.imgUrl}
                    width={500}
                    height={100}
                    alt='#'/>
                ))
               }
              </div>
         </div>
          
         </section>
        </div>
    );
};

export default HelpLineNumber;