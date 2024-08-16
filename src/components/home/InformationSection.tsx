import React from 'react';
import CardHome from '../ui/CardHome';
import { InformationData } from '@/static/data';

const InformationSection = () => {


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between w-full h-fit    gap-8'>
            

{
    InformationData.map((info,i)=>(
       <CardHome key={i} title={info.infoTitle} icon={info.infoIcon} listData={info.listData} />
    ))
}

        </div>
    );
};

export default InformationSection;