import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
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
  font-weight: medium;
  text-transform: uppercase;
  background-color: #13265c;
  border-radius: 50px;
  border: 1px solid #13265c;

  &:hover {
    border-color: #13265c !important;
    color: white !important;
    background-color: #13265c !important;
  }
`;

export default function AdminLogin() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    navigate("/admin/home");
  };
  return (
    <>
      <div className="flex flex-col bg-[#F4F7FF] h-screen justify-center p-4 w-full items-center">
        <div className="w-full max-w-[524px]">
          <p className="text-center font-bold text-[40px] pb-10">ADMIN</p>
          <div className="bg-white p-5 rounded-[10px]">
            <p className="text-[32px] font-medium pb-10">Kirish</p>
            <Form
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              className="flex flex-col gap-5"
            >
              <Form.Item
                className="!mb-0"
                name="login"
                rules={[
                  {
                    required: true,
                    message: "Iltimos login ni kiriting!",
                  },
                ]}
              >
                <StyledInput size="large" placeholder="Login" />
              </Form.Item>
              <Form.Item
                className="!mb-0"
                name="parol"
                rules={[
                  {
                    required: true,
                    message: "Iltimos parolni kiriting!",
                  },
                ]}
              >
                <StyledInput size="large" placeholder="Parol" />
              </Form.Item>

              <Form.Item label={null} className="!mb-0">
                <StyledButton
                  className="w-full mt-5 uppercase"
                  size="large"
                  htmlType="submit"
                >
                  Kirish
                </StyledButton>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
