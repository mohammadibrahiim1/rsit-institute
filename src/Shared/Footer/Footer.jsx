import React from "react";
import "./Footer.css";
const actions = [
  { type: "Online courses", number: "6.3k" },
  { type: "Certified Instructor", number: "26k" },
  { type: "Sucess Rate", number: "99.9%" },
];
const Footer = () => {
  return (
    <div className="bg-[#1D2026]">
      <div className="w-[82.5rem]  mx-auto flex justify-center items-center py-[6.25rem] my-[30px] gap-[12.5rem]">
        <div className="w-[648px]">
          <div className="text-[2.5rem] leading-10 text-white">
            Start learning with 67.1k students around the world.
          </div>
          <div className="flex gap-[1rem] py-[2rem]">
            <button className="bg-[#FF6636] px-[1.5rem] py-[.4rem] font-semibold text-white ">Join the Family</button>
            <button className="bg-[#313335] px-[1.5rem] py-[.4rem] font-semibold text-white  ">
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
  );
};

export default Footer;
