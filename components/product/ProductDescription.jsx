import React from "react";
import { fruitsProducts } from "../helper/Helper";

const ProductDescription = () => {
    return (
        <div className="p-[10px] sm:p-[20px]">
            <h4 className="font-bold text-base sm:text-md text-lightblack leading-[25px]">How to choose figs </h4>
            <p className="font-normal text-sm mt-2 text-lightblack leading-[19px]">The characteristics of a good fruit are:</p>
            <div>
                {fruitsProducts.map((item, index) => (
                    <div key={index} className="flex items-center mt-[8px]">
                        <div>
                            <div className="h-[6px] w-[6px] bg-black rounded-[50%] mr-[9px]"></div>
                        </div>
                        <p className="font-normal  text-xs ff_lato text-lightblack">{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="mt-[20px]">
                <h4 className="font-bold text-base sm:text-md text-lightblack">Vaporesso Xros 2 Pod System</h4>
            </div>
            <div>
                <p className="font-normal text-xs sm:text-sm text-lightblack leading-[19px] ff_lato">
                    Vaporesso Xros 2 features a number of improvements over the original. First up we have the USB Type-C fast charge (5V/1A) 1000mAh
                    battery which can be fully charged in 60 minutes. At the bottom, below the firing button are 4 lights which light up when you
                </p>
                <p className="font-normal text-xs sm:text-sm text-lightblack leading-[19px] ff_lato">
                    Depending on what your preference is for vaping you can use either the firing key or auto draw to vape. Vaporesso Xros 2 is
                    compatible with all XROS pods, in the kit you get both the 0.8Ω Mesh Pod and a 1.2Ω pod.
                </p>
                <p className="font-normal mt-2 sm:mt-5 text-xs sm:text-sm text-lightblack leading-[19px] ff_lato">
                    Each pod has a vape juice capacity of 2mL and is easily refilled on the top by clicking off the top cap. Vape juice levels can be
                    easily seen thanks to the 360° viewing window. So you can make sure you never dry burn your coil.
                </p>
                <p className="font-normal text-sm mt-2 sm:mt-5 text-lightblack leading-[19px] ff_lato">
                    Vaporesso Xros 2 features a new 150° curved base which feels nicer in the hand but also improves the overall design aesthetic.
                </p>
                {/* <p className="font-normal text-sm mt-2 sm:mt-5 text-lightblack leading-[19px] ff_lato">
                    How to eat figs. The fig berry must be clean and dry. The fruits are consumed whole, they can be eaten by hand or cut into pieces.
                    There is no need for any heat treatment of figs, since the berries themselves are so tasty and rich in nutrients that they do not
                    need to be supplemented. However, if you feel like using them as an ingredient in a salad, smug or dessert, go for it! More daring
                    cooks make fig jam, bake and even fry.
                </p> */}
                <p className="font-normal text-xs sm:text-sm text-lightblack mt-2 sm:mt-5 leading-[19px] ff_lato">Useful properties of figs</p>
                <p className="font-normal text-xs sm:text-sm text-lightblack leading-[19px] ff_lato">
                    Due to the low calorie content, but at the same time, the rich composition of micro and macro elements, fruits are an excellent
                    food product for those who care about their health, although the price of figs is not the lowest.
                </p>
            </div>
        </div>
    );
};

export default ProductDescription;
