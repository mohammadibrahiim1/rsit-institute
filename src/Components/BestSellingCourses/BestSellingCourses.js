import React, { useEffect, useState } from "react";
import "./BestSellingCourses.css";
const BestSellingCourses = () => {
  const [bestCourses, setBestCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBestCourses(data);
      });
  }, []);
  return (
    <div className="bg-[#F5F7FA]">
      <div className="text-[3rem] font-semibold text-center">Best selling courses</div>
      <div>
        {bestCourses.map((bestCourse) => (
          <>
            <div>
              <div className=" w-[15.25rem] h-[19.938rem] bg-base-100 shadow-xl">
                <div>
                  <img className="w-[15.25rem] h-[11.438rem]" src={bestCourse.cover_image} alt="Shoes" />
                </div>
                <div>
                  <div className="flex justify-between items-center p-[0.875rem]">
                    <h2 className="text-[0.625rem] p-1 bg-[#FFEEE8] font-semibold w-[7rem] text-center">
                      {bestCourse.category}
                    </h2>
                    <h2 className=" text-[#FF6636] font-semibold text-[1rem]">${bestCourse.price}</h2>
                  </div>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BestSellingCourses;
