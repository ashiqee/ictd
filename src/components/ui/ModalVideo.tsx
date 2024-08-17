import React from 'react';


interface ModalVideoProps{
    src:string;
    isOpen:boolean;
    onClose: ()=>void;
}


const ModalVideo: React.FC<ModalVideoProps> =  ({ src, isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div
      className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-70 z-50"
      onClick={onClose} 
    >
      <div className="relative bg-green-900/35 p-1 md:p-4     rounded-lg shadow-lg max-w-full max-h-full">
      <iframe className="md:w-[50vw] w-full h-60 md:h-[60vh] rounded-lg"   src={`https://www.youtube.com/embed/${src}?autoplay=1`}
       title="YouTube video player"
       allow="autoplay"
       ></iframe>
             
      </div>
    </div>
    );
};

export default ModalVideo;