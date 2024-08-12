import React from "react";
import { twMerge } from "tailwind-merge";

const FloatingButton = ({ name, onClick, className, children }) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "p-6 h-52 w-48 backdrop-blur-lg bg-red-100/50",
        "border-4 border-white",
        "rounded-xl shadow-lg",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-xl hover:-translate-y-1",
        "cursor-pointer",
        "flex items-center justify-center",
        "text-white",
        className
      )}
    >
      <h3 className="text-xl text-black font-bold text-center truncate w-full">
        {name}
      </h3>
    </div>
  );
};

export default FloatingButton;
