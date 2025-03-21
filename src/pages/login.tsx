import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';

const StyledInput = styled(Input)`
  border: 1px solid #E7E7E7 !important;
  box-shadow: none;
  padding: 13px 15px;
  border-radius: 10px;

  &::placeholder {
    color: #464B59;
  }
  &:active {
    border: 1px solid #E7E7E7;
  }

  &:focus {
    border-color: black !important;
    box-shadow: none !important;
  }
`;
const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    width: 22px;
    height: 22px; 
    background-color: #f4f4f4; 
    border-radius: 4px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #3857AF !important; 
    border-color: #3857AF !important;
  }
`;
const StyledButton = styled(Button)`
    color: white;
    font-weight: medium;
    text-transform: uppercase;
    background-color: #13265C;
    border-radius: 50px;
    border: 1px solid #13265C;

    &:hover {
    border-color: #13265C !important; 
    color: white !important;
    background-color: #13265C !important;
    }
`

const onFinish = (values) => {
    console.log(values);
};

const Login = () => {
    return (
        <div className='flex'>
            <div className='h-screen w-1/2 hidden lg:block loginimg'></div>
            <div className='flex flex-col bg-[#F4F7FF] h-screen justify-center p-2 w-full items-center lg:w-1/2'>
                <div className='w-full max-w-[524px]'>
                    <div className='flex gap-[10px] items-center mb-5'>
                        <button className='flex h-6 justify-center w-6 items-center'>
                            <i className="text-[#13265C] text-xl fa-arrow-left fa-solid"></i>
                        </button>
                        <p>Ortga qaytish</p>
                    </div>
                    <div className='bg-white p-5 rounded-[10px]'>
                        <p className='text-[32px] font-medium pb-10'>Kirish</p>
                        <Form
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                            className='flex flex-col gap-5'
                        >
                            <Form.Item
                                className='!mb-0'
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Iltimos foydalanuvchi nomini kiriting!',
                                    },
                                ]}
                            >
                                <StyledInput size='large' placeholder='Foydalanuvchi nomi' />
                            </Form.Item>
                            <Form.Item
                                className='!mb-0'
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Iltimos parolni kiriting!',
                                    },
                                ]}
                            >
                                <StyledInput size='large' placeholder='Parolingizni kiriting' />
                            </Form.Item>

                            <div className='flex justify-between items-center'>
                                <Form.Item className='!mb-0' name="remember" valuePropName="checked" label={null}>
                                    <StyledCheckbox>Eslab qolish</StyledCheckbox>
                                </Form.Item>
                                <button className='text-[#13265C] cursor-pointer hover:underline'>
                                    Parolni unutdingizmi?
                                </button>
                            </div>

                            <Form.Item label={null} className='!mb-0'>
                                <StyledButton className='w-full mt-5 uppercase' size='large' htmlType="submit">
                                    Kirish
                                </StyledButton>
                            </Form.Item>
                            <div className='text-[#13265C] text-center'>
                                <span>Hisobingiz yo’qmi?</span>
                                {" "}
                                <span className='cursor-pointer hover:underline'>Unda ro’yxatdan o’ting</span>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;