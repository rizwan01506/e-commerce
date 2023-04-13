import React from "react";
import {
  productsWithDeliverydesc,
  productsWithDeliverylist,
} from "../helper/Helper";
import { DotsIcon } from "../helper/Icons";

const ProductsWithDelivery = () => {
  return (
    <div>
      <div className="container mx-auto  mt-[60px] md:mt-[100px]">
        <h2 className="font-semibold text-md2 sm:text-lg md:text-xxl text-lightblack max-w-[502px] mx-auto text-center leading-[35px] sm:leading-[40px] md:leading-[52px]">
          Online Store of{" "}
          <span className="text-primary ">Products With Delivery</span>
        </h2>
        <p className="font-normal text-sm mt-[20px] sm:mt-[40px] text-lightblack ff_lato leading-[19px]">
          <span className="text-primary">Lorem ipsum</span> Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Iste sed iure ipsum, cumque
          enim veritatis placeat rerum quas, obcaecati nemo sit consectetur
          voluptate. Aspernatur id soluta voluptate iusto quae impedit.
        </p>
        <p className="font-normal text-sm  text-lightblack ff_lato mt-[6px] sm:mt-[12px] leading-[19px]">
          orem ipsum dolor sit amet consectetur, adipisicing elit. Iste sed iure
          ipsum, cumque enim veritatis placeat rerum quas, obcaecati nemo sit
          consectetur voluptate. Aspernatur id soluta voluptate iusto quae
          impedit.
        </p>
        <h4 className="text-md font-bold text-lightblack mt-[20px] sm:mt-[40px] ">
          Assortment
        </h4>
        <p className="font-normal text-sm  text-lightblack ff_lato mb-[6px] sm:mb-[12px] mt-[10px] sm:mt-[20px] leading-[19px]">
          orem ipsum dolor sit amet consectetur, adipisicing elit. Iste sed iure
          ipsum, cumque enim veritatis placeat rerum quas, obcaecati nemo sit
          consectetur voluptate. Aspernatur id soluta voluptate iusto quae
          impedit.
        </p>
        {productsWithDeliverylist.map((item, index) => (
          <div key={index} className="flex items-center mt-[8px]">
            <span className="mr-[9px]">
              <DotsIcon />
            </span>
            <p className="font-normal ff_lato text-xs text-lightblack">
              {item.title}
            </p>
          </div>
        ))}
        {productsWithDeliverydesc.map((item, index) => (
          <p
            key={index}
            className="font-normal text-sm  text-lightblack ff_lato mt-[6px] sm:mt-[12px] leading-[19px]"
          >
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductsWithDelivery;
