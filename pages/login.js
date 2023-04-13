import React from "react";
import NavbarWithoutAuth from "../components/auth/NavbarWithoutAuth";
import LoginForm from "../components/auth/LoginForm";
import PageSEO from "../components/common/PageSEO";

const Login = () => {
  return (
    <>
      <PageSEO title="Login" />
      <div className="flex flex-col justify-between h-screen">
        <NavbarWithoutAuth />
        <div className="flex flex-col md:flex-row items-center max-w-[1050px] mx-auto justify-between py-8 sm:py-14 w-full flex-grow px-3">
          {/* <div className="w-full md:w-[48%] mb-4 sm:mb-0">
            <img
              src="https://img.freepik.com/free-vector/website-login-page-template-design_1017-30785.jpg"
              className="w-full object-contain max-w-[250px] mx-auto sm:max-w-[500px]"
            />
          </div> */}
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
