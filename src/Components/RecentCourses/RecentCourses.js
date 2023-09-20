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
                <div className="font-semibold p-[0.625rem] text-[0.875rem]">{bestCourse.title}</div>
                <div>
                  {bestCourse.course_instructors.slice(0, 1).map((instructor) => (
                    <>
                      <div className="flex justify-between py-[1rem]  items-center gap-2 px-[1rem]">
                        <div className="flex items-center gap-2">
                          <img className="w-[2.75rem] h-[2.75rem]" src={instructor.instructor_image} alt="" srcset="" />
                          <span className="text-[#4E5566] font-semibold text-[0.8rem]">
                            Coursed by <br /> {instructor.instructor_title} <br /> ( {instructor.students.slice(0, 8)})
                          </span>
                        </div>
                        <div className=" flex items-center text-[#1D2026] font-semibold text-[.8rem]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 21"
                            fill="none"
                          >
                            <path
                              d="M10.3446 15.401L14.2849 17.8974C14.7886 18.2165 15.4139 17.7419 15.2644 17.154L14.126 12.6756C14.0939 12.5509 14.0977 12.4197 14.137 12.297C14.1762 12.1743 14.2492 12.0652 14.3477 11.9822L17.8811 9.04132C18.3453 8.6549 18.1057 7.88439 17.5092 7.84567L12.8949 7.5462C12.7706 7.53732 12.6514 7.49332 12.5511 7.41931C12.4509 7.34531 12.3737 7.24435 12.3286 7.12819L10.6076 2.79436C10.5609 2.67106 10.4777 2.56492 10.3692 2.49002C10.2606 2.41511 10.1319 2.375 10 2.375C9.86813 2.375 9.73938 2.41511 9.63085 2.49002C9.52232 2.56492 9.43914 2.67106 9.39236 2.79436L7.6714 7.12819C7.62631 7.24435 7.54914 7.34531 7.4489 7.41931C7.34865 7.49332 7.22944 7.53732 7.10515 7.5462L2.49078 7.84567C1.89429 7.88439 1.65466 8.6549 2.11894 9.04132L5.65232 11.9822C5.75079 12.0652 5.82383 12.1743 5.86305 12.297C5.90226 12.4197 5.90606 12.5509 5.874 12.6756L4.81824 16.8288C4.63889 17.5343 5.38929 18.1038 5.99369 17.7209L9.65539 15.401C9.75837 15.3354 9.87792 15.3006 10 15.3006C10.1221 15.3006 10.2416 15.3354 10.3446 15.401Z"
                              fill="#FD8E1F"
                            />
                          </svg>
                          <span>{instructor.rating}</span>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCourses;
