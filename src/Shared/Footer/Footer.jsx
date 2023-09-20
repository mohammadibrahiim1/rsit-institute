import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const actions = [
  { type: "Online courses", number: "6.3k" },
  { type: "Certified Instructor", number: "26k" },
  { type: "Success Rate", number: "99.9%" },
];
const Footer = () => {
  return (
    <>
      <div className="bg-[#1D2026] ">
        <div className="w-[82.5rem]  mx-auto flex justify-center items-center py-[6.25rem] mt-[30px] gap-[12.5rem]">
          <div className="w-[648px]">
            <div className="text-[2.5rem] leading-10 text-white">
              Start learning with 67.1k students around the world.
            </div>
            <div className="flex gap-[1rem] py-[2rem]">
              <button className="bg-[#FF6636] px-[1.5rem] py-[.5rem] font-semibold text-white ">Join the Family</button>
              <button className="bg-[#313335] px-[1.5rem] py-[.5rem] font-semibold text-white  ">
                Browse all courses
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 w-[648px]">
            {actions.map((action) => (
              <>
                <div>
                  <h1 className="text-white text-[2.5rem] font-semibold">{action.number}</h1>
                  <h1 className="text-[#B7BAC7] text-[1rem] font-semibold ">{action.type}</h1>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer p-10 bg-[#1D2026] text-base-content border-y-[1px] border-[]">
        <aside className="w-[26.5rem] text-[1.2rem] text-[#8C94A3]">
          <Link className="normal-case text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="40" viewBox="0 0 42 40" fill="none">
              <path
                d="M2.25 15L21 5L39.75 15L21 25L2.25 15Z"
                stroke="#FF6636"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30.375 37.5V20L21 15"
                stroke="#FF6636"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M35.375 17.3333V25.8521C35.3755 26.1218 35.2884 26.3843 35.1266 26.6001C34.074 28.0008 29.6333 33.1249 21 33.1249C12.3667 33.1249 7.92597 28.0008 6.87336 26.6001C6.71165 26.3843 6.62449 26.1218 6.625 25.8521V17.3333"
                stroke="#FF6636"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            E-tutor
          </Link>
          <p className="py-[1.25rem] leading-7">
            {" "}
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.
          </p>

          <div className=" bg-[#363B4766] w-[46px] h-[46px] border-[#363B4766] shadow-xl">
            <svg
              className="m-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M11.3575 2.98875H13.0008V0.12675C12.7172 0.08775 11.7423 0 10.6068 0C8.2375 0 6.6145 1.49025 6.6145 4.22925V6.75H4V9.9495H6.6145V18H9.82V9.95025H12.3288L12.727 6.75075H9.81925V4.5465C9.82 3.62175 10.069 2.98875 11.3575 2.98875Z"
                fill="white"
              />
            </svg>
          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
