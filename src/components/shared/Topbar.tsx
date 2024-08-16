'use client'
import React, { useState } from 'react';
import Search from '../ui/Search';
import {Switch} from "@nextui-org/react";

const Topbar = () => {
  const [language, setLanguage] = useState("En");


  const handleChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === "En" ? "Bn" : "En"));
  };
    return (
        <div className='text-sm p-2 bg-gradient-to-r from-green-700 via-green-800 to-green-900 bg-green-900/85 '>
      <div className='container mx-auto md:flex justify-between items-center '>
      <div className='flex items-center justify-between md:justify-normal font-kalpurush gap-2'>
            <h4 className='text-white pr-4'>বাংলাদেশ জাতীয় তথ্য বাতায়ন</h4>
       <div className='flex '>
       <select className='rounded-md p-0.5' name="" id="">
                <option value="মন্ত্রণালয়/বিভাগ">মন্ত্রণালয়/বিভাগ</option>
                <option value="অধিদপ্তর বাতায়ন">অধিদপ্তর বাতায়ন</option>
                <option value="বিভাগীয় বাতায়ন">বিভাগীয় বাতায়ন</option>
                <option value="জেলা বাতায়ন">জেলা বাতায়ন</option>
            </select>
            <button className="bg-red-600 hover:bg-[#a8d5ba] hover:text-red-600 px-1 p-0.5 rounded-r-md  text-white">Go</button>
          
       </div>
          </div>

          <section>
            <div className='flex gap-2  mt-2 md:mt-0 '>
             <Search/>
              {/* <button className="bg-red-600 px-2 p-0.5 hover:bg-[#a8d5ba] hover:text-red-600 rounded-md  text-white">Eng</button> */}
              <Switch
      defaultSelected
      size="sm"
      color="success"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <p className="text-black">En</p>
        ) : (
          <p className="text-black">Bn</p>
        )
      }
    >
     
    </Switch>
            </div>
          </section>
      </div>
        </div>
    );
};

export default Topbar;