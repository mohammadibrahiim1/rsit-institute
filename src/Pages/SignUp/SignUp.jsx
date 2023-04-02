import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <section className="signUp-section">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-3xl font-bold text-[#38BDF8]">
              সাইনইন <span className="text-orange-500 pl-1"> করুন</span>
            </h1>
            <p className="text-sm text-slate-700">
              আপনার লগইন তথ্য কারো সাথে শেয়ার করবেন না
            </p>
          </div>
          <form
            novalidate=""
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm text-slate-700"
                >
                  আপনার নাম লিখুন
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="someone"
                  className="w-full px-3 py-1 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 input"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm text-slate-700"
                >
                  আপনার ইমেইল এড্রেস
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-1 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 input"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm text-slate-700">
                    পাসওয়ার্ড দিন
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-1 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 input"
                />
              </div>
              <Link
                rel="noopener noreferrer"
                href="#"
                className=" recover-text hover:underline dark:text-gray-400 text-slate-700"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>
            <div className="space-y-2 ">
              <div>
                <button
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md 
                  signIn-button bg-slate-800 hover:bg-slate-700 text-white"
                >
                  সাইনইন করুন
                </button>
              </div>
              <p className="px-6 text-sm text-center text-slate-700">
                আপনি কী সাইনইন করেছেন?
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline text-orange-500 ml-2"
                >
                  লগইন করুন
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
