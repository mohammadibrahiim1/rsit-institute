import React, { useEffect, useState } from "react";
import "./FeaturesCourses.css";

const FeaturesCourses = () => {
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
        <div className="w-[82.5rem] flex justify-between px-5 items-center mx-auto">
          <span className="text-[3rem] font-semibold">Our feature courses</span>
          <span className=" w-[26.5rem] text-[0.875rem] font-semibold ">
            Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec varius purus et eleifend porta.
          </span>
        </div>
        <div className="w-[82.5rem] pt-[2.5rem] px-3 mx-auto grid grid-cols-2 justify-items-center items-center gap-5">
          {featuresCourses?.slice(10, 14)?.map((bestCourse) => (
            <div>
              <div className="w-[40.5rem] h-[11.75rem] border ">
                <div className="flex items-start">
                  <img className="h-[11.75rem]" src={bestCourse.cover_image} alt="" srcset="" />

                  <div>
                    <div className="flex justify-between items-center w-[23.75rem] mx-auto py-[1rem] px-[1rem]">
                      <div
                        className="text-[0.625rem] p-1  font-bold w-[8rem] text-center"
                        style={{ color: `${bestCourse.color}`, background: `${bestCourse.background}` }}
                      >
                        {bestCourse.category}
                      </div>
                      <div className="text-[#FF6636] font-semibold text-[1rem]">${bestCourse.price}</div>
                    </div>
                    <div className="text-[#1D2026] font-semibold px-[1rem]">{bestCourse.info.slice(0, 40)}...</div>
                    <div className="flex justify-between items-center w-[23.75rem] mx-auto">
                      <div>
                        {bestCourse.course_instructors.slice(0, 1).map((instructor) => (
                          <>
                            <div className="flex justify-between py-[1rem] w-[23.75rem] items-center gap-2 px-[1rem]">
                              <div className="flex items-center gap-2">
                                <img
                                  className="w-[1.75rem] h-[1.75rem]"
                                  src={instructor.instructor_image}
                                  alt=""
                                  srcset=""
                                />
                                <span className="text-[#4E5566] font-semibold text-[0.875rem]">
                                  {instructor.instructor_title}
                                </span>
                              </div>
                              <div className=" flex items-center text-[#1D2026] font-semibold text-[1rem]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                >
                                  <path
                                    d="M10.3446 15.401L14.2849 17.8974C14.7886 18.2165 15.4139 17.7419 15.2644 17.154L14.126 12.6756C14.0939 12.5509 14.0977 12.4197 14.137 12.297C14.1762 12.1743 14.2492 12.0652 14.3477 11.9822L17.8811 9.04132C18.3453 8.6549 18.1057 7.88439 17.5092 7.84567L12.8949 7.5462C12.7706 7.53732 12.6514 7.49332 12.5511 7.41931C12.4509 7.34531 12.3737 7.24435 12.3286 7.12819L10.6076 2.79436C10.5609 2.67106 10.4777 2.56492 10.3692 2.49002C10.2606 2.41511 10.1319 2.375 10 2.375C9.86813 2.375 9.73938 2.41511 9.63085 2.49002C9.52232 2.56492 9.43914 2.67106 9.39236 2.79436L7.6714 7.12819C7.62631 7.24435 7.54914 7.34531 7.4489 7.41931C7.34865 7.49332 7.22944 7.53732 7.10515 7.5462L2.49078 7.84567C1.89429 7.88439 1.65466 8.6549 2.11894 9.04132L5.65232 11.9822C5.75079 12.0652 5.82383 12.1743 5.86305 12.297C5.90226 12.4197 5.90606 12.5509 5.874 12.6756L4.81824 16.8288C4.63889 17.5343 5.38929 18.1038 5.99369 17.7209L9.65539 15.401C9.75837 15.3354 9.87792 15.3006 10 15.3006C10.1221 15.3006 10.2416 15.3354 10.3446 15.401Z"
                                    fill="#FD8E1F"
                                  />
                                </svg>
                                {instructor.rating}( {instructor.students.slice(0, 8)})
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>

                    <div className="border-t-[1px] flex justify-between items-center py-[1rem] px-[1rem]">
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                          <path
                            d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                            stroke="#564FFD"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                          />
                          <path
                            d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                            stroke="#564FFD"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span className="text-[0.875rem] text-[#4E5566] font-semibold">
                          {" "}
                          {bestCourse.total_students}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                          <path
                            d="M10 17.1666V8.83325"
                            stroke="#E34444"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15 17.1666V3.83325"
                            stroke="#E34444"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5 17.1666V13.8333"
                            stroke="#E34444"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span className="text-[0.875rem] text-[#4E5566] font-semibold"> Beginner</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                          <path
                            d="M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z"
                            stroke="#23BD33"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                          />
                          <path
                            d="M10 6.125V10.5H14.375"
                            stroke="#23BD33"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span className="text-[0.875rem] text-[#4E5566] font-semibold">6 hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesCourses;
