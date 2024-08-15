import React from 'react';

const Menubar = () => {
  const  menuItems = [

        {
            menuLabel:"আমাদের সম্পর্কিত",
            path:"",
            subMenu:[
                {
                    menuLabel:"বিভাগ পরিচিতি",
                    path:"",
            },
                {
                    menuLabel:"ইতিহাস ও কার্যাবলি",
                    path:"",
            },
                {
                    menuLabel:"ভিশন ও মিশন",
                    path:"",
            },
        ]
        },
        {
            menuLabel:"অধীনস্থ দপ্তর/অফিস/সংস্থা",
            path:"",
            subMenu:[
                {
                    menuLabel:"বিভাগ পরিচিতি",
                    path:"",
            },
                {
                    menuLabel:"ইতিহাস ও কার্যাবলি",
                    path:"",
            },
                {
                    menuLabel:"ভিশন ও মিশন",
                    path:"",
            },
        ]
        },
        {
            menuLabel:"প্রকল্প/কর্মসূচি",
            path:"",
            subMenu:[
                {
                    menuLabel:"বিভাগ পরিচিতি",
                    path:"",
            },
        ]
        },
        {
            menuLabel:"গ্যালারি",
            path:"",
            subMenu:[
                {
                    menuLabel:"বিভাগ পরিচিতি",
                    path:"",
            },
        ]
        },
        {
            menuLabel:"আইন/নীতিমালা",
            path:"",
            subMenu:[
                {
                    menuLabel:"বিভাগ পরিচিতি",
                    path:"",
            },
        ]
        },
        {
            menuLabel:"ই-সেবা",
            path:"",
            subMenu:[
                {
                    menuLabel:"বিভাগ পরিচিতি",
                    path:"",
            },
        ]
        },
        {
            menuLabel:"যোগাযোগ ও মতামত",
            path:"",
            subMenu:[
                {
                    menuLabel:"বিভাগ পরিচিতি",
                    path:"",
            },
        ]
        },
    ]
    return (
        <div className=' mb-8 container hidden md:block font-kalpurush mx-auto'>
            <ul className='flex items-center justify-between'>
                {
                    menuItems.map((item,i)=>(
                        <li key={i} className='border-b-2 p-0.5 hover:bg-rose-700/85 hover:text-white border border-green-700 px-4 rounded-md'> {item.menuLabel} </li>
                    
                    
                    ))
                }
               
            </ul>
        </div>
    );
};

export default Menubar;