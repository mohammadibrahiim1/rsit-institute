import React, { useEffect, useState } from "react";
import "./BestSellingCourses.css";
const BestSellingCourses = () => {
  const [bestCourses, setBestCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBestCourses(data);
      });
  }, []);
  return (
    <div className="bg-[#F5F7FA] py-[4rem]">
      <div className="text-[3rem] font-semibold text-center">Best selling courses</div>
      <div className="w-[82.5rem] h-[43.188rem] mx-auto grid grid-cols-5 justify-items-center items-center pt-5">
        {bestCourses?.slice(0, 10)?.map((bestCourse) => (
          <>
            <div>
              <div className=" w-[15.25rem] h-[19.938rem] bg-base-100 shadow-xl">
                <div>
                  <img className="w-[15.25rem] h-[11.438rem]" src={bestCourse.cover_image} alt="Shoes" />
                </div>
                <div>
                  <div className="flex justify-between items-center px-[0.875rem] pt-[0.875rem] ">
                    <h2
                      className="text-[0.625rem] p-1  font-bold w-[8rem] text-center"
                      style={{ color: `${bestCourse.color}`, background: `${bestCourse.background}` }}
                    >
                      {bestCourse.category}
                    </h2>
                    <h2 className="text-[#FF6636] font-semibold text-[1rem]">${bestCourse.price}</h2>
                  </div>
                  <div className="font-semibold p-[0.625rem] text-[0.875rem]">
                    {bestCourse.description.slice(0, 52)}...
                  </div>
                  <div className="card-actions justify-between px-[0.875rem] pt-[0.5rem] border-t-[1px]">
                    <div className="flex justify-items-center items-center gap-1 ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z"
                          fill="#FD8E1F"
                        />
                      </svg>
                      <span className="font-semibold text-[0.875rem]">{bestCourse.rating}</span>
                    </div>
                    <div className="font-semibold text-[0.875rem]">{bestCourse.total_students}</div>
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
