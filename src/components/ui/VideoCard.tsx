import React from 'react';
import Image from 'next/image';

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
    return (
        <div
            className="border rounded-lg hover:text-green-700 overflow-hidden cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg"
            onClick={onClick}
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
    );
};

export default VideoCard;
