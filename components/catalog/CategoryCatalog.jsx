import Image from "next/image";
import React from "react";
import { LeftArrowIcon } from "../helper/Svg";

const CategoryCatalog = () => {
  const catalogocategory = [
    {
      icon: "/assets/images/catlog-sidebar-img-1.png",
      cateogryname: "Sets",
      item: 12,
    },
    {
      icon: "/assets/images/catlog-sidebar-img-2.png",
      cateogryname: "Vaping",
      item: 87,
    },
    {
      icon: "/assets/images/catlog-sidebar-img-3.png",
      cateogryname: "SKE Vaping",
      item: 35,
    },
    {
      icon: "/assets/images/catlog-sidebar-img-4.png",
      cateogryname: "E-liquid Vaping",
      item: 63,
    },
    {
      icon: "/assets/images/catlog-sidebar-img-5.png",
      cateogryname: "Fungi Vaping",
      item: 27,
    },
    {
      icon: "/assets/images/catlog-sidebar-img-6.png",
      cateogryname: "Groceries Vaping",
      item: 77,
    },
    {
      icon: "/assets/images/catlog-sidebar-img-3.png",
      cateogryname: "Sweets Vaping",
      item: 44,
    },
    {
      icon: "/assets/images/catlog-sidebar-img-1.png",
      cateogryname: "ELF Bar Vaping",
      item: 45,
    },
  ];
  return (
    <>
      {" "}
      <div className="flex items-center justify-between border-b  border-gray mb-4 pb-3">
        <h4 className="text-lightblack font-bold text-md">Category</h4>
        <LeftArrowIcon />
      </div>
      {catalogocategory &&
        catalogocategory.map((obj, index) => (
          <div
            key={index}
            className="mb-3 ff_lato bg-white border rounded border-whisperblue p-2 flex  items-center justify-between transition-all duration-200 ease-in hover:shadow-categorycard cursor-pointer"
          >
            <div className="flex items-center ">
              <Image src={obj.icon} width={32} height={32} />
              <p className="text-base text-lightblack ml-2">
                {obj.cateogryname}
              </p>
            </div>
            <span className="text-xsm text-lightblack bg-whisperblue rounded-full flex justify-center items-center w-6 h-6">
              {obj.item}
            </span>
          </div>
        ))}
    </>
  );
};

export default CategoryCatalog;
