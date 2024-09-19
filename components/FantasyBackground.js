import React from 'react';

const FantasyBackground = () => {
    return (
        <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500"></div>
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="cloudFilter" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur" />
                        <feComponentTransfer in="blur" result="softblur">
                            <feFuncA type="linear" slope="0.8" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode in="softblur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#cloudFilter)">
                    <path d="M50,150 Q100,100 150,150 T250,150 T350,150 T450,150" fill="white" opacity="0.7" />
                    <path d="M0,200 Q50,150 100,200 T200,200 T300,200 T400,200" fill="white" opacity="0.6" />
                    <path d="M100,250 Q150,200 200,250 T300,250 T400,250 T500,250" fill="white" opacity="0.5" />
                </g>
            </svg>
        </div>
    );
};

export default FantasyBackground;