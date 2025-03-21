import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  BarChartOutlined,
  BookOutlined,
  CheckSquareOutlined,
  FileTextOutlined,
  ReadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { motion as Motion } from "framer-motion"; // Keeps ESLint happy


const Sidebar = () => {
  return (
    <Motion.div
      className="w-[250px] h-screen bg-white shadow-md p-4  fixed top-0 left-0"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1 className="text-xl font-bold mb-6">SAYT NOMI</h1>

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
        <Menu.Item key="6" icon={<ReadOutlined  />}>
          <Link to="/dashboard/acess-lessons"> Ro’yxatdan o’tilgan darslar</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<BarChartOutlined />}>
          <Link to="/dashboard/test-results">Test natijalari</Link>
        </Menu.Item>
      </Menu>
 
      <div className="absolute bottom-5 left-4 w-[90%] flex items-center gap-3 p-3  border border-[#E7E7E7] rounded-lg shadow-sm">
  <UserOutlined className="text-2xl text-gray-100" />
  <span className="text-gray-800 font-medium">John Doe</span>
</div>

    </Motion.div>
  );
};

export default Sidebar;
