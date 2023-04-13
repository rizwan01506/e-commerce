import Link from "next/link";
import React, { useState } from "react";
import { SearchIcon } from "../helper/Icons";
import { AccountIcon, CartIcon, WishListIcon } from "../helper/Svg";
import AllCategoriesSelect from "./AllCategoriesSelect";
import MobileNavSearch from "./MobileNavSearch";

const Navbar = () => {
  const categories = [
    { name: "All Categories" },
    { name: "Sets" },
    { name: "Vaps" },
    { name: "Vaping" },
    { name: "Drinks" },
    { name: "Drinks" },
    { name: "Drinks" },
    { name: "Tanks" },
  ];

  const [isShowSearch, setShowSearch] = useState(false);
  return (
    <>
      <nav className="container flex items-center justify-between py-2 sm:py-4 relative">
        {isShowSearch && (
          <div className="flex items-center justify-between absolute top-0 left-0 w-full bg-white shadow-sm py-4  px-3 z-30">
            <input
              className="w-full outline-none border border-gray h-[35px] px-3 py-1 rounded-sm"
              type="text"
              placeholder="Search..."
            />
            <span
              className="cursor-pointer absolute right-6 "
              onClick={() => setShowSearch(false)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.63992 2.27L7.49992 6.13L11.3399 2.29C11.4247 2.19972 11.5269 2.12749 11.6403 2.07766C11.7537 2.02783 11.8761 2.00141 11.9999 2C12.2651 2 12.5195 2.10536 12.707 2.29289C12.8946 2.48043 12.9999 2.73478 12.9999 3C13.0023 3.1226 12.9795 3.24439 12.9331 3.35788C12.8866 3.47138 12.8175 3.57419 12.7299 3.66L8.83992 7.5L12.7299 11.39C12.8947 11.5512 12.9914 11.7696 12.9999 12C12.9999 12.2652 12.8946 12.5196 12.707 12.7071C12.5195 12.8946 12.2651 13 11.9999 13C11.8725 13.0053 11.7453 12.984 11.6265 12.9375C11.5078 12.8911 11.3999 12.8204 11.3099 12.73L7.49992 8.87L3.64992 12.72C3.56542 12.8073 3.46448 12.8769 3.35292 12.925C3.24136 12.9731 3.12138 12.9986 2.99992 13C2.7347 13 2.48035 12.8946 2.29281 12.7071C2.10528 12.5196 1.99992 12.2652 1.99992 12C1.99759 11.8774 2.02033 11.7556 2.06676 11.6421C2.11319 11.5286 2.18233 11.4258 2.26992 11.34L6.15992 7.5L2.26992 3.61C2.1051 3.44876 2.00846 3.23041 1.99992 3C1.99992 2.73478 2.10528 2.48043 2.29281 2.29289C2.48035 2.10536 2.7347 2 2.99992 2C3.23992 2.003 3.46992 2.1 3.63992 2.27Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        )}

        <Link href="/" passHref className="text-lg sm:text-xxl font-semibold">
          24X7
        </Link>

        <div className="border-lightSky rounded-[4px] border-[1px] py-2 px-3 h-[44px] hidden xl:flex items-center">
          <div className="w-[140px] border-r border-[#939393] mr-4">
            <AllCategoriesSelect categories={categories} font="font-bold" />
          </div>
          <input
            className="w-100 outline-none"
            type="text"
            placeholder="Search..."
          />
          <span className="cursor-pointer">
            <SearchIcon />
          </span>
        </div>

        <div className="xl:hidden" onClick={() => setShowSearch(true)}>
          <SearchIcon />
        </div>

        <div className="hidden sm:flex shadow-dropdown rounded-[4px] bg-white w-[180px] items-center px-3 py-2 h-[44px]">
          <span className="mr-2">
            <svg
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 6.25C6.92893 6.25 5.25 7.92893 5.25 10C5.25 12.0711 6.92893 13.75 9 13.75C11.0711 13.75 12.75 12.0711 12.75 10C12.75 7.92893 11.0711 6.25 9 6.25ZM6.75 10C6.75 8.75736 7.75736 7.75 9 7.75C10.2426 7.75 11.25 8.75736 11.25 10C11.25 11.2426 10.2426 12.25 9 12.25C7.75736 12.25 6.75 11.2426 6.75 10Z"
                fill="#939393"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0.25C4.11666 0.25 0.25 4.49277 0.25 9.6087C0.25 11.2494 1.06511 13.1814 2.09064 14.9945C3.13277 16.837 4.46288 18.6762 5.62903 20.1633L5.66793 20.2129C6.23714 20.9388 6.72203 21.5573 7.19224 21.9844C7.70524 22.4504 8.27094 22.7555 9 22.7555C9.72906 22.7555 10.2948 22.4504 10.8078 21.9844C11.278 21.5572 11.7629 20.9388 12.3321 20.2129L12.371 20.1633C13.5371 18.6762 14.8672 16.837 15.9094 14.9945C16.9349 13.1814 17.75 11.2494 17.75 9.6087C17.75 4.49277 13.8833 0.25 9 0.25ZM1.75 9.6087C1.75 5.21571 5.04678 1.75 9 1.75C12.9532 1.75 16.25 5.21571 16.25 9.6087C16.25 10.8352 15.6104 12.4764 14.6037 14.256C13.6137 16.0063 12.3342 17.7794 11.1906 19.2377C10.5717 20.027 10.1641 20.5426 9.79918 20.8741C9.46635 21.1764 9.24418 21.2555 9 21.2555C8.75582 21.2555 8.53365 21.1764 8.20082 20.8741C7.83587 20.5426 7.42834 20.027 6.80938 19.2377C5.66578 17.7794 4.38628 16.0063 3.39625 14.256C2.38962 12.4764 1.75 10.8352 1.75 9.6087Z"
                fill="#939393"
              />
            </svg>
          </span>

          <div className="w-[170px]">
            <AllCategoriesSelect categories={categories} font="font-bold" />
          </div>
        </div>

        <div className="flex items-center">
          <Link passHref href="/account/wishlist" className="flex items-center">
            <span className="relative mr-1">
              <WishListIcon />
              <span className="bg-primary flex items-center justify-center w-4 h-4 rounded-full absolute -right-1 -top-[6px] text-white text-[10px]">
                1
              </span>
            </span>

            <span className="text-lightblack hidden sm:inline-block">
              Wishlist{" "}
            </span>
          </Link>
          <Link passHref href="/cart" className="flex items-center mx-4">
            <span className="relative mr-1">
              <CartIcon />
              <span className="bg-primary flex items-center justify-center w-4 h-4 rounded-full absolute -right-1 -top-[6px] text-white text-[10px]">
                1
              </span>
            </span>

            <span className="text-lightblack  hidden sm:inline-block">
              Cart{" "}
            </span>
          </Link>
          <Link passHref href="/account/profile" className="flex items-center">
            <span className="mr-1">
              <AccountIcon />
            </span>

            <span className="text-lightblack  hidden sm:inline-block">
              Account{" "}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
