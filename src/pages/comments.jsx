import { Carousel } from "antd";
import { GoArrowRight } from "react-icons/go";

const items = [
  {
    id: 1,
    role: "O’quvchi",
    name: "Behruz Ubaydullayev",
    desc: "Ustoz berayotgan bilimlaringiz uchun rahmat aytaman, siz sabab juda ham ko’p bilimlarga ega bo’ldim umringiz va martabangiz bundan ham yuqori bo’lsin, Siz dunyodagi eng yaxshi ustozsiz.",
    avatar: <div className="w-[60px] h-[60px] avatarimg1"></div>,
  },
  {
    id: 2,
    role: "O’quvchi",
    name: "Nozima Karimova",
    desc: "Ustozim, sizdan olgan bilimlarim hayotimni o‘zgartirdi, ilmingiz okeandek cheksiz, umringiz abadiy bo‘lsin, siz dunyodagi eng ulug‘ ustozsiz!",
    avatar: <div className="w-16 h-16 avatarimg2"></div>,
  },
  {
    id: 3,
    role: "O’quvchi",
    name: "Aziz Abdullayev",
    desc: "Rahmat, ustoz, sizning sabringiz va bilimlaringiz meni har doim hayratda qoldiradi, martabangiz osmonlarda, umringiz ming yil bo‘lsin, siz eng buyuk ustozsiz!",
    avatar: <div className="w-16 h-16 avatarimg3"></div>,
  },
  {
    id: 4,
    role: "O’quvchi",
    name: "Behruz Ubaydullayev",
    desc: "Ustoz berayotgan bilimlaringiz uchun rahmat aytaman, siz sabab juda ham ko’p bilimlarga ega bo’ldim umringiz va martabangiz bundan ham yuqori bo’lsin, Siz dunyodagi eng yaxshi ustozsiz.",
    avatar: <div className="w-[60px] h-[60px] avatarimg1"></div>,
  },
  {
    id: 5,
    role: "O’quvchi",
    name: "Nozima Karimova",
    desc: "Ustozim, sizdan olgan bilimlarim hayotimni o‘zgartirdi, ilmingiz okeandek cheksiz, umringiz abadiy bo‘lsin, siz dunyodagi eng ulug‘ ustozsiz!",
    avatar: <div className="w-16 h-16 avatarimg2"></div>,
  },
  {
    id: 6,
    role: "O’quvchi",
    name: "Aziz Abdullayev",
    desc: "Rahmat, ustoz, sizning sabringiz va bilimlaringiz meni har doim hayratda qoldiradi, martabangiz osmonlarda, umringiz ming yil bo‘lsin, siz eng buyuk ustozsiz!",
    avatar: <div className="w-16 h-16 avatarimg3"></div>,
  },
];

export default function Comments() {
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <section id="comments" className="w-full h-auto flex items-center justify-center bg-[#F4F7FF]">
      <div className="w-[80%] h-auto py-16 relative">
        <div className="w-full h-[108px] flex justify-between items-center mb-10">
          <div className="w-[30%]">
            <h2 className="text-[36px] font-semibold text-[#13265C]">
              O’quvchilarning{" "}
              <span className="text-[#3857AF]">bergan fikrlari</span>
            </h2>
          </div>
          <div>
            <button className="w-[241px] h-[44px] rounded-[50px] bg-[#13265C] text-[16px] font-normal text-white cursor-pointer hover:bg-[#BBBBBB] transform duration-500">
              Darslarni ko’rish <GoArrowRight className="inline text-[20px]" />
            </button>
          </div>
        </div>
        <Carousel arrows>
          {groupedItems.map((group, index) => (
            <div key={index} className="slide">
              {group.map((item) => (
                <div key={item.id} className="card">
                  <div className="flex gap-[10px]">
                    {item.avatar}
                    <div className="">
                      <p className="text-[#464B59]">{item.role}</p>
                      <p className="text-[#13265C] text-[24px] font-semibold w-[260px] truncate">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <p className="pt-4">{item.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
