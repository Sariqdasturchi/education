import React from "react";

export default function PageHeader({ title, other }) {
  return (
    <div className="flex gap-2 items-center bg-white px-6 py-4 border-b-2 border-[#E7E7E7] shadow-sm">
      {other}
      <h1 className="text-2xl font-semibold text-[#13265C]">{title}</h1>
    </div>
  );
}
