import React from "react";

export default function PageHeader({ title,className }) {
  return (
    <div className={"bg-white px-6 py-4 border-b-2 border-[#E7E7E7] shadow-sm"+className}>
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
    </div>
  );
}
