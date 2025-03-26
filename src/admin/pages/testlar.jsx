import { SquarePen } from "lucide-react";
import React from "react";
const tests = [
  {
    id: 1,
    testConut: 12,
    testName: "Test nomi",
  },
  {
    id: 2,
    testConut: 25,
    testName: "Test nomi",
  },
  {
    id: 3,
    testConut: 40,
    testName: "Test nomi",
  },
];

export default function Testlar() {
  return (
    <div className="grid grid-cols-3 gap-[17px]">
      {tests.map((item) => (
        <div
          key={item.id}
          className="rounded-[10px] overflow-hidden h-[115px] border border-[#E7E7E7] shadow"
        >
          <div className="bg-gradient-to-r from-[#00AF34] to-[#007623] px-3 py-[14px] flex items-center justify-between">
            <p className="text-base text-white">{item.testConut} ta</p>
            <button className="cursor-pointer">
              <SquarePen size={24} color="white" />
            </button>
          </div>
          <div className="p-3 pb-[14px] h-[63px]">
            <p className="text-2xl text-[#13265C]">{item.testName}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
