import React from "react";
import "./Categories.css";
import { useGetCategoriesQuery } from "../../redux/features/categoryApi/categoryApi";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data } = useGetCategoriesQuery();

  const courseCategories = data?.data;

  return (
    <div>
      <div className="text-[2.5rem] font-semibold pt-[5rem] pb-[2.5rem] text-[#1D2026] text-center">
        Browse top category
      </div>
      <div className="grid grid-cols-4 justify-items-center items-center w-[1180px] mx-auto gap-y-5 pb-[2.5rem]">
        {courseCategories?.map((category) => (
          <CategoryCard category={category} key={category._id}></CategoryCard>
        ))}
      </div>
      <div>
        <div className="flex items-center justify-center gap-2 pb-[5rem]">
          <span className="text-[0.875rem] text-[#4E5566]"> We have more category & subcategory.</span>
          <Link className="text-[#FF6636] text-[0.875rem] flex items-center gap-1" to={"/"}>
            Browse All
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 25 24" fill="none">
              <path
                d="M4.25 12H20.75"
                stroke="#FF6636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 5.25L20.75 12L14 18.75"
                stroke="#FF6636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
