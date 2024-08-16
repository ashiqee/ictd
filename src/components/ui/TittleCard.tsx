
import React from 'react';
interface TittleCardProps{
    title:string;
}
const TittleCard: React.FC<TittleCardProps> = ({title}) => {
    return (
        <h3 className='bg-gradient-to-l from-green-700 via-green-800 to-green-900 bg-green-900/85
        rounded-t-md p-4 text-white text-xl font-bold
       '>{title}</h3>
    );
};

export default TittleCard;