import React, { useEffect, useState } from "react";
import {
  useGetInstructorsByCategoryQuery,
  //   useGetInstructorsQuery,
} from "../../redux/features/instructorsApi/instructorApi";
// import { useDispatch } from "react-redux";

const categories = [
  { title: "Lead Developer" },
  { title: "UI/UX Designer" },
  { title: "Digital Product Designer" },
  { title: "Adobe Instructor" },
  { title: "Senior Developer" },
];

const popularTools = [
  {
    name: "HTML 5",
    course: "2,736 Courses",
  },
  {
    name: "CSS 3",
    course: "1,736 Courses",
  },
  {
    name: "Javascript",
    course: "22,736 Courses",
  },
  {
    name: "Saas",
    course: "2,361 Courses",
  },
  {
    name: "Laravel",
    course: "2,539 Courses",
  },
  {
    name: "Django",
    course: "3,736 Courses",
  },
];
const keywords = [
  {
    name: "HTML 5",
    course: "2,736 Courses",
  },
  {
    name: "Web Development",
    course: "1,736 Courses",
  },
  {
    name: "Responsive Development",
    course: "22,736 Courses",
  },
  {
    name: "Developments",
    course: "2,361 Courses",
  },
  {
    name: "Programming",
    course: "2,539 Courses",
  },
  {
    name: "Website",
    course: "3,736 Courses",
  },
  {
    name: "Technology",
    course: "3,736 Courses",
  },
  {
    name: "wordpress",
    course: "3,736 Courses",
  },
];

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCourses(data);
      });
  }, []);

  const [category, setCategory] = useState("");
  const { data } = useGetInstructorsByCategoryQuery(category);
  const instructors = data?.data;
  console.log(instructors);

  return (
    <div>
      <div>
        <div className="text-[3rem] font-semibold text-center py-[3.75rem] ">
          Best selling courses in Web Development
        </div>
        <div className="w-[82.5rem] mx-auto grid grid-cols-5 justify-items-center items-center">
          {allCourses?.slice(0, 5)?.map((bestCourse) => (
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

      <div>
        <div className="w-[82rem] mx-auto flex justify-between items-center px-1 pt-[5rem]">
          <span className="text-[2rem] text-[#1d2026] font-sans font-semibold">Popular tools</span>
          <div className="flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
              <path
                d="M17.25 8H0.75"
                stroke="#FF6636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 1.25L0.75 8L7.5 14.75"
                stroke="#FF6636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3.75 12H20.25"
                stroke="#8C94A3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 5.25L20.25 12L13.5 18.75"
                stroke="#8C94A3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-6 items-center w-[82.5rem] mx-auto gap-5 py-[1.5rem]">
          {popularTools.map((popular) => (
            <>
              <div className="border text-center py-[1.5rem] shadow border-[#FFF] ">
                <p className="text-[#1D2026] font-semibold">{popular.name}</p>
                <p className="text-[#8C94A3] font-semibold ">{popular.course}</p>
              </div>
            </>
          ))}
        </div>
        <div className="flex  items-center w-[82.5rem] mx-auto gap-5 py-[1.5rem]">
          <div className="text-[1.125rem] font-semibold capitalize">popular Search :</div>
          {keywords.map((popular) => (
            <>
              <div className="text-center">
                <button className="text-[#1D2026] px-[.875rem] py-[.5rem]  bg-[#F5F7FA] hover:bg-[#FF6636] hover:text-[#FFF] font-semibold text-[0.875rem] duration-300">
                  {popular.name}
                </button>
              </div>
            </>
          ))}
        </div>
      </div>

      <div>
        <div className="text-[3rem] font-semibold text-center py-[3.75rem] ">Popular instructor in Web Development</div>
        <div className="grid grid-cols-5 justify-items-center items-center w-[82.5rem] mx-auto">
          {instructors?.slice(5, 10)?.map((instructor) => (
            <>
              {" "}
              <div>
                <div className=" w-[15.25rem] h-[22.625rem] bg-base-100 shadow-xl">
                  <div>
                    <img className="w-[15.25rem] h-[15.25rem]" src={instructor?.image} alt="Shoes" />
                  </div>
                  <div>
                    <div className="text-[1rem] text-[#1D2026] opacity-80 text-center font-bold pt-[.75rem]">
                      {instructor.name}
                    </div>
                    <div className="text-[#8C94A3] text-[.875rem] text-center font-semibold pb-[.5rem]">
                      {instructor.category}
                    </div>

                    <div className="card-actions justify-between px-[0.875rem] pt-[1rem] border-t-[1px]">
                      <div className="flex justify-items-center items-center gap-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        <span className="font-semibold text-[0.875rem]">{instructor?.rating}</span>
                      </div>
                      <div className="font-semibold text-[0.875rem]">{instructor?.students} students</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
