import React from 'react';

interface ButtonProps{
    text:string;
}

const Button: React.FC<ButtonProps> = ({text}) => {
    return (
        <button className='p-2 hover:bg-gradient-to-l hover:from-green-500 
        hover:via-green-800 
        hover:to-green-900 
        hover:bg-green-900/85  px-2 mt-4 bg-red-700 w-full text-white rounded-b-md'>
  {text}</button>
    );
};

export default Button;