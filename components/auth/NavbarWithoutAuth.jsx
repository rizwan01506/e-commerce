import Link from "next/link";
import React from "react";

const NavbarWithoutAuth = () => {
  return (
    <>
      <div className="container flex items-center justify-between py-2 sm:py-4">
        <div className="flex items-center">
          <svg
            className="w-12 h-12 sm:w-[66px] sm:h-[66px]"
            width="66"
            height="66"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M37.982 0.502319L0.956421 37.6796L37.982 75.2883L75.8332 37.3843L37.982 0.502319ZM39.3601 4.95338L71.8899 36.9L46.756 30.1216L39.3601 4.95338ZM5.95466 35.5248L24.61 24.487L36.4439 4.94179L5.95466 35.5248ZM31.2637 46.2329L49.9628 51.1288L37.9912 71.2579L31.2637 46.2329ZM36.944 71.21L5.74351 39.5509L30.1511 45.9416L36.944 71.21ZM37.3952 72.8883L37.2841 72.9995L37.4253 72.9999L37.3952 72.8883ZM71.848 37.7613L52.1081 49.0171L47.086 31.211L71.848 37.7613ZM44.8434 30.6178L50.0598 49.1129L30.6733 44.0369L25.7049 25.5551L44.8434 30.6178ZM68.6665 41.9309L41.942 68.5742L52.0082 51.5235L68.6665 41.9309ZM4.70295 37.2486L29.5758 43.7599L24.7462 25.5861L4.70295 37.2486ZM44.5736 29.5407L37.5695 4.83618L25.7646 24.5515L44.5736 29.5407Z"
              fill="#130017"
            />
          </svg>{" "}
          <Link
            href="/"
            passHref
            className="hidden sm:inline-block text-xxl font-semibold ml-3"
          >
            24X7
          </Link>
        </div>

        <div className="flex items-center">
          <Link
            passHref
            href="/about-us"
            className="mr-4 sm:mr-8 text-primary text-md font-medium"
          >
            About Us
          </Link>
          <Link
            passHref
            href="/contact"
            className="text-primary text-md font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarWithoutAuth;
