import { SquarePen } from "lucide-react";
import React from "react";

const lessons = [
  {
    id: 1,
    lessonConut: 12,
    lessonName: "Darslik nomi",
    studentCount: 524,
  },
  {
    id: 2,
    lessonConut: 25,
    lessonName: "Darslik nomi",
    studentCount: 200,
  },
  {
    id: 3,
    lessonConut: 40,
    lessonName: "Darslik nomi",
    studentCount: 1500,
  },
  {
    id: 4,
    lessonConut: 45,
    lessonName: "Darslik nomi",
    studentCount: 500,
  },
];

export default function Darsliklar() {
  return (
    <div className="grid grid-cols-3 gap-[17px]">
      {lessons.map((item) => (
        <div key={item.id} className="rounded-[10px] overflow-hidden h-[202px] border border-[#E7E7E7] shadow">
          <div className="bg-gradient-to-r from-[#0052B4] to-[#13265C] px-3 py-[14px] flex items-center justify-between">
            <p className="text-base text-white">{item.lessonConut} ta dars</p>
            <button className="cursor-pointer">
              <SquarePen size={24} color="white" />
            </button>
          </div>
          <div className="p-3 pb-[14px]  flex flex-col justify-between h-[calc(100%-52px)]">
            <p className="text-2xl text-[#13265C]">{item.lessonName}</p>
            <p className="text-base text-[#464B59]">{item.studentCount} ta o'quvchi</p>
          </div>
        </div>
      ))}
    </div>
  );
}
