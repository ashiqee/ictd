'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import ModalVideo from './ModalVideo';

interface VideoCardProps {
    title: string;
    thumbnailUrl: string;
    videoUrl: string;
    description?: string;
    onClick?: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
    title,
    thumbnailUrl,
    videoUrl,
    description,
    onClick
}) => {
  const [isPopupOpen,setPopupOpen]= useState(false);
 
    const [selectedVideo,setSelectedVideo]= useState('');

  const openPopup = (videoUrl:string)=>{
    setSelectedVideo(videoUrl);
    setPopupOpen(true);
}

    const closePopup= ()=>{
      setPopupOpen(false)
  }

    return (
    <>
        <div onClick={()=>openPopup(videoUrl)}
            className="border rounded-lg hover:text-green-700 overflow-hidden cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg"
            
        >
            <div className="relative w-full h-48">
                <Image
                    src={thumbnailUrl}
                    alt={`${title} thumbnail`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                {description && <p className="text-sm text-gray-600">{description}</p>}
            </div>
        </div>
 
<ModalVideo src={videoUrl}  isOpen={isPopupOpen} onClose={closePopup}/>
      
    </>
    );
};

export default VideoCard;
