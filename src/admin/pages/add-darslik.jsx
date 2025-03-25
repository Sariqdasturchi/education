import { Button, Form, Input, Menu } from "antd";
import {
  Check,
  LockKeyhole,
  Play,
  Plus,
  SquarePen,
  Trash2,
} from "lucide-react";
import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled(Input)`
  border: 1px solid #e7e7e7 !important;
  box-shadow: none;
  padding: 8px 12px;
  border-radius: 10px;

  &::placeholder {
    color: #464b59;
  }
  &:active {
    border: 1px solid #e7e7e7;
  }

  &:focus {
    border-color: black !important;
    box-shadow: none !important;
  }

  @media (min-width: 768px) {
    padding: 13px 15px;
  }
`;
const StyledButton = styled(Button)`
  color: white;
  background-color: #13265c;
  border-radius: 10px;
  border: 1px solid #13265c;
  width: 51px;
  height: 51px;

  &:hover {
    border-color: #13265c !important;
    color: white !important;
    background-color: #13265c !important;
  }
`;
const MenuWrapper = styled.div`
  border: 1px solid #e7e7e7;
  width: 381px;
  border-radius: 10px;
  overflow: hidden;

  .menu-header {
    padding: 20px;
    font-size: 24px;
    font-weight: medium;
    background-color: white;
  }
`;
const StyledMenu = styled(Menu)`
  width: 381px;
  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s;
    width: 100%;
  }
  .ant-menu-submenu-title {
    border-radius: 0;
    width: 100%;
    border: 1px solid #e7e7e7;
    padding: 32px 40px;
    margin: 0 !important;
  }
  .ant-menu-submenu-title:hover {
    background-color: transparent !important;
  }
  .ant-menu-submenu-title:active {
    background-color: #f5f5f5 !important;
  }
  .ant-menu-item-only-child {
    border-radius: 0;
    width: 100%;
    margin: 0 !important;
    padding: 30px 20px !important;
    background-color: #f4f7ff;
  }
  .ant-menu-item-only-child:hover {
    background-color: #f4f7ff !important;
  }
  .video-time {
    color: #464b59;
  }
  .ant-menu-item-selected .video-time {
    color: #3857af;
  }
  .ant-menu-submenu-arrow {
    color: #13265c;
  }
  .icons {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const items = [
  {
    key: "sub1",
    label: (
      <div className="menu-item">
        <span className="font-medium text-base text-black">1-Bo'lim</span>
        <span className="icons">
          <span className="text-[#464B59] font-medium">{14} min</span>
          <button className="w-[33px] h-[33px] bg-[#CFE0FF] flex items-center justify-center cursor-pointer rounded-[5px]">
            <SquarePen size={18} color="#70A2FF" />
          </button>
          <button className="w-[33px] h-[33px] bg-[#FFD3D3] flex items-center justify-center cursor-pointer rounded-[5px]">
            <Trash2 size={18} color="#FF7070" />
          </button>
        </span>
      </div>
    ),
    children: [
      {
        key: "1",
        label: (
          <div className="menu-item">
            <span className="flex items-center gap-[10px] ">
              <Play size={18} color="#3857AF" />
              <span className="font-medium text-[#464B59]">Video nomi</span>
            </span>
            <span className="flex items-center gap-[10px]">
              <span className="font-medium video-time">2 min</span>
              <button className="w-[33px] h-[33px] bg-[#CFE0FF] flex items-center justify-center cursor-pointer rounded-[5px]">
                <SquarePen size={18} color="#70A2FF" />
              </button>
              <button className="w-[33px] h-[33px] bg-[#FFD3D3] flex items-center justify-center cursor-pointer rounded-[5px]">
                <Trash2 size={18} color="#FF7070" />
              </button>
            </span>
          </div>
        ),
      },
      {
        key: "2",
        label: (
          <div className="menu-item">
            <span className="flex items-center gap-[10px] ">
              <LockKeyhole size={18} color="#13265C" />
              <span className="font-medium text-[#464B59]">Video nomi</span>
            </span>
            <span className="flex items-center gap-[10px]">
              <span className="font-medium video-time">12 min</span>
              <button className="w-[33px] h-[33px] bg-[#CFE0FF] flex items-center justify-center cursor-pointer rounded-[5px]">
                <SquarePen size={18} color="#70A2FF" />
              </button>
              <button className="w-[33px] h-[33px] bg-[#FFD3D3] flex items-center justify-center cursor-pointer rounded-[5px]">
                <Trash2 size={18} color="#FF7070" />
              </button>
            </span>
          </div>
        ),
      },
      {
        key: "3",
        label: (
          <div className="menu-item">
            <div className="flex items-center gap-[10px]">
              <Plus size={24} color="#3857AF" />
              <span className="font-medium text-[#3857AF]">Video qo’shish</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    key: "sub2",
    label: (
      <div className="menu-item">
        <span className="font-medium text-base text-black">2-Bo'lim</span>
        <span className="icons">
          <span className="text-[#464B59] font-medium">{0} min</span>
          <button className="w-[33px] h-[33px] bg-[#CFE0FF] flex items-center justify-center cursor-pointer rounded-[5px]">
            <SquarePen size={18} color="#70A2FF" />
          </button>
          <button className="w-[33px] h-[33px] bg-[#FFD3D3] flex items-center justify-center cursor-pointer rounded-[5px]">
            <Trash2 size={18} color="#FF7070" />
          </button>
        </span>
      </div>
    ),
    children: [
      {
        key: "4",
        label: (
          <div className="menu-item">
            <div className="flex items-center gap-[10px]">
              <Plus size={24} color="#3857AF" />
              <span className="font-medium text-[#3857AF]">Video qo’shish</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    key: "sub3",
    label: (
      <div className="menu-item">
        <span className="font-medium text-base text-black">3-Bo'lim</span>
        <span className="icons">
          <span className="text-[#464B59] font-medium">{0} min</span>
          <button className="w-[33px] h-[33px] bg-[#CFE0FF] flex items-center justify-center cursor-pointer rounded-[5px]">
            <SquarePen size={18} color="#70A2FF" />
          </button>
          <button className="w-[33px] h-[33px] bg-[#FFD3D3] flex items-center justify-center cursor-pointer rounded-[5px]">
            <Trash2 size={18} color="#FF7070" />
          </button>
        </span>
      </div>
    ),
    children: [
      {
        key: "5",
        label: (
          <div className="menu-item">
            <div className="flex items-center gap-[10px]">
              <Plus size={24} color="#3857AF" />
              <span className="font-medium text-[#3857AF]">Video qo’shish</span>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default function AddDarslik() {
  const onFinish = (values) => {
    console.log(values);
  };
  const onSubmit = (e) => {
    console.log(e.key);
  };
  return (
    <div className="flex items-start justify-between">
      <div className="max-w-[450px] w-full">
        <Form
          name="basic"
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
          className="flex flex-col gap-5"
          requiredMark={false}
        >
          <Form.Item
            className="!mb-0"
            label={
              <span className="font-medium text-[#13265C]">Dars nomi</span>
            }
            name="lessonName"
            rules={[
              {
                required: true,
                message: "Iltimos dars nomini kiriting!",
              },
            ]}
          >
            <StyledInput size="large" placeholder="Dars nomi" />
          </Form.Item>
          <div className="flex items-center gap-[10px]">
            <Form.Item
              className="!mb-0"
              label={
                <span className="font-medium text-[#13265C]">
                  Jami darslar soni
                </span>
              }
              name="lessonCount"
              rules={[
                {
                  required: true,
                  message: "Iltimos dars sonini kiriting!",
                },
              ]}
            >
              <StyledInput
                type="number"
                size="large"
                placeholder="Darslar soni"
              />
            </Form.Item>
            <Form.Item
              className="!mb-0"
              label={
                <span className="font-medium text-[#13265C]">
                  Jami dars davomiyligi
                </span>
              }
              name="lessonDuration"
              rules={[
                {
                  required: true,
                  message: "Dars davomiyligini kiriting!",
                },
              ]}
            >
              <StyledInput
                type="number"
                size="large"
                placeholder="Darslar davomiyligi"
              />
            </Form.Item>
          </div>
          <div className="flex items-end gap-[10px]">
            <Form.Item
              className="!mb-0 w-full"
              label={
                <span className="font-medium text-[#13265C]">
                  Bo’lim qo’shish
                </span>
              }
              name="moduleName"
              rules={[
                {
                  required: true,
                  message: "Iltimos bo'lim nomini kiriting!",
                },
              ]}
            >
              <StyledInput size="large" placeholder="Yangi bo’lim qo’shish" />
            </Form.Item>
            <Form.Item label={null} className="!mb-0">
              <StyledButton size="large" htmlType="submit">
                <Check />
              </StyledButton>
            </Form.Item>
          </div>
        </Form>
      </div>
      <MenuWrapper>
        <div className="menu-header">Kurs tarkibi</div>
        <StyledMenu
          onClick={onSubmit}
          mode="inline"
          items={items}
          defaultOpenKeys={["sub1"]}
        />
      </MenuWrapper>
    </div>
  );
}
