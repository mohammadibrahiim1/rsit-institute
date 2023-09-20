import React, { useEffect, useState } from "react";
import "./RecentCourses.css";

const RecentCourses = () => {
  const [featuresCourses, setFeaturesCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeaturesCourses(data);
      });
  }, []);
  return (
    <div>
      <div className="bg-[#fff] py-[9rem] ">
        <div className="w-[82.5rem] flex justify-center px-5 items-center mx-auto">
          <span className="text-[3rem] font-semibold">Recently added courses</span>
        </div>
        <div className="w-[82.5rem] pt-[2.5rem] px-3 mx-auto grid grid-cols-5 justify-items-center items-center gap-5 ">
          {featuresCourses?.slice(14, 19)?.map((bestCourse) => (
            <div className="dropdown dropdown-hover flex">
              <div tabIndex={0} className=" w-[15.25rem] h-[19.938rem] bg-base-100 shadow-xl">
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

              <div tabIndex={0} className="dropdown-content z-[1] w-[15.25rem] h-[19.938rem] bg-base-100">
                <div
                  className="text-[0.625rem] p-1  font-bold w-[8rem] text-center"
                  style={{ color: `${bestCourse.color}`, background: `${bestCourse.background}` }}
                >
                  {bestCourse.category}
                </div>
                <div className="font-semibold p-[0.625rem] text-[0.875rem]">{bestCourse.title.slice(0, 53)}</div>
                <div>
                  {bestCourse.course_instructors.slice(0, 1).map((instructor) => (
                    <>
                      <div className="flex justify-between py-[1rem]  items-center gap-2 px-[1rem]">
                        <div className="flex items-center gap-2">
                          <img className="w-[2.75rem] h-[2.75rem]" src={instructor.instructor_image} alt="" srcset="" />
                          <span className="text-[#4E5566] font-semibold text-[0.8rem]">
                            Coursed by <br /> {instructor.instructor_title} ( {instructor.students.slice(0, 8)})
                          </span>
                        </div>
                      </div>
                      <div className=" flex items-center text-[#1D2026] font-semibold text-[.8rem]">
                        <div>
                          {bestCourse.course_includes.slice(0, 2).map((learn) => (
                            <div className="flex  items-center px-3 gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M20.25 6.75049L9.75 17.25L4.5 12.0005"
                                  stroke="#23BD33"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <div className="text-[0.875rem] text-[#6E7485] "> {learn.advantage}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="my-2">
                        <button className="bg-[#FF6636] flex justify-center items-center mx-auto mb-1 px-[3.3rem] py-[.3rem] ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z"
                              fill="white"
                              stroke="white"
                              stroke-width="1.5"
                            />
                            <path
                              d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                              fill="white"
                            />
                            <path
                              d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145C7.55549 16.5 7.23839 16.3938 6.97816 16.1975C6.71792 16.0012 6.52872 15.7255 6.43917 15.4121L3.04827 3.54396C3.0035 3.38725 2.90889 3.24939 2.77878 3.15124C2.64866 3.05309 2.49011 3 2.32713 3H0.75"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span className="text-[1rem] font-sans text-[#fff]">Add to cart</span>
                        </button>
                        <button className="bg-[#FFEEE8] flex justify-center items-center mx-auto px-[3.3rem] py-[.3rem] ">
                          <span className="text-[1rem] font-sans text-[#FF6636] ">Course details</span>
                        </button>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center py-[4rem]">
          <button className="text-[#FF6636] bg-[#FFEEE8] px-[1.8rem] py-[.7rem] flex gap-2 items-center">
            <span>Browse all Course</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
            </svg>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentCourses;
