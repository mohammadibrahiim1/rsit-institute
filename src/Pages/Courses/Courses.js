import React, { useEffect, useState } from "react";
import {
  useGetInstructorsByCategoryQuery,
  //   useGetInstructorsQuery,
} from "../../redux/features/instructorsApi/instructorApi";
// import { useDispatch } from "react-redux";

const filters = [
  {
    categories: [
      {
        category_name: "Development",
        sub_category: [
          { name: "web development", number: 574 },
          { name: "Data Science", number: 568 },
          { name: "Mobile Development", number: 1345 },
          { name: "Software Testing", number: 317 },
          { name: "Software Engineering", number: 31 },
          { name: "Software Development Tools", number: 548 },
          { name: "No-Code Development", number: 58 },
        ],
      },
      { category_name: "Business" },
      { category_name: "Finance & Accounting" },
      { category_name: "It & Software" },
      { category_name: "Office Productivity" },
      { category_name: "Personal Development" },
      { category_name: "Design" },
      { category_name: "Marketing" },
      { category_name: "LifeStyle" },
      { category_name: "Photography & Video" },
      { category_name: "Music" },
      { category_name: "Health & Fitness" },
    ],

    tools: [
      {
        tools_name: "HTML 5",
        number: 1534,
      },
      {
        tools_name: "CSS 3",
        number: 1534,
      },
      {
        tools_name: "React",
        number: 1534,
      },
      {
        tools_name: "Webflow",
        number: 1534,
      },
      {
        tools_name: "node js",
        number: 1534,
      },
      {
        tools_name: "laravel",
        number: 1534,
      },
      {
        tools_name: "Saas",
        number: 1534,
      },
      {
        tools_name: "Wordpress",
        number: 1534,
      },
    ],

    ratings: [
      {
        star: "5 Star",
      },
      {
        star: "4 Star & up",
      },
      {
        star: "3 Star & up",
      },
      {
        star: "2 Star & up",
      },
      {
        star: "1 Star & up ",
      },
    ],
    levels: [
      {
        level: "All Level",
      },
      {
        level: "Beginner",
      },
      {
        level: "Intermediate",
      },
      {
        level: "Expert",
      },
    ],

    durations: [
      {
        duration_limit: "6-12 Months",
      },
      {
        duration_limit: "3-6 Months",
      },
      {
        duration_limit: "1-3 Months",
      },
      {
        duration_limit: "1-4 weeks",
      },
      {
        duration_limit: "1-7 days",
      },
    ],
  },
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
        <div className="filters_header mt-[3rem] ">
          <div className="w-[1320px] px-2 mx-auto flex items-center justify-between ">
            <div className="flex items-center gap-[1.5rem]">
              <button className="btn gap-3 bg-white hover:bg-white  text-orange-500 px-5 border-orange-500 rounded-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 11.25L12 20.25"
                    stroke="#FF6636"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 3.75L12 8.25"
                    stroke="#FF6636"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.75 18.75L18.7501 20.25"
                    stroke="#FF6636"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.7501 3.75L18.75 15.75"
                    stroke="#FF6636"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 15.75H16.5"
                    stroke="#FF6636"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.25007 15.75L5.25 20.25"
                    stroke="#FF6636"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.25 3.75L5.25007 12.75"
                    stroke="#FF6636"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.00024 12.75H7.50024"
                    stroke="#FF6636"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.25 8.25H9.75"
                    stroke="#FF6636"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="capitalize ">Filter</span>
                <span className="border-orange-500 bg-orange-500 text-white p-1 ms-3  ">3</span>
              </button>
              {/* <!-- search input --> */}
              <div class=" w-[457px] h-[48px]">
                <div class="relative flex items-center w-full h-12 rounded-none focus-within:shadow-lg bg-white overflow-hidden border border-orange-500">
                  <div class="grid place-items-center h-full w-12 text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>

                  <input
                    class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search something.."
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="capitalize">sort by : </span>
              <details className="dropdown ">
                <summary className="m-1 btn px-[48px] h-[48px] bg-white text-orange-500 border-gray-300 rounded-none hover:bg-white hover:border-gray-300">
                  Trending
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <span>Item 1</span>
                  </li>
                  <li>
                    <span>Item 2</span>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>

        <div className="border-b w-[1320px] mx-auto">
          <h1 className="text-end mx-auto my-[1.5rem]">3,145,684 results find for “ui/ux design”</h1>
        </div>
      </div>

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
