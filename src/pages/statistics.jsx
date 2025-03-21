import React from "react";
import { statistics } from "../utils/constant";

export default function Statistics() {
  return (
    <section className="flex bg-[#F4F7FF] justify-center w-full items-center">
      <div className="grid grid-cols-2 justify-between w-[90%] gap-4 items-center md:gap-0 md:grid-cols-4 md:py-16 py-10 xl:w-[80%]">
        {[  
          { label: "O’quvchilar soni", value: `${statistics?.countUsers}+` },
          { label: "Topshiriqlar", value: `${statistics?.tasks} ta` },
          { label: "Nazariy mashg'ulotlar", value: `${statistics?.theoryLessons} soat` },
          { label: "Mustaqil ta’lim", value: `${statistics?.selfLearning} soat` }
        ].map((item, index) => (
          <div key={index} className="flex h-full gap-5">
            <div className="bg-[#C0D1FF] h-full w-[2px]"></div>
            <div className="flex flex-col h-full justify-between">
              <p className="text-[#464B59] text-[14px] lg:text-2xl md:text-lg">
                {item.label}
              </p>
              <h2 className="text-[#13265C] text-[30px] font-semibold">
                {item.value}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
