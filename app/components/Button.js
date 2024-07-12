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
    <div className="ml-5 w-full md:w-[70%] pb-5 mt-3 flex flex-wrap justify-center">
      <button
        className="capitalize text-xl px-3 py-2 border-2 rounded-md bg-slate-200 m-2 md:m-4"
        onClick={() => handleCategory("all")}
      >
        All
      </button>
      {category.map((item, index) => (
        <button
          key={index}
          className="capitalize text-xl px-3 py-2 border-2 rounded-md bg-slate-200 m-2 md:m-4"
          onClick={() => handleCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Button;
