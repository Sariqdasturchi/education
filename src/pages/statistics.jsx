import React from "react";
import { statistics } from "../utils/constant";

export default function Statistics() {
  return (
    <section className="flex bg-[#F4F7FF] h-auto justify-center w-full items-center">
      <div className="flex h-auto justify-between w-[80%] gap-8 items-center py-16">
        <div className="flex gap-5">
          <div className="bg-[#C0D1FF] h-auto w-[2px]"></div>
          <div className="flex flex-col gap-5 pb-[15px]">
            <p className="text-[#464B59] text-[24px]">O’quvchilar soni</p>
            <h2 className="text-[#13265C] text-[45px] font-semibold">
              {statistics?.countUsers}+
            </h2>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-[#C0D1FF] h-auto w-[2px]"></div>
          <div className="flex flex-col gap-5 pb-[15px]">
            <p className="text-[#464B59] text-[24px]">Topshiriqlar</p>
            <h2 className="text-[#13265C] text-[45px] font-semibold">
              {statistics?.tasks} ta
            </h2>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-[#C0D1FF] h-auto w-[2px]"></div>
          <div className="flex flex-col gap-5 pb-[15px]">
            <p className="text-[#464B59] text-[24px]">Nazariy mashg`ulotlar</p>
            <h2 className="text-[#13265C] text-[45px] font-semibold">
              {statistics?.theoryLessons} soat
            </h2>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-[#C0D1FF] h-auto w-[2px]"></div>
          <div className="flex flex-col gap-5 pb-[15px]">
            <p className="text-[#464B59] text-[24px]">Mustaqil ta’lim</p>
            <h2 className="text-[#13265C] text-[45px] font-semibold">
              {statistics?.selfLearning} soat
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
