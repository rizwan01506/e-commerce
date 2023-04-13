import Image from "next/image";
import React from "react";
import ShopNowBtn from "../common/ShopNowBtn";

function FreeShipping() {
    return (
        <div className="">
            <div className="bg-labrador relative z-50 pl-[30px] py-[30px] sm:py-[93px]  xl:py-[122px] rounded-[8px] ">
                <div className="absolute bottom-0 right-0 z-[-1] max-w-[230px] sm:max-w-[300px] lg:max-w-none">
                    <Image className="z-[0]" src="/assets/images/hero-img-2.png" width={370} height={438} alt="Free shipping img" />
                </div>
                <h2 className="font-semibold text-lg  text-lightblack max-w-[180px] sm:max-w-[238px] leading-[40px]  ">
                    Free shipping on order over $100
                </h2>
                <div className="pt-[32px]">
                    <ShopNowBtn />
                </div>
            </div>
        </div>
    );
}

export default FreeShipping;
