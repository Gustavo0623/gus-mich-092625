'use client';

import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="home-bg main py-8 md:py-6 lg:py-4 flex flex-col justify-around items-center h-dvh overscroll-contain">
      <div className="text-center title text-5xl font-medium sm:text-6xl md:text-7xl lg:text-8xl" style={{fontFamily: '"Pinyon Script", cursive', color: "#6c416e"}}>Gustavo &amp; Michelle</div>
      <div className="flex flex-col items-center">
      <div onClick={() => setShowModal(true)} className="flex justify-center cursor-pointer">
        <img src="/envelope-seal.PNG" className="w-1/2 sm:w-72 md:w-80 lg:w-96 hover:drop-shadow-[2px_2px_1px_black]" alt="envelope" />
      </div>
        <p className="pt-4 text-2xl font-bold sm:text-3xl lg:text-4xl" style={{fontFamily: '"Pinyon Script", cursive', color: "#6c416e"}}>September 26, 2025</p>
      </div>
      <div className="flex flex-wrap justify-evenly icon-box w-full">
        <div className="flex flex-col flex-1/2 my-4 md:flex-1/4 md:my-0 justify-end items-center">
          <p className="text-center text-lg sm:text-xl lg:text-2xl" style={{color: "#6c416e"}}>Wedding Details</p>
          <Link href="/wedding-details">
            <img className="border-2 border-[#6c416e] rounded-full w-14 h-auto sm:w-16 md:w-18 lg:w-22 bg-fuchsia-50 cursor-pointer hover:shadow-[2px_2px_2px_black]" src="rings2.svg" alt="rings icon"/>
          </Link>
        </div>
        <div className="flex flex-col flex-1/2 my-4 md:flex-1/4 md:my-0 justify-end items-center">
          <p className="text-center text-lg sm:text-xl lg:text-2xl" style={{color: "#6c416e"}}>Wedding Entourage</p>
          <Link href="/entourage">
            <img className="border-2 border-[#6c416e] rounded-full w-14 h-auto sm:w-16 md:w-18 lg:w-22 bg-fuchsia-50 cursor-pointer hover:shadow-[2px_2px_2px_black]" src="entourage2.svg" alt="entourage icon"/>
          </Link>
        </div>
        <div className="flex flex-col flex-1/2 my-4 md:flex-1/4 md:my-0 justify-end items-center">
          <p className="text-center text-lg sm:text-xl lg:text-2xl" style={{color: "#6c416e"}}>Dress Code</p>
          <Link href="/dress-code">
            <img className="border-2 border-[#6c416e] rounded-full w-14 h-auto sm:w-16 md:w-18 lg:w-22 bg-fuchsia-50 cursor-pointer hover:shadow-[2px_2px_2px_black]" src="dress2.svg" alt="dress icon"/>
          </Link>
        </div>
        <div className="flex flex-col flex-1/2 my-4 md:flex-1/4 md:my-0 justify-end items-center">
          <p className="text-center text-lg sm:text-xl lg:text-2xl" style={{color: "#6c416e"}}>RSVP</p>
          <Link href="/rsvp">
            <img className="border-2 border-[#6c416e] rounded-full w-14 h-auto sm:w-16 md:w-18 lg:w-22 bg-fuchsia-50 cursor-pointer hover:shadow-[2px_2px_2px_black]" src="rsvp.svg" alt="RSVP icon"/>
          </Link>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-xl w-11/12 max-w-3xl">
            <video controls autoPlay className="align-middle w-full h-auto max-h-dvh">
              <source src="/slideshow.M4V" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              className="absolute text-white top-2 left-1/2 transform -translate-x-1/2 text-2xl"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
