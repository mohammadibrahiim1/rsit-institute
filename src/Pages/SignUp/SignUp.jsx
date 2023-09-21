import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div class=" min-w-screen   flex items-center justify-center">
        <div class="bg-white text-gray-500  shadow-xl w-full overflow-hidden">
          <div class="md:flex w-full">
            <div class="hidden md:block w-1/2 bg-[#EBEBFF] py-10 px-10">
              <img src="https://i.ibb.co/KrCP4ys/Saly-1.png" alt="" srcset="" />
            </div>
            <div class=" w-full md:w-1/2 py-10 px-5 md:px-10">
              <div class="text-center mb-10">
                <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Enter your information to register</p>
              </div>
              <div className="w-[648px] h-[640px] mx-auto">
                <div class="flex -mx-3">
                  <div class="w-1/2 px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-sm border border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div class="w-1/2 px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      Last name
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-sm border border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      Username
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-sm border border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="User Name"
                      />
                    </div>
                  </div>
                </div>
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
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-sm border border-gray-200 outline-none focus:border-indigo-500"
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
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-sm border border-gray-200 outline-none focus:border-indigo-500"
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
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-sm border border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex  justify-between items-center">
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <input type="checkbox" required className="checkbox checkbox-error checkbox-sm rounded-md" />
                      <span className="label-text text-[.875rem]  px-2">
                        I Agree with all of your <strong className="text-indigo-500">Terms & Conditions</strong>
                      </span>
                    </label>
                  </div>
                  <div class="">
                    <button class="block w-full max-w-xs mx-auto bg-[#FF6636]  focus:bg-indigo-700 text-white text-sm rounded-sm px-3 py-3 font-semibold flex items-center gap-3">
                      <span> Create account</span>
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
            </div>
          </div>
        </div>
      </div>

      {/* <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <Link
            title="Buy me a beer"
            to="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              class="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
              alt="sigUp img"
            />
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default SignUp;
