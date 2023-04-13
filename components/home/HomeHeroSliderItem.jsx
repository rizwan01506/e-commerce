import React from "react";

const HomeHeroSliderItem = ({ item }) => {
    return (
        <>
            <div>
                <div className="relative flex flex-col justify-center h-[290px] sm:h-full">
                    <img src={item.img} alt={item.title} className="w-full h-full" />
                    <div className="absolute sm:left-12 left-4 py-6  ">
                        <h1 className="md:text-3xl leading-[110%] text-lightblack font-bold text-lg sm:text-xl max-w-[411px] ">{item.title}</h1>
                        <p className="text-base text-lightblack ff_lato py-2 md:mt-[14px]"> {item.offer}</p>
                        <div className="my-6 flex sm:w-[420px] w-full border border-[#D4EEE2] rounded bg-white">
                            <input
                                type="email "
                                className="outline-none border-0 py-[13px] px-[24px] bg-transparent   text-xs  text-lightblack placeholder:text-lightblack rounded w-[calc(100%-106px)] "
                                placeholder="Enter your email address"
                            />
                            <button className="w-[106px] bg-primary text-white font-xs font-bold rounded transition-all duration-300 hover:opacity-80 ">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHeroSliderItem;
