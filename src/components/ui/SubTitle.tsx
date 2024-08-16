import React from 'react';

interface SubtitleProps{
    text:string;
}

const SubTitle: React.FC<SubtitleProps> = ({text}) => {
    return (
        <h3 className='font-bold text-xl  pb-2 border-green-700/25 mb-2  border-b-2'>
        
        {text}
        </h3>
        
    );
};

export default SubTitle;