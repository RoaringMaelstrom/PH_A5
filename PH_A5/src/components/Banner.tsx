import React from 'react';
import BannerImg from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className='flex justify-between bg-red-500'>
            <div className='flex-col p-18'>
                <h1 className='text-6xl font-extrabold'>Build You Ideal <br /> 
                    <span className="bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">Development Stack</span>
                </h1>
                <div className='py-8 text-[18px]'>
                    Explore frontend, backend, and tooling options, <br />
                    compare them side by side, and put together a stack that fits your next project.
                </div>
                <div className='flex py-8 gap-x-3'>
                    <button className="btn bg-[linear-gradient(90deg,#F97316_0%,#EC4899_100%)]">Explore Technologies</button>
                    <button className="btn px-12 btn-neutral btn-outline">Learn More</button>
                </div>
            </div>
            <div className='pr-16'>
                <img src={BannerImg} alt='Interface Stack Image'/>
            </div>
        </div>
    );
};

export default Banner;