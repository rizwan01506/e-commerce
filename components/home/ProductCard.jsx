import Image from "next/image";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ItemAddBtn from "../common/ItemAddBtn";
import { FillHeartIcon, HeartIcon } from "../helper/Icons";

const ProductCard = ({ item }) => {
    const [isLike, setLike] = useState(item.liked);
    const checkValue = (type) => {
        if (type === "New") return "bg-primary";
        if (type === "Sale") return "bg-red";
        if (type === "Hot") return "bg-pink";
    };

    return (
        <>
            <div className="border-[0.5px] hover:border-transparent w-[270px] z-50 border-gray bg-white rounded-[8px] relative overflow-hidden hover-shadow transition-all duration-300 my-4 xl:mx-[10px] mx-4">
                <div onClick={() => setLike(!isLike)} className="absolute right-[9px] top-[10px] cursor-pointer">
                    {isLike ? <HeartIcon /> : <FillHeartIcon />}
                </div>

                {item.banertype && (
                    <div
                        className={`  ${checkValue(
                            item.banertype
                        )} z-[10] left-[-33px] top-[12px] absolute rotate-[314deg] w-[121.26px] flex justify-center items-center `}
                    >
                        <p className=" h-[36px] py-1 w-full text-center   text-white text-sm font-normal">{item.banertype}</p>
                    </div>
                )}

                <div className="p-[12px]  h-[220px] mx-auto">
                    <img className="object-cover h-full w-full rounded-md" src={item.productimg} alt="populer product img" />
                </div>
                <div className="px-[20px] py-[18px] pt-[20px]">
                    <p className="font-normal text-xs text-lightblack">Category</p>
                    <p className="font-bold text-md text-lightblack mt-[6px] sm:mt-[12px]">{item.title}</p>
                    <div className="flex items-center my-1 sm:my-3">
                        <ReactStars count={5} size={24} value={item.rating} edit={false} activeColor="#ffd700" />

                        <p className="text-xs text-lightblack ff_lato  ml-2">{item.rating}</p>
                    </div>
                    <p className="text-xs text-lightblack ff_lato "> {item.quantitycheck}</p>
                    <div className="mt-1 sm:mt-3 flex items-end ">
                        <div className="flex">
                            <p className="text-sm text-lightblack  ff_lato "> {item.newPrice}</p>
                            <p className="text-sm text-lightblack ml-3  ff_lato ">
                                {" "}
                                <del>{item.newPrice}</del>
                            </p>
                        </div>
                        <ItemAddBtn />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
