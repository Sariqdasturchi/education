import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";

export default function LessonPlan() {
  const [stateCollapse1, setStateCollapse1] = useState(false);
  const [stateCollapse2, setStateCollapse2] = useState(false);
  const [stateCollapse3, setStateCollapse3] = useState(false);
  return (
    <section id="education-about" className="w-full h-auto flex justify-center items-center bg-[#E2EAFF]">
      <div className="w-[80%] h-auto flex flex-col justify-center items-center pt-8">
        <div className="w-full h-[108px] flex justify-between items-center mb-12">
          <div className="w-[30%]">
            <h2 className="text-[36px] font-semibold text-[#13265C]">
              Mustaqil ta`lim{" "}
              <span className="text-[#3857AF]">tizimining tarkibi</span>
            </h2>
          </div>
          <div>
            <button className="w-[241px] h-[44px] rounded-[50px] bg-[#13265C] text-[16px] font-normal text-white cursor-pointer hover:bg-[#BBBBBB] transform duration-500">
              Darslarni ko’rish <GoArrowRight className="inline text-[20px]" />
            </button>
          </div>
        </div>
        <div className="w-full h-auto flex">
          <div className="w-[180px] h-[180px] bg-white rounded-[10px] flex justify-center items-center">
            <div className="w-[127px] h-[127px] homeplan"></div>
          </div>
          <div className="ml-12 w-[55%]">
            <h1 className="text-[32px] font-semibold text-[#13265C]">
              Matematika o`qitish metodikasi fаnidan bulutli texnologiyalarga
              asoslangan mustaqil ta`lim tizimining tarkibi:
            </h1>
            <div className="h-0.5 w-full bg-[#C0D1FF] my-10"></div>
            <div className="flex flex-col pb-2 gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                {" "}
                <div
                  onClick={() => setStateCollapse1((state) => !state)}
                  className="flex justify-between items-center cursor-pointer gap-[10px] px-[10px] py-5 bg-white rounded-[10px]"
                >
                  <p className="text-[#13265C] font-semibold text-2xl">
                    01 - Nazariy mashg’ulotlar
                  </p>
                  <DownOutlined
                    className={`transition-transform duration-500 ${
                      stateCollapse1 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    stateCollapse1
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  } text-[#3857AF] text-[20px] bg-white rounded-[10px] p-[10px]`}
                >
                  Matematika o`qitish metodikasi fanini o‘qitishni o‘quv
                  jarayonida ma’ruza mashg‘ulotini tashkil etishda talabalarni
                  mustaqil izlanishlarini uchun nazariy ma’lumotlar,
                  mavzulashgan videolar, interaktiv dars materiallaridan
                  foydalanish imkoniyatiga ega. Bu nazariy mashg‘ulotlar
                  davomida talabalarni analitik fikrlash, muhokama qilish,
                  muammolar yechish va boshqa nazariy bilimlarni amaliy jihatdan
                  rivojlantirishga yordam beradi.
                </div>
              </div>
              <div
                className={`flex flex-col gap-[10px] transition-all duration-500 relative ${
                  !stateCollapse1 ? "translate-y-[-25px]" : "translate-y-0"
                }`}
              >
                <div
                  onClick={() => setStateCollapse2((state) => !state)}
                  className="flex justify-between items-center cursor-pointer gap-[10px] px-[10px] py-5 bg-white rounded-[10px]"
                >
                  <p className="text-[#13265C] font-semibold text-2xl">
                    02 - Amaliy mashg‘ulotlar
                  </p>
                  <DownOutlined
                    className={`transition-transform duration-500 ${
                      stateCollapse2 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    stateCollapse2
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  } text-[#3857AF] text-[20px] bg-white rounded-[10px] p-[10px]`}
                >
                  Matematika o`qitish metodikasi fanini o‘qitishni o‘quv
                  jarayonida ma’ruza mashg‘ulotini tashkil etishda talabalarni
                  mustaqil izlanishlarini uchun nazariy ma’lumotlar,
                  mavzulashgan videolar, interaktiv dars materiallaridan
                  foydalanish imkoniyatiga ega. Bu nazariy mashg‘ulotlar
                  davomida talabalarni analitik fikrlash, muhokama qilish,
                  muammolar yechish va boshqa nazariy bilimlarni amaliy jihatdan
                  rivojlantirishga yordam beradi.
                </div>
              </div>
              <div
                className={`flex flex-col gap-[10px] transition-all duration-500 relativ ${
                  !stateCollapse1 && !stateCollapse2
                    ? "translate-y-[-50px]"
                    : (stateCollapse1 === false && stateCollapse2 === true) ||
                      (stateCollapse1 === true && stateCollapse2 === false)
                    ? "translate-y-[-25px]"
                    : ""
                }`}
              >
                <div
                  onClick={() => setStateCollapse3((state) => !state)}
                  className="flex justify-between items-center cursor-pointer gap-[10px] px-[10px] py-5 bg-white rounded-[10px]"
                >
                  <p className="text-[#13265C] font-semibold text-2xl">
                    03 - Mustaqil ta’lim
                  </p>
                  <DownOutlined
                    className={`transition-transform duration-500 ${
                      stateCollapse3 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    stateCollapse3
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  } text-[#3857AF] text-[20px] bg-white rounded-[10px] p-[10px]`}
                >
                  Matematika o`qitish metodikasi fanini o‘qitishni o‘quv
                  jarayonida ma’ruza mashg‘ulotini tashkil etishda talabalarni
                  mustaqil izlanishlarini uchun nazariy ma’lumotlar,
                  mavzulashgan videolar, interaktiv dars materiallaridan
                  foydalanish imkoniyatiga ega. Bu nazariy mashg‘ulotlar
                  davomida talabalarni analitik fikrlash, muhokama qilish,
                  muammolar yechish va boshqa nazariy bilimlarni amaliy jihatdan
                  rivojlantirishga yordam beradi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
