import Link from "next/link";
import React, { useState } from "react";
import { AtTheRateIcon, Facebook, GoogleIcon, LockIcon } from "../helper/Icons";

const LoginForm = () => {
  const intialState = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(intialState);

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="w-full">
        <h2 className="text-center sm:text-left text-md2 sm:text-lg font-semibold text-primary mb-5 mx-auto max-w-[350px]">
          Login
        </h2>

        <div className="max-w-[350px] mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center border-2 border-primary rounded-md h-[41px] mb-3 sm:mb-4">
              <span className="mx-2">
                <AtTheRateIcon />
              </span>
              <input
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
                value={loginData.email}
                required
                type="email"
                placeholder="Email address"
                className="text-lightblack text-xs outline-none w-full h-full font-semibold"
              />
            </div>
            <div className="flex items-center border-2 border-primary rounded-md h-[41px] mb-4">
              <span className="mx-2">
                <LockIcon />
              </span>
              <input
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
                value={loginData.password}
                required
                type="password"
                placeholder="Password"
                className="text-lightblack text-xs outline-none w-full h-full font-semibold"
              />
            </div>
            <div className="flex justify-end">
              <Link
                href={"/forgot-password"}
                className="text-[#FF0532] font-semibold"
              >
                Forgot password
              </Link>
            </div>
            <button
              type="submit"
              className="my-3 sm:my-4 w-full bg-primary rounded-xl text-xs font-medium  h-[46px] text-whisperblue transition-all ease duration-150 hover:sign-up-btn-shadow hover:-translate-y-[3px]"
            >
              LOG IN
            </button>
            <button className="flex items-center justify-center mb-3 sm:mb-4 w-full border-2 border-primary rounded-xl text-xs font-medium  h-[46px] text-lightblack transition-all ease duration-150 hover:sign-up-btn-shadow hover:-translate-y-[3px]">
              <span>
                <GoogleIcon />
              </span>
              <span className="ml-2">Sign Up with Google</span>
            </button>
          </form>
          <button className="flex items-center justify-center mb-3 sm:mb-4 w-full border-2 border-primary rounded-xl text-xs font-medium  h-[46px] text-lightblack transition-all ease duration-150 hover:sign-up-btn-shadow hover:-translate-y-[3px]">
            <span>
              <Facebook />
            </span>
            <span className="ml-2">Sign Up with Facebook</span>
          </button>

          <p className="text-base font-medium text-lightblack text-center">
            Don&apos;t have an account?
            <Link href={"/signup"} className="text-[#FF0532]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
