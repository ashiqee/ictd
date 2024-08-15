import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';
import SubTitle from './SubTitle';
import Image from 'next/image';

const CardHome = ({title,icon,listData}) => {
  
    return (
        <div  className='shadow-lg w-full  font-kalpurush hover:bg-green-200/5 bg-green-500/5 rounded-lg p-10'>
           <SubTitle text={title}/>
           
            <div className='flex items-center gap-6 '>
                {/* icon  */}
                <div className='min-w-32'>
                <Image
                    src={icon}
                    width={100}
                    height={100}
                    alt='alt'
                    />
                </div>
                <div>
                    <ul>
                    {
                listData?.map((item,i)=>(
                    <li key={i} className='flex justify-between py-1.5 rounded-md hover:text-green-700 cursor-pointer  items-center'>
                    <p className='flex gap-4'><CaretRightOutlined className="text-green-700" /> <span className='max-w-56 md:max-w-80 hover:underline '>{item.label}</span></p> 
                    </li>   
                )
                    
                )
             }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CardHome;