import React from "react";
import { data } from "./Data";
const Button = ({ setData }) => {
  const category = Array.from(
    new Set(
      data.map((item) => {
        return item.category;
      })
    )
  );
  const handleCategory = (cate) => {
    if (cate == "all") {
      return setData(data);
    } else {
      const updatePhoto = data.filter((item) => item.category == cate);
      setData(updatePhoto);
    }
  };
  console.log(category);
  return (
    <div className="border-2 w-[70%] mx-auto py-20">
      <button
        className="capitalize text-xl px-3 py-2  border-2 rounded-md bg-slate-200 m-4"
        onClick={() => handleCategory("all")}
      >
        All
      </button>
      {category.map((item, index) => (
        <button
          className="capitalize text-xl px-3 py-2  border-2 rounded-md bg-slate-200 m-4"
          key={index}
          onClick={() => handleCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Button;
