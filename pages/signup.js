import React from "react";
import NavbarWithoutAuth from "../components/auth/NavbarWithoutAuth";
import SignUpForm from "../components/auth/SignUpForm";
import PageSEO from "../components/common/PageSEO";

const SignUp = () => {
  return (
    <>
      <PageSEO title="Sign Up" />
      <div className="flex flex-col justify-between h-screen">
        <NavbarWithoutAuth />
        <div className="flex flex-col md:flex-row items-center max-w-[1050px] mx-auto justify-between py-8 sm:py-14 w-full flex-grow px-3">
          <div className="w-full md:w-[48%] mb-4 sm:mb-0">
            <img
              src="/assets/images/welcome-back.png"
              className="w-full object-contain max-w-[250px] mx-auto sm:max-w-[500px]"
            />
          </div>
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUp;
