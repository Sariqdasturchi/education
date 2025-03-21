import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";

export default function LessonPlan() {
  const [stateCollapse1, setStateCollapse1] = useState(false);
  const [stateCollapse2, setStateCollapse2] = useState(false);
  const [stateCollapse3, setStateCollapse3] = useState(false);
  return (
    <section
      id="education-about"
      className="flex bg-[#E2EAFF] h-auto justify-center w-full items-center"
    >
      <div className="flex flex-col h-auto justify-center w-[90%] items-center lg:pt-5 xl:w-[80%]">
        <div className="flex h-[108px] justify-between w-full items-center">
          <h2 className="text-[#13265C] text-2xl font-semibold md:text-[36px]">
            Mustaqil ta`lim{" "}
            <span className="text-[#3857AF] block">tizimining tarkibi</span>
          </h2>
          <div className="hidden md:block">
            <button className="bg-[#13265C] h-[44px] rounded-[50px] text-[16px] text-white w-[241px] cursor-pointer duration-500 font-normal hover:bg-[#BBBBBB] transform">
              Darslarni ko’rish <GoArrowRight className="text-[20px] inline" />
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[915px] md:pt-3 self-start">
          <div className="flex w-full gap-[10px] items-center md:py-4">
            <div className="flex flex-shrink-0 bg-white h-[80px] justify-center rounded-[10px] w-[80px] items-center md:h-[180px] md:w-[180px]">
              <div className="h-[56px] w-[56px] homeplan md:h-[127px] md:w-[127px]"></div>
            </div>
            <h1 className="text-[#13265C] text-[16px] font-semibold lg:pl-12 lg:text-[32px] max-w-[685px] md:pl-8 md:text-3xl">
              Matematika o`qitish metodikasi fаnidan bulutli texnologiyalarga
              asoslangan mustaqil ta`lim tizimining tarkibi:
            </h1>
          </div>
          <div className="flex flex-col max-w-[685px] self-end">
            <div className="bg-[#C0D1FF] h-0.5 w-full my-5"></div>
            <div className="flex flex-col gap-[10px] pb-2">
              <div className="flex flex-col gap-[10px]">
                {" "}
                <div
                  onClick={() => {
                    setStateCollapse1((state) => !state),
                      setStateCollapse2(false);
                    setStateCollapse3(false);
                  }}
                  className="flex bg-white justify-between rounded-[10px] cursor-pointer gap-[10px] items-center lg:py-5 md:py-3 px-[10px] py-2"
                >
                  <p className="text-[#13265C] text-base font-semibold lg:text-2xl md:text-xl">
                    01 - Nazariy mashg’ulotlar
                  </p>
                  <DownOutlined
                    className={`transition-transform duration-500 ${
                      stateCollapse1 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`transition-all duration-500 overflow-hidden  ${
                    stateCollapse1
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  } text-[#3857AF] text-[14px] md:text-base lg:text-xl bg-white rounded-[10px] p-[10px]`}
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
                  onClick={() => {
                    setStateCollapse2((state) => !state),
                      setStateCollapse1(false),
                      setStateCollapse3(false);
                  }}
                  className="flex bg-white justify-between rounded-[10px] cursor-pointer gap-[10px] items-center lg:py-5 md:py-3 px-[10px] py-2"
                >
                  <p className="text-[#13265C] text-base font-semibold lg:text-2xl md:text-xl">
                    02 - Amaliy mashg‘ulotlar
                  </p>
                  <DownOutlined
                    className={`transition-transform duration-500 ${
                      stateCollapse2 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`transition-all duration-500 overflow-hidden  ${
                    stateCollapse2
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  } text-[#3857AF] text-[14px] md:text-base lg:text-xl bg-white rounded-[10px] p-[10px]`}
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
                  onClick={() => {
                    setStateCollapse3((state) => !state),
                      setStateCollapse1(false),
                      setStateCollapse2(false);
                  }}
                  className="flex bg-white justify-between rounded-[10px] cursor-pointer gap-[10px] items-center lg:py-5 md:py-3 px-[10px] py-2"
                >
                  <p className="text-[#13265C] text-base font-semibold lg:text-2xl md:text-xl">
                    03 - Mustaqil ta’lim
                  </p>
                  <DownOutlined
                    className={`transition-transform duration-500 ${
                      stateCollapse3 ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`transition-all duration-500 overflow-hidden  ${
                    stateCollapse3
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  } text-[#3857AF] text-[14px] md:text-base lg:text-xl bg-white rounded-[10px] p-[10px]`}
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
            <div className="w-full bottom-10 md:hidden relative">
              <button className="bg-[#13265C] h-[44px] rounded-[50px] text-[16px] text-white w-full cursor-pointer duration-500 font-normal hover:bg-[#BBBBBB] max-w-[400px] transform">
                Darslarni ko’rish{" "}
                <GoArrowRight className="text-[20px] inline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
