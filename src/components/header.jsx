import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { NavmenuList } from "../utils/constant";
import { FaUser } from "react-icons/fa";
import { Drawer } from "antd";

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="flex bg-[#E2EAFF] h-auto justify-center w-full items-center">
        <nav className="flex h-[75px] justify-between w-[90%] items-center">
          {/* logo */}
          <div>
            <Link to={"/"} className="text-[16px] font-extrabold uppercase">
              Sayt Nomi
            </Link>
          </div>
          {/* menu list */}
          <div>
            <ul className="hidden">
              {NavmenuList.map((item, index) => {
                const isActive =
                  (item.link === "/" &&
                    location.pathname === "/" &&
                    !location.hash) || // Faqat home sahifa
                  (item.link.startsWith("#") && location.hash === item.link); // Hash linklar

                return (
                  <li
                    key={item.id}
                    className={`${
                      index === NavmenuList.length - 1 ? "mr-0" : "mr-8"
                    }`}
                  >
                    <a
                      href={item.link}
                      className={`text-[16px] font-normal hover:text-[#1D3A8A] ${
                        isActive ? "text-[#13265C]" : "text-[#464B59]"
                      }`}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* login button */}
          <div>
            <button className="bg-[#13265C] h-[46px] justify-center rounded-full w-[46px] cursor-pointer hidden hover:bg-[#1D3A8A] items-center">
              <FaUser className="text-[#C0D1FF] text-[18px]" />
            </button>
          </div>
          <div>
            <button onClick={showDrawer} className="p-1 cursor-pointer">
              <i className="text-xl fa-bars fa-solid"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Menu */}
      <Drawer
        onClose={onClose}
        open={open}
        closeIcon={
          <i className="text-[#464B59] text-2xl fa-solid fa-xmark"></i>
        }
        headerStyle={{
          borderBottom: "0",
        }}
      >
        <ul className="flex flex-col gap-[14px]">
          {NavmenuList.filter((_, index) => index !== 0).map((item, index) => {
            const isActive =
              (item.link === "/" &&
                location.pathname === "/" &&
                !location.hash) || // Faqat home sahifa
              (item.link.startsWith("#") && location.hash === item.link); // Hash linklar

            return (
              <li
                key={item.id}
                className={`flex items-center gap-[10px] ${
                  index === NavmenuList.length - 1 ? "mr-0" : "mr-8"
                }`}
              >
                <i className={`${item.icon} text-xl ${isActive ? "!text-[#C0D1FF]" : "!text-[#13265C]"}`}></i>
                <a
                  href={item.link}
                  className={`text-[16px] font-medium ${
                    isActive ? "!text-[#C0D1FF]" : "!text-[#13265C]"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </Drawer>
    </>
  );
}
