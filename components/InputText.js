"use client";

import React from "react";

// Accept `icon` as a prop
export default function InputText({
  placeholder,
  value,
  onChange,
  type = "text",
  icon: Icon, // icon is a component like <UserIcon />
}) {
  return (
    <div className="mx-auto w-full max-w-md ">
      <div className="w-full rounded-md bg-gradient-to-r from-[#2376F3] to-[#14EF7B] p-0.5 shadow-md">
        <div className="flex items-center gap-2 rounded-[4px] bg-white p-3 text-gray-800 text-4xl">
          {Icon && <Icon className="w-5 h-5 text-black" />}
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full outline-none text-base"
          />
        </div>
      </div>
    </div>
  );
}
