import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar, openSidebar } from "../store/sidebarSlice";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChartOutlined,
  BookOutlined,
  CheckSquareOutlined,
  FileTextOutlined,
  ReadOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <>
      {/* Header - faqat kichik ekranlar uchun (sm va md) */}
      <div className="p-4 bg-white shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-50 md:hidden">
        <h1 className="text-lg font-bold">SAYT NOMI</h1>
        {!isOpen && (
          <MenuOutlined
            className="text-2xl cursor-pointer"
            onClick={() => dispatch(openSidebar())}
          />
        )}
      </div>

      {/* Sidebar */}
      <motion.div
        className={`w-[250px] h-screen bg-white shadow-md p-4 fixed top-0 left-0 z-50 md:block ${isOpen ? "block" : "hidden"
          }`}
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Mobil versiyada yopish tugmasi */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h1 className="text-xl font-bold">SAYT NOMI</h1>
          <button className="text-2xl cursor-pointer" onClick={() => dispatch(closeSidebar())}>
            ✖
          </button>
        </div>

        <Menu mode="vertical" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<BookOutlined />}>
            <Link to="/dashboard">Darsliklar</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CheckSquareOutlined />}>
            <Link to="/dashboard/tasks">Topshiriqlar</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>
            <Link to="/dashboard/tests">Testlar</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ReadOutlined />}>
            <Link to="/dashboard/articles">Maqolalarim</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            <Link to="/dashboard/profile">Mening Profilim</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<ReadOutlined />}>
            <Link to="/dashboard/acess-lessons">Ro’yxatdan o’tilgan darslar</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<BarChartOutlined />}>
            <Link to="/dashboard/test-results">Test natijalari</Link>
          </Menu.Item>
        </Menu>

        <div className="absolute bottom-5 left-4 w-[90%] flex items-center gap-3 p-3 border border-[#E7E7E7] rounded-lg shadow-sm">
          <UserOutlined className="text-2xl text-gray-100" />
          <span className="text-gray-800 font-medium">John Doe</span>
        </div>
      </motion.div>

      {/* Overlay - Sidebar ochilganda ekranni bosganda yopilishi */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 bg-opacity-30 z-40 md:hidden"
          onClick={() => dispatch(closeSidebar())}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
