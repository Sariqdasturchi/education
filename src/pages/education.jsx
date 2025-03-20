import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function Education() {
  return (
    <section
      className="w-full h-auto flex justify-center items-center bg-[#E2EAFF]"
      id="education"
    >
      <div className="w-[80%] h-auto flex flex-col justify-center items-center py-16">
        <div className="w-full h-[108px] flex justify-between items-center mb-10">
          <div className="w-[30%]">
            <h2 className="text-[36px] font-semibold text-[#13265C]">
              Mustaqil ta`lim{" "}
              <span className="text-[#3857AF]">tizimining mаqsаdi</span>
            </h2>
          </div>
          <div>
            <button className="w-[241px] h-[44px] rounded-[50px] bg-[#13265C] text-[16px] font-normal text-white cursor-pointer hover:bg-[#BBBBBB] transform duration-500">
              Darslarni ko’rish <GoArrowRight className="inline text-[20px]" />
            </button>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-between mb-5">
          <div className="w-[589px] h-[384px] elementimg"></div>
          <div className="w-[50%] h-full flex flex-col gap-[30px]">
            <h1 className="text-[32px] font-semibold text-[#13265C]">
              Matematika o`qitish metodikasi fаnidan bulutli texnologiyalarga
              asoslangan mustaqil ta`lim tizimining mаqsаdi:
            </h1>
            <div className="w-full h-[3px] bg-[#C0D1FF]"></div>
            <h4 className="text-[24px] font-normal text-[#13265C]">
              Bo`lajak matematika o`qituvchilаrining metodik tаyyorgаrligini
              аmаlgа оshirish, matematikani o`qitish sаmаrаdоrligini оshirishgа
              imkon bеrаdigаn zаmоnаviy pedagogik vа ахbоrоt tехnоlоgiyalаdan
              foydalanib talabalarning mustaqil ta`limini takomillashtirishdan
              iborat.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
