import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  const { name, courseNumber, primary, secondary, category_img } = category;
  // console.log(category);
  return (
    <div>
      <div className="category-card" style={{ background: `${secondary}` }}>
        <div className="body">
          <img className="p-2" style={{ color: `${primary}` }} src={category_img} alt="" />

          <div className="info w-[182px]">
            <div className="text-base font-bold text-[#1D2026] opacity-80">{name}</div>
            <div className="text-sm text-[#6E7485] font-semibold">{courseNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
