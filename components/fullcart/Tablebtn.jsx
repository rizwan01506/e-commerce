import Link from "next/link";
import React from "react";
import { LeftIcon, RefreshIcon } from "../helper/Icons";

function Tablebtn() {
  return (
    <>
      <div className="my-6 flex  justify-between  items-center flex-wrap    ">
        <Link href={"/catalog"}>
          <button className=" sm:px-5x px-3 sm:text-xs text-[12px] my-4 sm:py-[13px] py-[10px] text-primary flex items-center justify-center font-bold bg-[#F2F0F0] transition-all duration-300 hover:bg-[#e1dfdf] rounded mx-1 ">
            <LeftIcon />
            <span className="ml-2">Continue Shopping</span>
          </button>{" "}
        </Link>
        <Link href={"# "}>
          <button className=" sm:px-5x px-3 sm:text-xs text-[12px] my-4 sm:py-[13px] py-[10px] text-white flex items-center justify-center font-bold bg-[#F59758] transition-all duration-300 hover:bg-[#ee8b4a] rounded  mx-1 ">
            <RefreshIcon />
            <span className="ml-2">Update Cart</span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Tablebtn;
