import React, { useState } from "react";
import { AtTheRateIcon } from "../helper/Icons";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="w-full md:w-[48%]">
        <h2 className="text-center sm:text-left text-md2 sm:text-lg font-semibold text-primary mb-5 mx-auto max-w-[350px]">
          Forgot Password
        </h2>

        <div className="max-w-[350px] mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center border-2 border-primary rounded-md h-[41px] mb-3 sm:mb-4">
              <span className="mx-2">
                <AtTheRateIcon />
              </span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                type="email"
                placeholder="Email address"
                className="text-lightblack text-xs outline-none w-full h-full font-semibold"
              />
            </div>

            <button
              type="submit"
              className="my-2 w-full bg-primary rounded-xl text-xs font-medium  h-[46px] text-whisperblue transition-all ease duration-150 hover:sign-up-btn-shadow hover:-translate-y-[3px]"
            >
              Continue
            </button>
            <button className="my-2 w-full bg-white rounded-xl border-primary border text-xs font-medium  h-[46px] text-primary transition-all ease duration-150 hover:sign-up-btn-shadow hover:-translate-y-[3px]">
              Go Back
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
