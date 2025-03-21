import React from "react";
import { GoArrowRight } from "react-icons/go";
import { AboutSkilList } from "../utils/constant";

export default function About() {
  return (
    <section
      className="flex bg-[#F4F7FF] h-auto justify-center w-full items-center"
      id="about"
    >
      <div className="flex flex-col h-auto justify-center w-[90%] items-center py-10 xl:py-16 xl:w-[80%]">
        <div className="flex justify-between w-full items-center mb-6 md:mb-10">
          <h2 className="text-[#13265C] text-2xl font-semibold lg:text-[36px] md:text-3xl">
            Darsliklar muallifi{" "}
            <span className="text-[#3857AF] block">bilan tanishing</span>
          </h2>
          <div className="hidden md:block">
            <button className="bg-[#13265C] h-[44px] rounded-[50px] text-[16px] text-white w-[241px] cursor-pointer duration-500 font-normal hover:bg-[#BBBBBB] transform">
              Darslarni ko’rish <GoArrowRight className="text-[20px] inline" />
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-5 lg:gap-10 md:flex-row md:items-start">
          <div className="h-100 w-full md:w-[285px]">
            <div className="h-full rounded-[21px] w-full aboutuser max-w-[450px] md:h-[360px] md:w-[285px]"></div>
          </div>
          <ul className="flex flex-col justify-center lg:gap-5">
            {AboutSkilList.map((item, index) => (
              <li
                key={item.id}
                className={`flex items-center gap-[10px] p-[10px]`}
              >
                <div className="flex-shrink-0 h-8 w-8">
                  <img
                    className="h-full w-full"
                    src={item.icon}
                    alt={item.title}
                  />
                </div>
                <p className="text-[#13265C] text-[16px] font-normal md:text-xl">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
          <div className="w-full md:hidden">
            <button className="bg-[#13265C] h-[44px] rounded-[50px] text-[16px] text-white w-full cursor-pointer duration-500 font-normal hover:bg-[#BBBBBB] max-w-[400px] transform">
              Darslarni ko’rish <GoArrowRight className="text-[20px] inline" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
