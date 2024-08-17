'use client'
import React, { useState } from 'react';
import Search from '../ui/Search';
import {Button, Switch} from "@nextui-org/react";
import { GlobalOutlined } from '@ant-design/icons';

const Topbar = () => {
  const [language, setLanguage] = useState("English");


  const handleChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === "English" ? "বাংলা" : "English"));
  };
    return (
        <div className='text-sm p-2 bg-gradient-to-r from-green-700 via-green-800 to-green-900 bg-green-900/85 '>
      <div className='container mx-auto md:flex justify-between items-center '>
      <div className='flex items-center justify-between md:justify-normal font-kalpurush gap-2'>
            <h4 className='text-white pr-4'>বাংলাদেশ জাতীয় তথ্য বাতায়ন</h4>
       <div className='flex '>
       <select className='rounded-l-md p-0.5' name="" id="">
                <option value="মন্ত্রণালয়/বিভাগ">মন্ত্রণালয়/বিভাগ</option>
                <option value="অধিদপ্তর বাতায়ন">অধিদপ্তর বাতায়ন</option>
                <option value="বিভাগীয় বাতায়ন">বিভাগীয় বাতায়ন</option>
                <option value="জেলা বাতায়ন">জেলা বাতায়ন</option>
            </select>
            <button className="  border-none
        hover:bg-gradient-to-l
        hover:from-red-500 
        hover:via-red-800 
        hover:to-red-900 
        hover:bg-red-900/85
        bg-gradient-to-l
         from-green-700 via-green-800 to-green-900 bg-green-900/85 px-2  rounded-tr-md rounded-br-md text-white   transition-colors  font-semibold">Go</button>
          
       </div>
          </div>

          <section>
            <div className='flex gap-2 justify-between md:justify-start mt-2 md:mt-0 '>
             <Search/>

             <button className=' text-left font-kalpurush flex items-center gap-2 font-semibold w-20  text-white' onClick={handleChange} ><GlobalOutlined/>{language}</button>
              {/* <button className="bg-red-600 px-2 p-0.5 hover:bg-[#a8d5ba] hover:text-red-600 rounded-md  text-white">Eng</button> */}
              {/* <Switch
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
     
    </Switch> */}
            </div>
          </section>
      </div>
        </div>
    );
};

export default Topbar;