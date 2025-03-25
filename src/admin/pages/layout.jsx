import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  BookOpen,
  ChartSpline,
  ChevronLeft,
  ClipboardCheck,
  FlaskConical,
  PanelsTopLeft,
} from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const items = [
  {
    key: "1",
    icon: <PanelsTopLeft />,
    label: "Darsliklar",
    path: "/admin/darsliklar",
  },
  {
    key: "2",
    icon: <ClipboardCheck />,
    label: "Topshiriqlar",
    path: "/admin/topshiriqlar",
  },
  {
    key: "3",
    icon: <FlaskConical />,
    label: "Testlar",
    path: "/admin/testlar",
  },
  {
    key: "4",
    icon: <ChartSpline />,
    label: "Analitika",
    path: "/admin/analitika",
  },
  {
    key: "5",
    icon: <BookOpen />,
    label: "Maqolalarim",
    path: "/admin/maqolalarim",
  },
];

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedKey, setSelectedKey] = useState(
    localStorage.getItem("pathKey") || "1"
  );

  const handleMenuClick = (e) => {
    const item = items.find((item) => item.key === e.key);
    if (item) {
      navigate(item.path);
      setSelectedKey(e.key);
      localStorage.setItem("pathKey", e.key);
    }
  };

  const backBtn = <div onClick={()=>navigate(-1)} className="w-[33px] h-[33px] border border-[#E7E7E7] rounded-[5px] cursor-pointer flex items-center justify-center">
    <ChevronLeft />
  </div>

  const headerConfig = {
    "/admin/darsliklar": {
      title: "Darsliklar",
      buttonText: "Darslik qo’shish",
      path: "/admin/add-darslik",
    },
    "/admin/add-darslik": {
      title: <div className="flex items-center gap-5">
        {backBtn}
        <p>Darslik qo’shish</p>
      </div>,
      buttonText: "Saqlash",
      path: "/admin/darsliklar",
    },
    "/admin/testlar": {
      title: "Testlar",
      buttonText: "Test qo’shish",
      path: "/admin/add-test",
    },
    "/admin/add-test": {
      title: <div className="flex items-center gap-5">
      {backBtn}
      <p>Test qo'shish</p>
    </div>,
      buttonText: "Testni saqlash",
      path: "/admin/testlar",
    },
  };
  const { title, buttonText, path } = headerConfig[location.pathname] || {
    title: "Darsliklar",
    buttonText: "Darslik qo’shish",
  };

  return (
    <Layout>
      <Sider
        style={{
          minHeight: "100vh",
          width: "463px",
          backgroundColor: "#13265C",
        }}
        trigger={null}
        collapsible
      >
        <div className="h-[100px] pt-5 pl-6">
          <p className="text-white font-extrabold text-2xl">ADMIN</p>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          items={items}
          style={{
            backgroundColor: "#13265C",
            borderRight: "2px solid #334155",
            padding: "0 12px",
            margin: "0",
          }}
          className="custom-menu"
        />
      </Sider>
      <Layout>
        <Header
          style={{
            height: "100px",
            padding: "28px 50px",
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E7E7E7",
          }}
        >
          <div className="text-[#13265C] h-[44px] flex items-center font-bold text-[32px]">
            {title}
          </div>
          <button
            onClick={() => navigate(path)}
            className="bg-[#13265C] h-[44px] flex items-center px-12 rounded-[50px] cursor-pointer hover:bg-[#BBBBBB] transition text-white"
          >
            {buttonText}
          </button>
        </Header>
        <Content
          style={{
            padding: "35px 50px",
            background: "#F4F7FF",
            height: "calc(100vh - 100px)",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
