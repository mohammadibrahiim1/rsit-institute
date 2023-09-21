import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      {" "}
      <div class=" min-w-screen  flex items-center justify-center">
        <div class="bg-white text-gray-500  shadow-xl w-full overflow-hidden">
          <div class="md:flex w-full">
            <div class="hidden md:block w-1/2 bg-[#EBEBFF]  px-10">
              <img src="https://i.ibb.co/r6wZmvS/Saly-10.png" alt="" srcset="" />
            </div>
            <div class=" w-full md:w-1/2 py-10 px-5 md:px-10">
              <div class="text-center mb-10">
                <h1 class="font-bold text-3xl text-gray-900">Create your account</h1>
                <div class="flex justify-center items-center">
                  <p className="text-sm">Don't have an account? </p>
                  <Link
                    to={"/signup"}
                    class="text-[#FF6636] text-sm rounded-sm px-3 py-3 font-semibold flex items-center gap-1"
                  >
                    <span> Sign Up</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3.75 12H20.25"
                        stroke="#FF6636"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.5 5.25L20.25 12L13.5 18.75"
                        stroke="#FF6636"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="w-[648px]  h-[460px] pt-14 mx-auto">
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-sm border border-gray-200 outline-none focus:border-orange-500"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-12">
                    <label for="" class="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-sm border border-gray-200 outline-none focus:border-orange-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 mb-12">
                    <label for="" class="text-xs font-semibold px-1">
                      Confirm Password
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-sm border border-gray-200 outline-none focus:border-orange-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex  justify-between items-center">
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <input type="checkbox" required className="checkbox checkbox-error checkbox-sm rounded-md" />
                      <span className="label-text text-[1rem]  font-semibold  px-2">Remember me</span>
                    </label>
                  </div>
                  <div class="">
                    <button class="block w-full max-w-xs mx-auto bg-[#FF6636]  focus:bg-indigo-700 text-white text-sm rounded-sm px-[2rem] py-3 font-semibold flex items-center gap-2">
                      <span> Sign In</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M3.75 12H20.25"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <span className="uppercase pb-5"> or Sign in with</span>
              </div>
              <div class="flex justify-between items-center gap-5 w-[648px] mx-auto">
                <button class="block w-full max-w-xs mx-auto  items-center flex border  focus:border-orange-700  text-white text-sm rounded-sm  font-semibold">
                  <svg
                    className="mx-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_4606_14403)">
                      <path
                        d="M4.43242 12.0836L3.73625 14.6825L1.19176 14.7363C0.431328 13.3259 0 11.7122 0 9.99734C0 8.3391 0.403281 6.77535 1.11812 5.39844H1.11867L3.38398 5.81375L4.37633 8.06547C4.16863 8.67098 4.05543 9.32098 4.05543 9.99734C4.05551 10.7314 4.18848 11.4347 4.43242 12.0836Z"
                        fill="#FBBB00"
                      />
                      <path
                        d="M19.8252 8.13281C19.94 8.73773 19.9999 9.36246 19.9999 10.0009C19.9999 10.7169 19.9246 11.4152 19.7812 12.0889C19.2944 14.3812 18.0224 16.3828 16.2604 17.7993L16.2598 17.7987L13.4065 17.6532L13.0027 15.1323C14.1719 14.4466 15.0857 13.3735 15.567 12.0889H10.2197V8.13281H15.645H19.8252Z"
                        fill="#518EF8"
                      />
                      <path
                        d="M16.2595 17.7975L16.2601 17.798C14.5464 19.1755 12.3694 19.9996 9.99965 19.9996C6.19141 19.9996 2.88043 17.8711 1.19141 14.7387L4.43207 12.0859C5.27656 14.3398 7.45074 15.9442 9.99965 15.9442C11.0952 15.9442 12.1216 15.648 13.0024 15.131L16.2595 17.7975Z"
                        fill="#28B446"
                      />
                      <path
                        d="M16.383 2.30219L13.1434 4.95437C12.2319 4.38461 11.1544 4.05547 10 4.05547C7.39344 4.05547 5.17859 5.73348 4.37641 8.06812L1.11871 5.40109H1.11816C2.78246 2.1923 6.1352 0 10 0C12.4264 0 14.6511 0.864297 16.383 2.30219Z"
                        fill="#F14336"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4606_14403">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-gray-900 border-l  py-3 ps-14"> Google</span>
                </button>
                <button class="block w-full max-w-xs mx-auto  items-center flex border  focus:border-orange-700 text-white text-sm rounded-sm  font-semibold">
                  <svg
                    className="mx-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M11.25 6.875V4.375C11.25 3.685 11.81 3.125 12.5 3.125H13.75V0H11.25C9.17875 0 7.5 1.67875 7.5 3.75V6.875H5V10H7.5V20H11.25V10H13.75L15 6.875H11.25Z"
                      fill="#4267B2"
                    />
                  </svg>
                  <span className="text-gray-900 border-l py-3 ps-14"> Facebook</span>
                </button>
                <button class="block w-full max-w-xs mx-auto  items-center flex border  focus:border-orange-700 text-white text-sm rounded-sm  font-semibold">
                  <svg
                    className="mx-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_4606_996)">
                      <path
                        d="M13.7493 0C12.6831 0.0737496 11.4368 0.756246 10.7106 1.64499C10.0481 2.45124 9.5031 3.64873 9.7156 4.81247C10.8806 4.84872 12.0843 4.14998 12.7818 3.24623C13.4343 2.40499 13.9281 1.21499 13.7493 0Z"
                        fill="black"
                      />
                      <path
                        d="M17.9624 6.70843C16.9387 5.42468 15.5 4.67969 14.1412 4.67969C12.3475 4.67969 11.5887 5.53843 10.3425 5.53843C9.05749 5.53843 8.08125 4.68219 6.53001 4.68219C5.00627 4.68219 3.38378 5.61343 2.35503 7.20592C0.908792 9.44841 1.15629 13.6646 3.50003 17.2559C4.33877 18.5409 5.45877 19.9859 6.92376 19.9984C8.2275 20.0108 8.595 19.1621 10.3612 19.1534C12.1275 19.1434 12.4625 20.0096 13.7637 19.9959C15.23 19.9846 16.4112 18.3834 17.2499 17.0984C17.8512 16.1771 18.0749 15.7134 18.5412 14.6734C15.15 13.3821 14.6062 8.55967 17.9624 6.70843Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4606_996">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-gray-900 border-l focus:border-orange-700 py-3 ps-14"> Apple</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
