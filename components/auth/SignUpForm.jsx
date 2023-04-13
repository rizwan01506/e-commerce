import Link from "next/link";
import React from "react";

const SignUpForm = () => {
    return (
        <>
            <div className="w-full md:w-[48%]">
                <h2 className="text-center sm:text-left text-md2 sm:text-lg font-semibold text-primary mb-5 mx-auto max-w-[350px]">Create Account</h2>

                <div className="max-w-[350px] mx-auto">
                    <form>
                        <div className="flex items-center border-2 border-primary rounded-md h-[41px] mb-3 sm:mb-4">
                            <span className="mx-2">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.4396 14.7395C16.2358 13.7816 16.7895 12.6461 17.0539 11.429C17.3184 10.2118 17.2858 8.94891 16.959 7.74703C16.6321 6.54515 16.0206 5.43967 15.1761 4.52411C14.3317 3.60855 13.2791 2.90985 12.1075 2.48711C10.9359 2.06437 9.67973 1.93003 8.44523 2.09545C7.21073 2.26088 6.03423 2.72119 5.01525 3.43747C3.99628 4.15374 3.16481 5.1049 2.59118 6.21048C2.01755 7.31606 1.71864 8.54353 1.71973 9.78907C1.72015 11.5997 2.35821 13.3524 3.52196 14.7395L3.51087 14.7489C3.54968 14.7955 3.59403 14.8354 3.63394 14.8814C3.68383 14.9385 3.73761 14.9923 3.78916 15.0477C3.94438 15.2163 4.10404 15.3781 4.27146 15.53C4.32246 15.5766 4.37512 15.6198 4.42668 15.6642C4.60407 15.8172 4.78646 15.9624 4.9755 16.0977C4.99989 16.1143 5.02206 16.136 5.04646 16.1531V16.1465C6.34483 17.0602 7.89372 17.5505 9.48135 17.5505C11.069 17.5505 12.6179 17.0602 13.9162 16.1465V16.1531C13.9406 16.136 13.9623 16.1143 13.9872 16.0977C14.1757 15.9619 14.3586 15.8172 14.536 15.6642C14.5876 15.6198 14.6402 15.576 14.6912 15.53C14.8587 15.3776 15.0183 15.2163 15.1735 15.0477C15.2251 14.9923 15.2783 14.9385 15.3288 14.8814C15.3681 14.8354 15.413 14.7955 15.4518 14.7484L15.4396 14.7395ZM9.4808 5.35417C9.97419 5.35417 10.4565 5.50048 10.8667 5.77459C11.277 6.0487 11.5967 6.43831 11.7855 6.89415C11.9743 7.34998 12.0237 7.85157 11.9275 8.33548C11.8312 8.81939 11.5936 9.26389 11.2448 9.61277C10.8959 9.96165 10.4514 10.1992 9.96748 10.2955C9.48357 10.3917 8.98198 10.3423 8.52614 10.1535C8.07031 9.96472 7.6807 9.64498 7.40659 9.23474C7.13248 8.8245 6.98617 8.34219 6.98617 7.8488C6.98617 7.18718 7.249 6.55266 7.71683 6.08483C8.18466 5.617 8.81918 5.35417 9.4808 5.35417V5.35417ZM5.04978 14.7395C5.0594 14.0116 5.35521 13.3168 5.87321 12.8053C6.39121 12.2938 7.08975 12.0069 7.81771 12.0065H11.1439C11.8718 12.0069 12.5704 12.2938 13.0884 12.8053C13.6064 13.3168 13.9022 14.0116 13.9118 14.7395C12.696 15.8351 11.1174 16.4415 9.4808 16.4415C7.84418 16.4415 6.26559 15.8351 5.04978 14.7395V14.7395Z"
                                        fill="#130017"
                                    />
                                </svg>
                            </span>
                            <input
                                required
                                type="text"
                                placeholder="Full Name"
                                className="text-lightblack text-xs outline-none w-full h-full font-semibold"
                            />
                        </div>
                        <div className="flex items-center border-2 border-primary rounded-md h-[41px] mb-3 sm:mb-4">
                            <span className="mx-2">
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.48036 1.49257C5.40026 1.49257 2.08887 4.80395 2.08887 8.88406C2.08887 12.9642 5.40026 16.2756 9.48036 16.2756H13.1761V14.7973H9.48036C6.27245 14.7973 3.56717 12.092 3.56717 8.88406C3.56717 5.67615 6.27245 2.97086 9.48036 2.97086C12.6883 2.97086 15.3936 5.67615 15.3936 8.88406V9.94104C15.3936 10.525 14.8688 11.1015 14.2848 11.1015C13.7009 11.1015 13.1761 10.525 13.1761 9.94104V8.88406C13.1761 6.84401 11.5204 5.18831 9.48036 5.18831C7.44031 5.18831 5.78461 6.84401 5.78461 8.88406C5.78461 10.9241 7.44031 12.5798 9.48036 12.5798C10.5004 12.5798 11.4317 12.1659 12.0969 11.4933C12.5774 12.1511 13.4052 12.5798 14.2848 12.5798C15.741 12.5798 16.8719 11.3972 16.8719 9.94104V8.88406C16.8719 4.80395 13.5605 1.49257 9.48036 1.49257ZM9.48036 11.1015C8.25337 11.1015 7.26291 10.111 7.26291 8.88406C7.26291 7.65707 8.25337 6.66661 9.48036 6.66661C10.7073 6.66661 11.6978 7.65707 11.6978 8.88406C11.6978 10.111 10.7073 11.1015 9.48036 11.1015Z"
                                        fill="#130017"
                                    />
                                </svg>
                            </span>
                            <input
                                required
                                type="email"
                                placeholder="Email address"
                                className="text-lightblack text-xs outline-none w-full h-full font-semibold"
                            />
                        </div>
                        <div className="flex items-center border-2 border-primary rounded-md h-[41px] mb-3 sm:mb-4">
                            <span className="mx-2">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.9159 6.83549H15.3942C15.5902 6.83549 15.7782 6.91336 15.9168 7.05198C16.0554 7.1906 16.1333 7.37861 16.1333 7.57464V16.4444C16.1333 16.6405 16.0554 16.8285 15.9168 16.9671C15.7782 17.1057 15.5902 17.1836 15.3942 17.1836H3.56776C3.37173 17.1836 3.18372 17.1057 3.04511 16.9671C2.90649 16.8285 2.82861 16.6405 2.82861 16.4444V7.57464C2.82861 7.37861 2.90649 7.1906 3.04511 7.05198C3.18372 6.91336 3.37173 6.83549 3.56776 6.83549H5.04606V6.09634C5.04606 4.92013 5.51331 3.7921 6.34501 2.9604C7.17672 2.12869 8.30475 1.66145 9.48096 1.66145C10.6572 1.66145 11.7852 2.12869 12.6169 2.9604C13.4486 3.7921 13.9159 4.92013 13.9159 6.09634V6.83549ZM12.4376 6.83549V6.09634C12.4376 5.3122 12.1261 4.56018 11.5716 4.00571C11.0171 3.45124 10.2651 3.13974 9.48096 3.13974C8.69682 3.13974 7.9448 3.45124 7.39033 4.00571C6.83586 4.56018 6.52436 5.3122 6.52436 6.09634V6.83549H12.4376ZM8.74181 11.2704V12.7487H10.2201V11.2704H8.74181ZM5.78521 11.2704V12.7487H7.26351V11.2704H5.78521ZM11.6984 11.2704V12.7487H13.1767V11.2704H11.6984Z"
                                        fill="#130017"
                                    />
                                </svg>
                            </span>
                            <input
                                required
                                type="password"
                                placeholder="Password"
                                className="text-lightblack text-xs outline-none w-full h-full font-semibold"
                            />
                        </div>
                        <label htmlFor="terms-and-privacy" className="flex items-center font-semibold text-xs text-lightblack mb-6 sm:mb-10">
                            <input required id="terms-and-privacy" type="checkbox" className="w-4 h-4 bg-[#CACACA] rounded-md" />
                            <span className="ml-3">
                                I agree with <span className="text-[#FF0532]">Terms</span> and
                                <span className="text-[#FF0532]"> Privacy</span>
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="mb-3 sm:mb-4 w-full bg-primary rounded-xl text-xs font-medium  h-[46px] text-whisperblue transition-all ease duration-150 hover:sign-up-btn-shadow hover:-translate-y-[3px]"
                        >
                            SIGN UP
                        </button>
                    </form>
                    <button className="flex items-center justify-center mb-3 sm:mb-4 w-full border-2 border-primary rounded-xl text-xs font-medium  h-[46px] text-lightblack transition-all ease duration-150 hover:sign-up-btn-shadow hover:-translate-y-[3px]">
                        <span>
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_131_18440)">
                                    <path
                                        d="M3.55633 4.91254C3.78688 4.215 4.23184 3.60809 4.82772 3.1784C5.4236 2.7487 6.13996 2.51816 6.87461 2.51967C7.70739 2.51967 8.46033 2.81533 9.05165 3.29922L10.7724 1.57898C9.72379 0.664895 8.38001 0.100677 6.87461 0.100677C4.54383 0.100677 2.53728 1.43016 1.57245 3.37757L3.55633 4.91254Z"
                                        fill="#EA4335"
                                    />
                                    <path
                                        d="M8.86543 8.97689C8.32832 9.32331 7.64633 9.5081 6.87466 9.5081C6.14293 9.5096 5.42928 9.2809 4.83472 8.85437C4.24017 8.42784 3.79484 7.8251 3.56179 7.13148L1.57101 8.6428C2.05947 9.63143 2.81538 10.4633 3.7529 11.0438C4.69041 11.6244 5.77195 11.9304 6.87466 11.9271C8.31994 11.9271 9.70067 11.4131 10.735 10.4488L8.86593 8.97689H8.86543Z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M10.7348 10.4488C11.8165 9.43959 12.5187 7.93763 12.5187 6.01388C12.5187 5.66401 12.4649 5.28803 12.3846 4.93866H6.87451V7.22362H10.046C9.88975 7.99184 9.46942 8.58661 8.86578 8.97688L10.7348 10.4488Z"
                                        fill="#4A90E2"
                                    />
                                    <path
                                        d="M3.56181 7.13147C3.44126 6.77122 3.38001 6.39377 3.38047 6.01388C3.38047 5.62854 3.44207 5.25847 3.55639 4.91255L1.57251 3.37758C1.16666 4.19689 0.957444 5.09956 0.961483 6.01388C0.961483 6.95999 1.18076 7.8519 1.57103 8.64279L3.56181 7.13147Z"
                                        fill="#FBBC05"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_131_18440">
                                        <rect width="11.8264" height="11.8264" fill="white" transform="translate(0.961426 0.100677)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>{" "}
                        <span className="ml-2">Sign Up with Google</span>
                    </button>

                    <button className="flex items-center justify-center mb-3 sm:mb-4 w-full border-2 border-primary rounded-xl text-xs font-medium  h-[46px] text-lightblack transition-all ease duration-150 hover:sign-up-btn-shadow hover:-translate-y-[3px]">
                        <span>
                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_131_18457)">
                                    <path
                                        d="M12 6.73251C12 3.39801 9.31354 0.695007 6.00004 0.695007C2.68504 0.695757 -0.00146484 3.39801 -0.00146484 6.73326C-0.00146484 9.74601 2.19304 12.2435 5.06104 12.6965V8.47776H3.53854V6.73326H5.06254V5.40201C5.06254 3.88926 5.95879 3.05376 7.32904 3.05376C7.98604 3.05376 8.67229 3.17151 8.67229 3.17151V4.65651H7.91554C7.17079 4.65651 6.93829 5.12226 6.93829 5.60001V6.73251H8.60179L8.33629 8.47701H6.93754V12.6958C9.80554 12.2428 12 9.74526 12 6.73251Z"
                                        fill="#699BF7"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_131_18457">
                                        <rect width="12" height="12" fill="white" transform="translate(0 0.69577)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>{" "}
                        <span className="ml-2">Sign Up with Google</span>
                    </button>

                    <p className="text-base font-medium text-lightblack text-center">
                        Already have an account?{" "}
                        <Link href={"/login"} className="text-[#FF0532]">
                            {" "}
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default SignUpForm;
