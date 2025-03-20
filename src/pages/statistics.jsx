import React from "react";
import { statistics } from "../utils/constant";

export default function Statistics() {
  return (
    <section className="w-full h-auto flex justify-center items-center bg-[#F4F7FF]">
      <div className="w-[80%] h-auto flex justify-between gap-8 items-center py-16">
        <div className="flex gap-5">
          <div className="w-[2px] h-auto bg-[#C0D1FF]"></div>
          <div className="flex flex-col gap-5 pb-[15px]">
            <p className="text-[#464B59] text-[24px]">O’quvchilar soni</p>
            <h2 className="text-[#13265C] font-semibold text-[45px]">
              {statistics?.countUsers}+
            </h2>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-[2px] h-auto bg-[#C0D1FF]"></div>
          <div className="flex flex-col gap-5 pb-[15px]">
            <p className="text-[#464B59] text-[24px]">Topshiriqlar</p>
            <h2 className="text-[#13265C] font-semibold text-[45px]">
              {statistics?.tasks} ta
            </h2>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-[2px] h-auto bg-[#C0D1FF]"></div>
          <div className="flex flex-col gap-5 pb-[15px]">
            <p className="text-[#464B59] text-[24px]">Nazariy mashg`ulotlar</p>
            <h2 className="text-[#13265C] font-semibold text-[45px]">
              {statistics?.theoryLessons} soat
            </h2>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-[2px] h-auto bg-[#C0D1FF]"></div>
          <div className="flex flex-col gap-5 pb-[15px]">
            <p className="text-[#464B59] text-[24px]">Mustaqil ta’lim</p>
            <h2 className="text-[#13265C] font-semibold text-[45px]">
              {statistics?.selfLearning} soat
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
