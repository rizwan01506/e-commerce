import Link from "next/link";
import React, { useState } from "react";

const NavbarMenu = () => {
  const [isShowHomeMenu, setShowHomeMenu] = useState(false);
  const [isShowShpMenu, setShowShopMenu] = useState(false);
  const [isShowBlogMenu, setShowBlogMenu] = useState(false);

  const homedata = ["Home 1", "Home 2", "Home 3", "Home 4"];
  const shopdata = ["Local shop", "shop", "Vegetable shop"];
  const blogdata = ["Carrot", "Green Beans", "Cucumber", "Cabbage"];

  return (
    <>
      <div className="hidden lg:flex space-x-2 xl:space-x-5 items-center ">
        <Link
          href={"/"}
          className="text-xs cursor-pointer font-bold text-lightblack py-3 mr-2"
        >
          Home
        </Link>
        <Link
          href={"/about-us"}
          passHref
          className="text-xs cursor-pointer font-bold text-lightblack py-3"
        >
          About
        </Link>
        <Link
          href={"/catalog"}
          className="text-xs cursor-pointer font-bold text-lightblack py-3 mr-2"
        >
          Shop
        </Link>
        {/* <Link
          href={"/blog&news"}
          passHref
          className="text-xs cursor-pointer font-bold text-lightblack py-3"
        >
          Blog
        </Link> */}
        {/* <div
          className="flex  items-center justify-start relative"
          onMouseOver={() => setShowShopMenu(true)}
          onMouseLeave={() => setShowShopMenu(false)}
        >
          <p className="text-xs cursor-pointer font-bold text-lightblack py-3 mr-2">
            Shop
          </p>
          <DownArrowIcon color="#939393" />

          {isShowShpMenu && <MenuDropDown data={shopdata} />}
        </div>
        <div
          className="flex  items-center justify-start relative"
          onMouseOver={() => setShowBlogMenu(true)}
          onMouseLeave={() => setShowBlogMenu(false)}
        >
          <p className="text-xs cursor-pointer font-bold text-lightblack py-3 mr-2">
            Blog
          </p>
          <DownArrowIcon color="#939393" />

          {isShowBlogMenu && <MenuDropDown data={blogdata} />}
        </div> */}

        <Link
          href={"/ourteam"}
          className="text-xs cursor-pointer font-bold text-lightblack py-3"
        >
          Our team
        </Link>

        <Link
          href={"/contact"}
          passHref
          className="text-xs cursor-pointer font-bold text-lightblack py-3"
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default NavbarMenu;
