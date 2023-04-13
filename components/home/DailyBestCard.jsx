import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FillHeartIcon, HeartIcon } from "../helper/Icons";

import AddToCartBtn from "../common/AddToCartBtn";
import ReactStars from "react-rating-stars-component";
const DailyBestCard = ({ items }) => {
    const checkValue = (type) => {
        if (type === "New") return "bg-primary";
        if (type === "Sale") return "bg-red";
        if (type === "Hot") return "bg-pink";
        if (type === "-5%") return "bg-pink";
    };
    const [rating, setRating] = useState(4);
    const [isLike, setLike] = useState();
    const ratingChanged = (newRating) => {
        setRating(newRating);
    };
    return (
        <>
            <div className="border-[0.5px]  w-[265px] z-50 border-gray bg-white rounded-[18px] relative overflow-hidden hover-shadow transition-all duration-300 my-4  sm:mx-4 mx-auto">
                <div onClick={() => setLike(!isLike)} className="absolute right-[9px] top-[10px] cursor-pointer ">
                    {isLike ? <HeartIcon /> : <FillHeartIcon />}
                </div>
                {items.banertype && (
                    <div
                        className={`  ${checkValue(
                            items.banertype
                        )} z-[10] left-[-33px] top-[12px] absolute rotate-[314deg] w-[121.26px] flex justify-center items-center `}
                    >
                        <p className=" h-[36px] py-1 w-full text-center   text-white text-sm font-normal">{items.banertype}</p>
                    </div>
                )}
                <div className="p-[12px] max-w-[200px] sm:max-w-none mx-auto">
                    <Image src={items.img} width={246} height={220} alt="Daily Best Card img" />
                </div>
                <div className="px-[20px] py-[18px] pt-[20px]">
                    <p className="font-normal text-xs text-lightblack">{items.category}</p>
                    <p className="font-bold text-md text-lightblack mt-[6px] sm:mt-[12px]">{items.productName}</p>
                    <div className="flex items-center my-1 sm:my-3">
                        <ReactStars count={5} size={24} value={rating} edit={false} activeColor="#ffd700" />

                        <p className="text-xs text-lightblack ff_lato  ml-2">{rating}</p>
                    </div>
                    <p className="text-xs text-lightblack ff_lato "> {items.prKg}</p>
                    <div className="my-3  ">
                        <div className="flex">
                            <p className="text-sm text-lightblack  ff_lato "> {items.price}</p>
                            <p className="text-sm text-lightblack ml-3  ff_lato ">
                                <del>{items.delPrice}</del>
                            </p>
                        </div>
                    </div>
                    <div>
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DailyBestCard;
