import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledInput = styled(Input)`
  border: 1px solid #E7E7E7 !important;
  box-shadow: none;
  padding: 8px 12px;
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

    @media (min-width: 768px) { 
         padding: 13px 15px;
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

    @media (min-width: 768px){

    }
`

const onFinish = (values) => {
    console.log(values);
};

const Login = () => {
    const [state, setState] = useState("login")
    const navigate = useNavigate()
    return (
        <>
            {state === "login" ? (
                <div className='flex'>
                    <div className='h-screen w-1/2 hidden lg:block loginimg'></div>
                    <div className='flex flex-col bg-[#F4F7FF] h-screen justify-center p-4 w-full items-center lg:w-1/2'>
                        <div className='w-full max-w-[524px]'>
                            <div className='flex gap-[10px] items-center mb-5'>
                                <button onClick={() => navigate('/')} className='flex cursor-pointer h-6 justify-center w-6 items-center'>
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
                                        <button onClick={() => setState('register')} className='cursor-pointer hover:underline'>Unda ro’yxatdan o’ting</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex'>
                    <div className='h-screen w-1/2 hidden lg:block loginimg'></div>
                    <div className='flex flex-col bg-[#F4F7FF] h-screen justify-center p-2 w-full items-center lg:w-1/2'>
                        <div className='w-full max-w-[524px] max-h-[90vh] overflow-y-auto'>
                            <div className='flex gap-[10px] items-center mb-5'>
                                <button onClick={() => navigate('/')} className='flex cursor-pointer h-6 justify-center w-6 items-center'>
                                    <i className="text-[#13265C] text-xl fa-arrow-left fa-solid"></i>
                                </button>
                                <p>Ortga qaytish</p>
                            </div>
                            <div className='bg-white p-5 rounded-[10px]'>
                                <p className='text-[32px] font-medium pb-10'>Ro’yxatdan o’tish</p>
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
                                        name="firstname"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Iltimos ismingizni kiriting!',
                                            },
                                            {
                                                pattern: /^[A-Za-z\s]+$/,
                                                message: 'Ism faqat harflardan iborat bo‘lishi kerak!',
                                            }
                                        ]}
                                    >
                                        <StyledInput size='large' placeholder='Ismingiz' />
                                    </Form.Item>
                                    <Form.Item
                                        className='!mb-0'
                                        name="lastname"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Iltimos familiyangiz kiriting!',
                                            },
                                            {
                                                pattern: /^[A-Za-z\s]+$/,
                                                message: 'Familya faqat harflardan iborat bo‘lishi kerak!',
                                            }
                                        ]}
                                    >
                                        <StyledInput size='large' placeholder='Familiyangiz' />
                                    </Form.Item>
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
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Iltimos emailingizni kiriting!',
                                            },
                                            {
                                                type: 'email',
                                                message: 'Email noto‘g‘ri formatda!',
                                            }
                                        ]}
                                    >
                                        <StyledInput size='large' placeholder='E-mail' />
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
                                        <StyledInput size='large' placeholder='Parol' />
                                    </Form.Item>
                                    <Form.Item
                                        className='!mb-0'
                                        name="password2"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Iltimos parolni takroran kiriting!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('Parollar bir-biriga mos emas!'));
                                                },
                                            }),
                                        ]}

                                    >
                                        <StyledInput size='large' placeholder='Parol (takroriy)' />
                                    </Form.Item>

                                    <Form.Item label={null} className='!mb-0'>
                                        <StyledButton className='w-full mt-5 uppercase' size='large' htmlType="submit">
                                            RO’YXATDAN O’TISH
                                        </StyledButton>
                                    </Form.Item>
                                    <div className='text-[#13265C] text-center'>
                                        <span>Hisobingiz bormi?</span>
                                        {" "}
                                        <button onClick={() => setState('login')} className='cursor-pointer hover:underline'>Unda Kiring</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Login;