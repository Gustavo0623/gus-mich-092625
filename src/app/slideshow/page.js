'use client'; // If you're using Next.js 13+ App Router

import { useState, useRef } from 'react';
import Link from 'next/link';

const images = [
    '/IMG_8231.JPEG',
    '/IMG_8232.JPEG',
    '/IMG_8233.JPEG',
    '/IMG_8234.JPEG',
    '/IMG_8235.JPEG',
    '/IMG_8236.JPEG',
    '/IMG_8237.JPEG',
    '/IMG_8238.JPEG',
    '/IMG_8239.JPEG',
    '/IMG_8240.JPEG',
    '/IMG_8241.JPEG',
    '/IMG_8242.JPEG',
    '/IMG_8243.JPEG',
    '/IMG_8244.JPEG',
    '/IMG_8245.JPEG',
    '/IMG_8246.JPEG',
    '/IMG_8247.JPEG',
    '/IMG_8248.JPEG',
    '/IMG_8249.JPEG',
    '/IMG_8250.JPEG',
    '/IMG_8251.JPEG',
    '/IMG_8252.JPEG',
    '/IMG_8253.JPEG',
    '/IMG_8254.JPEG',
    '/IMG_8255.JPEG',
    '/IMG_8256.JPEG',
    '/IMG_8257.JPEG',
    '/IMG_8258.JPEG',
    '/IMG_8259.JPEG',
    '/IMG_8260.JPEG',
];

export default function Slideshow() {
    const [current, setCurrent] = useState(0);
    const total = images.length;

    const isChanging = useRef(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const safeSetCurrent = (newIdx) => {
    if (isChanging.current) return;
    isChanging.current = true;
    setCurrent(newIdx);
    setTimeout(() => (isChanging.current = false), 300); // match your transition time
    };

    const nextSlide = () => safeSetCurrent((current + 1) % total);
    const prevSlide = () => safeSetCurrent((current - 1 + total) % total);
        

    const handleTouchStart = (e) => (startX.current = e.touches[0].clientX);
    const handleTouchMove = (e) => (endX.current = e.touches[0].clientX);
    const handleTouchEnd = () => {
        const deltaX = startX.current - endX.current;
      
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            // Reset refs to avoid multiple triggers
            startX.current = 0;
            endX.current = 0;
        } else {
            setIsModalOpen(true)
        }
    };

    const startX = useRef(0);
    const endX = useRef(0);

    return (
        <div
        className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Return Home Link */}
            <Link
            href="/"
            className="absolute top-5 left-5 text-white bg-gray-800 bg-opacity-50 px-4 py-2 rounded hover:bg-opacity-75 transition"
            >
                ←
            </Link>
            <div 
            className="w-full flex flex-col gap-6"
            >
                <div 
                className=" relative min-h-92 w-full flex flex-col justify-center items-center gap-6"
                >
                    <img
                    src={images[current]}
                    alt="Slideshow"
                    className="object-contain max-h-92 transition duration-500 ease-in-out cursor-pointer"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    />
                    {/* Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 text-white bg-gray-800 bg-opacity-50 px-3 py-1 rounded hover:bg-opacity-75 cursor-pointer"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 text-white bg-gray-800 bg-opacity-50 px-3 py-1 rounded hover:bg-opacity-75 cursor-pointer"
                    >
                        ›
                    </button>
                </div>
                {/* Thumbnails */}
                <div className="w-full px-4 pb-2 overflow-x-auto hide-scrollbar">
                    <div className="flex space-x-2 w-max mx-auto">
                        {images.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`Thumbnail ${idx}`}
                            onClick={() => setCurrent(idx)}
                            className={`h-14 w-20 object-cover rounded cursor-pointer border-2 transition ${
                            idx === current ? 'border-white scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                            }`}
                        />
                        ))}
                    </div>
                </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-10 w-full px-4 overflow-x-auto hide-scrollbar">
                <div className="flex space-x-2 justify-center w-max mx-auto">
                    {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full ${
                        idx === current ? 'bg-white' : 'bg-gray-400'
                        }`}
                    />
                    ))}
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
                    <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-white text-2xl px-3 py-1 rounded "
                    >
                    ✕
                    </button>
                    <img
                    src={images[current]}
                    alt="Fullscreen"
                    className="max-w-full max-h-full object-contain transition duration-300 ease-in-out"
                    />
                </div>
            )}
        </div>
    );
}
