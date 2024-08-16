'use client'
import React from 'react';

const AudioPlayer = () => {
   

    return (
        <div className='mt-4'>
     <audio className='w-full' controls>
        <source src="/bd_national_anthem.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
        </div>
    );
};

export default AudioPlayer;