import Image from 'next/image';
import React from 'react';

const Rightbar = () => {
    return (
        <div className='shadow-xl bg-green-500/5 rounded-xl w-1/4 p-8 h-fit '>
         
         {/* profile officers  */}
         <section>
            <div className='space-y-2 shadow-xl hover:shadow-2xl p-2 rounded-md font-kalpurush'>
                <h3 className='bg-gradient-to-r from-green-700 via-green-800 to-green-900 bg-green-900/85
                pb-8 rounded-md p-4 text-white text-xl font-bold
                '>মাননীয় উপদেষ্টা</h3>
                <Image 
                className='rounded-md object-cover w-full'
                src={"https://i.postimg.cc/MGv0Fkzx/nahid-islam.jpg"}
                width={180}
                height={180}
                alt='#'/>
                <p className='underline flex justify-end text-green-600'>বিস্তারিত</p>
            </div>
         </section>
        </div>
    );
};

export default Rightbar;