'use client'
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

const ScrollTop = () => {
    return (
        <div>
              
              <ScrollToTop
      smooth
    //   style={{ backgroundColor: 'red', borderRadius: '50%' }}
    className=' text-green-800 text-2xl text-center  bg-red-800'
      component={
        <svg
          className="svg-icon"
          style={{
            width: '1.7em',
            height: '1.5em',
            verticalAlign: 'middle',
            fill: 'currentColor',
            overflow: 'hidden',
          }}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M512 78.694382C273.362632 78.694382 79.849863 272.20715 79.849863 510.844518s193.512769 432.150137 432.150137 432.150137c238.637368 0 432.150137-193.512769 432.150137-432.150137S750.758998 78.694382 512 78.694382zM792.234707 669.084689c-19.460744 19.460744-50.962822 19.339114-70.423566-0.12163L512 458.300511 302.310488 668.96306c-19.339114 19.460744-50.841193 19.582373-70.423566 0.12163-19.460744-19.339114-19.582373-50.962822-0.12163-70.423566l244.96211-246.056776c9.365483-9.365483 22.014966-14.595558 35.272598-14.595558 13.257632 0 25.907115 5.230075 35.272598 14.595558l245.083739 246.056776C811.695451 618.243497 811.695451 649.745575 792.234707 669.084689z" />
        </svg>
      }
    />
        </div>
    );
};

export default ScrollTop;