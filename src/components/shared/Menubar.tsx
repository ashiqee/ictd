import { MenuOutlined } from '@ant-design/icons';
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
                {
                    menuLabel:"মাননীয় উপদেষ্টা",
                    path:"",
            },
                {
                    menuLabel:"প্রাক্তন মন্ত্রীগণের তালিকা",
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
        <>
        <div className="mb-8 mt-2 container hidden lg:block font-kalpurush mx-auto">
        <ul className="flex items-center justify-between">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="relative group p-4 text-center text-xl 
                hover:bg-gradient-to-l hover:from-red-500 hover:via-red-800 hover:to-red-900 hover:bg-red-900/85 
                bg-gradient-to-l from-green-700 via-green-800 to-green-900 bg-green-900/85 
                px-2 bg-gr-700 w-full text-white rounded-b-2xl"
            >
              {item.menuLabel}
      
              {/* Dropdown submenu */}
              {item.subMenu && (
                <ul
                  className="absolute left-0 top-full  w-full  rounded-lg 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-opacity space-y-1 fade-out duration-300"
                >
                  {item.subMenu.map((subItem, j) => (
                    <li
                      key={j}
                      className="p-2 text-left hover:bg-gradient-to-l hover:from-red-500 hover:via-red-800 hover:to-red-900 hover:bg-red-900/85 
                      bg-gradient-to-l from-green-700 via-green-800 to-green-900 bg-green-900/85 
                      text-white rounded-b-lg"
                    >
                      {subItem.menuLabel}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
       
      </div>

       
        </>
      
    );
};

export default Menubar;