import React, { useState, useEffect } from 'react';
import PreloaderImg from "../../public/preloader.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Preloader = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) {
          return '';
        } else {
          return prevDots + '.';
        }
      });
    }, 500); // Adjust the interval to change the speed of animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center h-screen items-center bg-cyan-400">
            <LazyLoadImage
              className="animate-ping mb-12"
              style={{width: "150px", height: "150px"}}
              src={PreloaderImg}
              alt="Loading..."
            />
          <p className="text-gray-600 text-2xl text-white">Loading{dots}</p>
    </div>
  );
};

export default Preloader;
