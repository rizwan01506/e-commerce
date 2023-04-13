import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import LogOutPopup from "./LogOutPopup";
import { useState } from "react";

const AccountSideBar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside
        className={`mb-5 lg:mb-0 lg:h-screen max-h-full overflow-auto xl:overflow-visible z-[100] w-full py-2 lg:py-10 lg:max-w-[260px] shadow-[0_0_5px_rgba(0,0,0,0.2)]  rounded-md top-0 transition-all duration-200 ease-in`}
      >
        <ul className="flex items-center lg:block flex-wrap whitespace-nowrap">
          <li
            className={`mb-1 font-medium text-sm sm:text-base text-primary rounded-sm ${
              router.asPath === "/account/profile"
                ? "bg-lightSky bg-opacity-70 "
                : ""
            }`}
          >
            <Link
              className="flex items-center  p-2 sm:py-3 sm:px-5"
              href={"/account/profile"}
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.61 8.34C16.68 8.34 17.54 9.2 17.54 10.27C17.54 11.34 16.68 12.2 15.61 12.2C14.54 12.2 13.68 11.34 13.68 10.27C13.67 9.2 14.54 8.34 15.61 8.34ZM9.61 6.76C10.91 6.76 11.97 7.82 11.97 9.12C11.97 10.42 10.91 11.48 9.61 11.48C8.31 11.48 7.25 10.42 7.25 9.12C7.25 7.81 8.3 6.76 9.61 6.76ZM9.61 15.89V19.64C7.21 18.89 5.31 17.04 4.47 14.68C5.52 13.56 8.14 12.99 9.61 12.99C10.14 12.99 10.81 13.07 11.51 13.21C9.87 14.08 9.61 15.23 9.61 15.89ZM12 20C11.73 20 11.47 19.99 11.21 19.96V15.89C11.21 14.47 14.15 13.76 15.61 13.76C16.68 13.76 18.53 14.15 19.45 14.91C18.28 17.88 15.39 20 12 20Z"
                    fill="#130017"
                  />
                </svg>
              </span>
              Profile
            </Link>
          </li>
          <li
            className={`mb-1 font-medium text-sm sm:text-base text-primary rounded-sm ${
              router.asPath === "/account/notification"
                ? "bg-lightSky bg-opacity-70 "
                : ""
            }`}
          >
            {" "}
            <Link
              className="flex items-center p-2 sm:py-3 sm:px-5 w-full"
              href={"/account/notification"}
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_4)">
                    <path
                      d="M18 34.28C18.6299 34.2655 19.2345 34.0287 19.7066 33.6114C20.1788 33.1942 20.4881 32.6234 20.58 32H15.32C15.4145 32.6403 15.7383 33.2245 16.2313 33.6439C16.7243 34.0633 17.3528 34.2894 18 34.28Z"
                      fill="#130017"
                    />
                    <path
                      d="M32.85 28.13L32.51 27.83C31.5454 26.9706 30.7011 25.985 30 24.9C29.2342 23.4025 28.7752 21.7672 28.65 20.09V15.15C28.6459 14.5499 28.5924 13.9513 28.49 13.36C26.7961 13.0118 25.2746 12.089 24.183 10.7478C23.0914 9.40654 22.4969 7.72929 22.5 5.99999V5.36999C21.4559 4.85618 20.3342 4.5183 19.18 4.36999V3.10999C19.18 2.75593 19.0393 2.41637 18.789 2.16601C18.5386 1.91565 18.1991 1.77499 17.845 1.77499C17.4909 1.77499 17.1514 1.91565 16.901 2.16601C16.6506 2.41637 16.51 2.75593 16.51 3.10999V4.41999C13.9257 4.78455 11.5606 6.07174 9.85121 8.04393C8.14186 10.0161 7.20372 12.5401 7.20999 15.15V20.09C7.08474 21.7672 6.62577 23.4025 5.85999 24.9C5.17087 25.9823 4.34018 26.9677 3.38999 27.83L3.04999 28.13V30.95H32.85V28.13Z"
                      fill="#130017"
                    />
                    <path
                      d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"
                      fill="#130017"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_4">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Notification
            </Link>
          </li>
          <li
            className={`mb-1 font-medium text-sm sm:text-base text-primary rounded-sm ${
              router.asPath === "/account/payment"
                ? "bg-lightSky bg-opacity-70 "
                : ""
            }`}
          >
            <Link
              className="flex items-center p-2 sm:py-3 sm:px-5 w-full"
              href={"/account/payment"}
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 3C2.83696 3 2.20107 3.26339 1.73223 3.73223C1.26339 4.20107 1 4.83696 1 5.5V6H15V5.5C15 4.83696 14.7366 4.20107 14.2678 3.73223C13.7989 3.26339 13.163 3 12.5 3H3.5ZM15 7H1V10.5C1 11.163 1.26339 11.7989 1.73223 12.2678C2.20107 12.7366 2.83696 13 3.5 13H12.5C13.163 13 13.7989 12.7366 14.2678 12.2678C14.7366 11.7989 15 11.163 15 10.5V7ZM10.5 10H12.5C12.6326 10 12.7598 10.0527 12.8536 10.1464C12.9473 10.2402 13 10.3674 13 10.5C13 10.6326 12.9473 10.7598 12.8536 10.8536C12.7598 10.9473 12.6326 11 12.5 11H10.5C10.3674 11 10.2402 10.9473 10.1464 10.8536C10.0527 10.7598 10 10.6326 10 10.5C10 10.3674 10.0527 10.2402 10.1464 10.1464C10.2402 10.0527 10.3674 10 10.5 10Z"
                    fill="#130017"
                  />
                </svg>
              </span>
              Payment
            </Link>
          </li>
          <li
            className={`mb-1 font-medium text-sm sm:text-base text-primary rounded-sm ${
              router.asPath === "/account/wishlist"
                ? "bg-lightSky bg-opacity-70 "
                : ""
            }`}
          >
            <Link
              className="flex items-center  p-2 sm:py-3 sm:px-5"
              href={"/account/wishlist"}
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                    fill="#130017"
                  />
                </svg>
              </span>
              Wishlist
            </Link>
          </li>
          <li
            className={`mb-1 font-medium text-sm sm:text-base text-primary rounded-sm ${
              router.asPath === "/cart" ? "bg-lightSky bg-opacity-70 " : ""
            }`}
          >
            <Link
              className="flex items-center p-2 sm:py-3 sm:px-5 w-full"
              href={"/cart"}
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_11)">
                    <path
                      d="M9 20C9.26522 20 9.51957 20.1053 9.70711 20.2929C9.89465 20.4804 10 20.7348 10 21C10 21.2652 9.89465 21.5196 9.70711 21.7071C9.51957 21.8946 9.26522 22 9 22C8.73479 22 8.48043 21.8946 8.2929 21.7071C8.10536 21.5196 8 21.2652 8 21C8 20.7348 8.10536 20.4804 8.2929 20.2929C8.48043 20.1053 8.73479 20 9 20ZM16 20C16.2652 20 16.5196 20.1053 16.7071 20.2929C16.8946 20.4804 17 20.7348 17 21C17 21.2652 16.8946 21.5196 16.7071 21.7071C16.5196 21.8946 16.2652 22 16 22C15.7348 22 15.4804 21.8946 15.2929 21.7071C15.1054 21.5196 15 21.2652 15 21C15 20.7348 15.1054 20.4804 15.2929 20.2929C15.4804 20.1053 15.7348 20 16 20ZM2.2 2.89999C2.34609 2.70516 2.55825 2.57034 2.79668 2.52081C3.0351 2.47128 3.28341 2.51046 3.495 2.63099L3.6 2.70099L5.308 3.98099C5.59867 4.19908 5.82442 4.49225 5.961 4.82899L6.021 4.99999H18.867C19.1381 4.99992 19.4064 5.05497 19.6556 5.16179C19.9047 5.26862 20.1296 5.42499 20.3165 5.6214C20.5033 5.81781 20.6483 6.05016 20.7426 6.30434C20.8369 6.55852 20.8786 6.82922 20.865 7.09999L20.852 7.24799L20.395 10.903C20.2579 12.0029 19.7591 13.0261 18.9771 13.8117C18.1951 14.5973 17.1743 15.1008 16.075 15.243L15.849 15.266L8.536 15.876L8.796 17H17.5C17.7549 17.0003 18 17.0979 18.1854 17.2728C18.3707 17.4478 18.4822 17.6869 18.4972 17.9414C18.5121 18.1958 18.4293 18.4464 18.2657 18.6418C18.1021 18.8373 17.8701 18.9629 17.617 18.993L17.5 19H8.796C8.37161 19.0001 7.95819 18.8651 7.61555 18.6147C7.27291 18.3643 7.01881 18.0114 6.89 17.607L6.847 17.45L4.107 5.57999L2.4 4.29999C2.18783 4.14086 2.04756 3.90396 2.01005 3.64141C1.97255 3.37886 2.04087 3.11216 2.2 2.89999Z"
                      fill="#130017"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_11">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              My Cart
            </Link>
          </li>
          <li
            className={`mb-1 font-medium text-sm sm:text-base text-primary rounded-sm ${
              router.asPath === "/privacy" ? "bg-lightSky bg-opacity-70 " : ""
            }`}
          >
            <Link
              className="flex items-center p-2 sm:py-3 sm:px-5 w-full"
              href={"/privacy"}
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8ZM18 23C16.6167 23 15.4373 22.5123 14.462 21.537C13.4867 20.5617 12.9993 19.3827 13 18C13 16.6167 13.4877 15.4373 14.463 14.462C15.4383 13.4867 16.6173 12.9993 18 13C19.3833 13 20.5627 13.4877 21.538 14.463C22.5133 15.4383 23.0007 16.6173 23 18C23 19.3833 22.5123 20.5627 21.537 21.538C20.5617 22.5133 19.3827 23.0007 18 23ZM19.3 20C19.4 20.1 19.5167 20.15 19.65 20.15C19.7833 20.15 19.9 20.1 20 20C20.1 19.9 20.15 19.7833 20.15 19.65C20.15 19.5167 20.1 19.4 20 19.3L18.5 17.8V15.5C18.5 15.3667 18.45 15.25 18.35 15.15C18.25 15.05 18.1333 15 18 15C17.8667 15 17.75 15.05 17.65 15.15C17.55 15.25 17.5 15.3667 17.5 15.5V18C17.5 18.0333 17.55 18.15 17.65 18.35L19.3 20ZM6 22C5.45 22 4.979 21.804 4.587 21.412C4.195 21.02 3.99934 20.5493 4 20V10C4 9.45 4.196 8.979 4.588 8.587C4.98 8.195 5.45067 7.99933 6 8H7V6C7 4.61667 7.48767 3.43733 8.463 2.462C9.43834 1.48667 10.6173 0.999334 12 1C13.3833 1 14.5627 1.48767 15.538 2.463C16.5133 3.43833 17.0007 4.61733 17 6V8H18C18.55 8 19.021 8.196 19.413 8.588C19.805 8.98 20.0007 9.45067 20 10V11.3C19.6667 11.1833 19.3333 11.104 19 11.062C18.6667 11.02 18.3333 10.9993 18 11C16.05 11 14.3957 11.6793 13.037 13.038C11.6783 14.3967 10.9993 16.0507 11 18C11 18.7167 11.1127 19.4123 11.338 20.087C11.5633 20.7617 11.8673 21.3993 12.25 22H6Z"
                    fill="black"
                  />
                </svg>
              </span>
              Privacy Policy
            </Link>
          </li>
          <li
            className={`mb-1 font-medium text-sm sm:text-base text-primary rounded-sm ${
              router.asPath === "/terms-and-conditions"
                ? "bg-lightSky bg-opacity-70 "
                : ""
            }`}
          >
            <Link
              className="flex items-center p-2 sm:py-3 sm:px-5 w-full"
              href={"/terms-and-conditions"}
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.9043 8.52067 13 8.28333 13 8C13 7.71667 12.9043 7.479 12.713 7.287C12.521 7.09567 12.2833 7 12 7C11.7167 7 11.4793 7.09567 11.288 7.287C11.096 7.479 11 7.71667 11 8C11 8.28333 11.096 8.52067 11.288 8.712C11.4793 8.904 11.7167 9 12 9ZM12 22C9.68333 21.4167 7.771 20.0873 6.263 18.012C4.75433 15.9373 4 13.6333 4 11.1V5L12 2L20 5V11.1C20 13.6333 19.246 15.9373 17.738 18.012C16.2293 20.0873 14.3167 21.4167 12 22Z"
                    fill="black"
                  />
                </svg>
              </span>
              T & C
            </Link>
          </li>{" "}
          <li
            className={`mb-1 font-medium text-sm sm:text-base text-primary rounded-sm ${
              router.asPath === "/cart" ? "bg-lightSky bg-opacity-70 " : ""
            }`}
          >
            <span
              onClick={() => setOpen(true)}
              className="flex items-center p-2 sm:py-3 sm:px-5 w-full cursor-pointer"
            >
              <span className="mr-1 sm:mr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 2C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H12C12.7956 22 13.5587 21.6839 14.1213 21.1213C14.6839 20.5587 15 19.7956 15 19V5C15 4.20435 14.6839 3.44129 14.1213 2.87868C13.5587 2.31607 12.7956 2 12 2H6ZM16.293 7.293C16.4805 7.10553 16.7348 7.00021 17 7.00021C17.2652 7.00021 17.5195 7.10553 17.707 7.293L21.707 11.293C21.8945 11.4805 21.9998 11.7348 21.9998 12C21.9998 12.2652 21.8945 12.5195 21.707 12.707L17.707 16.707C17.5184 16.8892 17.2658 16.99 17.0036 16.9877C16.7414 16.9854 16.4906 16.8802 16.3052 16.6948C16.1198 16.5094 16.0146 16.2586 16.0123 15.9964C16.01 15.7342 16.1108 15.4816 16.293 15.293L18.586 13H10C9.73478 13 9.48043 12.8946 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12C9 11.7348 9.10536 11.4804 9.29289 11.2929C9.48043 11.1054 9.73478 11 10 11H18.586L16.293 8.707C16.1055 8.51947 16.0002 8.26516 16.0002 8C16.0002 7.73484 16.1055 7.48053 16.293 7.293Z"
                    fill="black"
                  />
                </svg>
              </span>
              Logout
            </span>
          </li>
        </ul>
      </aside>

      <LogOutPopup open={open} setOpen={setOpen} />
    </>
  );
};

export default AccountSideBar;
