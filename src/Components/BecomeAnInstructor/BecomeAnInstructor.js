import React from "react";
import "./BecomeAnInstructor.css";

const steps = [
  { id: 1, text: "Apply to become instructor", slNo: 1, color: "#564FFD", background: "#EBEBFF" },
  { id: 2, text: "Build & edit your profile", slNo: 2, color: "#FF6636", background: "#FFF0F0" },
  { id: 3, text: "Create your new course", slNo: 3, color: "#E34444", background: "#FFF0F0" },
  { id: 4, text: "Start teaching & earning", slNo: 4, color: "#23BD33", background: "#E1F7E3" },
];

const BecomeAnInstructor = () => {
  return (
    <div className="flex justify-items-center items-center w-[82.5rem] mx-auto gap-[3rem] py-[5rem]">
      <div>
        <img className="w-[648px] h-[270px]" src="https://i.ibb.co/2ycVwQ6/Become-an-Instructor.png" alt="" srcset="" />
      </div>
      <div>
        <div className="text-[#1D2026] font-semibold text-[2rem]  ">Your teaching & earning steps</div>
        <div className="grid grid-cols-2 gap-[2rem] pt-[1.688rem]">
          {steps.map((step) => (
            <div className="flex justify-items-center items-center gap-3">
              <div
                className="border rounded-full px-4 py-2"
                style={{ color: `${step.color}`, backgroundColor: `${step.background}`, border: `${step.background}` }}
              >
                {step.slNo}
              </div>
              <div className="font-semibold text-[1rem] ">{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BecomeAnInstructor;
