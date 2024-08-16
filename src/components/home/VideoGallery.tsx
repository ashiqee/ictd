'use client'
import React from 'react';
import TittleCard from '../ui/TittleCard';
import VideoCard from '../ui/VideoCard';


const VideoGallery = () => {
    const videos = [
        {
            title: '  এমপাওয়ারিং রুরাল ইউআইএসসি',
            thumbnailUrl: 'https://images.unsplash.com/photo-1718241905696-cb34c2c07bed?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            videoUrl: 'https://www.example.com/videos/nextjs-intro',
            description: ''
        },
        {
            title: 'এপিআইসিটিএ অ্যাওয়ার্ড ২০১৭',
            thumbnailUrl: 'https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.jpg?s=2048x2048&w=is&k=20&c=CnYhOjeTPisYsN-OLYVp60ZNKK3jP3JCPZrCjxCqmto=',
            videoUrl: 'https://www.example.com/videos/ts-advanced',
            description: ''
        },
        {
            title: 'ডিজিটাল ওয়ার্ল্ড ২০১৫',
            thumbnailUrl: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            videoUrl: 'https://www.example.com/videos/ts-advanced',
            description: ''
        },
        {
            title: 'ডিজিটাল ওয়ার্ল্ড ২০১৭',
            thumbnailUrl: 'https://images.unsplash.com/photo-1696517170961-661e9dca962e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            videoUrl: 'https://www.example.com/videos/ts-advanced',
            description: ''
        },
        {
            title: 'ডিজিটাল বাংলাদেশ দিবস - ২০১৯',
            thumbnailUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            videoUrl: 'https://www.example.com/videos/ts-advanced',
            description: ''
        },
        {
            title: 'আজকের বাংলাদেশ ডিজিটাল বাংলাদেশ',
            thumbnailUrl: 'https://plus.unsplash.com/premium_photo-1661763559420-68a27c8a8b27?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            videoUrl: 'https://www.example.com/videos/ts-advanced',
            description: ''
        },
        {
            title: 'ডিজিটাল ওয়ার্ল্ড ২০১৭',
            thumbnailUrl: 'https://images.unsplash.com/photo-1696517170961-661e9dca962e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            videoUrl: 'https://www.example.com/videos/ts-advanced',
            description: ''
        },
        {
            title: 'ডিজিটাল বাংলাদেশ দিবস - ২০১৯',
            thumbnailUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            videoUrl: 'https://www.example.com/videos/ts-advanced',
            description: ''
        },
        {
            title: 'আজকের বাংলাদেশ ডিজিটাল বাংলাদেশ',
            thumbnailUrl: 'https://plus.unsplash.com/premium_photo-1661763559420-68a27c8a8b27?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            videoUrl: 'https://www.example.com/videos/ts-advanced',
            description: ''
        },
        // Add more videos as needed
    ];

    const handleVideoClick = (videoUrl: string) => {
        window.open(videoUrl, '_blank');
    };
    return (
        <div className="font-kalpurush font-normal">
        <TittleCard title={"ভিডিও গ্যালারী"}/>
        <div>
           
        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
                <VideoCard
                    key={index}
                    title={video.title}
                    thumbnailUrl={video.thumbnailUrl}
                    videoUrl={video.videoUrl}
                    description={video.description}
                    onClick={() => handleVideoClick(video.videoUrl)}
                />
            ))}
        </div>
        </div>
    </div>
    );
};

export default VideoGallery;