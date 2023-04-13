import Link from "next/link";
import React from "react";
import { CartIcon } from "../helper/Icons";

function ItemAddBtn() {
  return (
    <>
      <Link href={"/product/4"}>
        <button className="text-xs font-bol text-primary flex items-center  h-[44px] w-[103px] transition-all duration-300 hover:bg-opacity-80 bg-[#F2F0F0] cursor-pointer justify-center ml-3 font-bold rounded   ">
          <span className="mr-3">
            <CartIcon />{" "}
          </span>
          Add
        </button>
      </Link>
    </>
  );
}

export default ItemAddBtn;
