import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    role: "O’quvchi",
    name: "Behruz Ubaydullayev",
    desc: "Ustoz berayotgan bilimlaringiz uchun rahmat aytaman, siz sabab juda ham ko’p bilimlarga ega bo’ldim.",
    avatar: (
      <div className="flex-shrink-0 h-14 rounded-full w-14 avatarimg1"></div>
    ),
  },
  {
    id: 2,
    role: "O’quvchi",
    name: "Nozima Karimova",
    desc: "Ustozim, sizdan olgan bilimlarim hayotimni o‘zgartirdi, ilmingiz okeandek cheksiz!",
    avatar: (
      <div className="flex-shrink-0 h-14 rounded-full w-14 avatarimg2"></div>
    ),
  },
  {
    id: 3,
    role: "O’quvchi",
    name: "Behruz Ubaydullayev",
    desc: "Ustoz berayotgan bilimlaringiz uchun rahmat aytaman, siz sabab juda ham ko’p bilimlarga ega bo’ldim.",
    avatar: (
      <div className="flex-shrink-0 h-14 rounded-full w-14 avatarimg3"></div>
    ),
  },
  {
    id: 4,
    role: "O’quvchi",
    name: "Nozima Karimova",
    desc: "Ustozim, sizdan olgan bilimlarim hayotimni o‘zgartirdi, ilmingiz okeandek cheksiz!",
    avatar: (
      <div className="flex-shrink-0 h-14 rounded-full w-14 avatarimg2"></div>
    ),
  },
];

export default function Comments() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate()

  return (
    <section
      id="comments"
      className="flex bg-[#F4F7FF] justify-center w-full lg:py-8 py-5"
    >
      <div className="w-[90%]">
        <div className="flex justify-between items-center mb-10">
          <div className="flex justify-between w-full gap-4 items-center xl:px-16">
            <h2 className="text-[#13265C] text-[22px] font-semibold md:text-3xl">
              O’quvchilarning{" "}
              <span className="text-[#3857AF] block">bergan fikrlari</span>
            </h2>
            <button onClick={()=>navigate('/login')} className="bg-[#13265C] h-[44px] rounded-[50px] text-[16px] text-white w-[241px] cursor-pointer duration-500 font-normal hidden hover:bg-[#BBBBBB] transform xl:block">
              Darslarni ko’rish <GoArrowRight className="text-[20px] inline" />
            </button>
            <div className="flex gap-5 xl:hidden">
              <button
                ref={prevRef}
                className="flex bg-[#C0D1FF] h-10 justify-center p-2 rounded-full text-black w-10 duration-300 hover:bg-[#BBBBBB] items-center"
              >
                <i className="text-xl fa-chevron-left fa-solid"></i>
              </button>
              <button
                ref={nextRef}
                className="flex bg-[#C0D1FF] h-10 justify-center p-2 rounded-full text-black w-10 duration-300 hover:bg-[#BBBBBB] items-center"
              >
                <i className="text-xl fa-chevron-right fa-solid"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <button
            onClick={() => prevRef.current?.click()} // Yuqoridagi prevRef ni ishga tushiramiz
            className="flex-shrink-0 bg-[#C0D1FF] h-10 justify-center p-2 rounded-full text-black w-10 duration-300 hidden hover:bg-[#BBBBBB] items-center xl:flex"
          >
            <i className="text-xl fa-chevron-left fa-solid"></i>
          </button>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="card bg-white p-4 rounded-lg shadow-md w-full mx-auto">
                  <div className="flex gap-[10px] items-center">
                    {item.avatar}
                    <div>
                      <p className="text-[#464B59]">{item.role}</p>
                      <p className="text-[#13265C] text-[20px] w-[200px] font-semibold truncate">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <p className="pt-4">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => nextRef.current?.click()} // Yuqoridagi nextRef ni ishga tushiramiz
            className="flex-shrink-0 bg-[#C0D1FF] h-10 justify-center p-2 rounded-full text-black w-10 duration-300 hidden hover:bg-[#BBBBBB] items-center xl:flex"
          >
            <i className="text-xl fa-chevron-right fa-solid"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
