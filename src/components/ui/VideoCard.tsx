'use client'
import React from 'react';
import Image from 'next/image';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

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
    const {isOpen, onOpen, onOpenChange} = useDisclosure();



    return (
    <>
        <div onClick={onOpen}
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
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
        <ModalContent className="w-[800px]" >
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">Video Title</ModalHeader> */}
              <ModalBody >
              <iframe className="w-full h-72" src="https://www.youtube.com/embed/GT9ShGE_qjg?si=RFbgKAx7yHWftptV" title="YouTube video player"></iframe>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
    );
};

export default VideoCard;
