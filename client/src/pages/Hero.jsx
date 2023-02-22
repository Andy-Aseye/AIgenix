import React from 'react';
import woman from '../assets/woman.mp4';
import heroImg from '../assets/hero-img.png';

const Hero = () => {
  return (
    <div className="h-[80vh] w-full relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <video className="w-full h-full object-cover" autoPlay={true} loop muted><source src={woman}/></video> 
        <div className="absolute w-full h-full top-0 flex flex-row justify-between align-middle mt-[25vh]  text-white" id="hero-text">
          <div className="flex flex-col ml-[5vw] align-middle">
          <h1 className="inline-block w-96 text-5xl font-semibold font-roboto">Turn your ideas into <span className="text-red">art</span></h1>
            <p className="inline-block w-80 mt-6 text-sm">Ever had an idea and just didn't have the talent to make it? Well no need to worry anymore, let's make it into art with AI powered technology.</p>
          </div>
          <div className="flex-col mr-[10vw] mt-[-4vh]">
            <img src={heroImg} alt="hero-img"  className="w-80"/>
          </div>
        </div>
    </div>
  )
}

export default Hero