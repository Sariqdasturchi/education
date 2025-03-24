import React, { useState } from 'react';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CheckSquareOutlined } from '@ant-design/icons';
import { TestResultCard } from '../components/TestResultCard';
const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');


  const tests = [
    { number: 1, title: "1-Test", description: "Umumiy bo‘luvchi va umumiy karrali. EKUB va EKUK", status: "Bajarildi" },
    { number: 2, title: "2-Test", description: "Irratsional tenglamalar va tengsizliklar", status: "Bajarildi" },
    { number: 3, title: "3-Test", description: "Ko‘rsatkichli tenglamalar va tengsizliklar", status: "Muvaffaqiyatsiz" },
    { number: 4, title: "4-Test", description: "Irratsional tenglamalar va tengsizliklar", status: "Muvaffaqiyatsiz" }
  ];
  return (
    <div className="w-full  px-[25px] py-[20px]  mx-auto bg-white  rounded-lg overflow-hidden">
      {/* Banner */}
      <div className="bg-[#3857AF] h-28 w-full rounded-2xl "></div>

      {/* User Info */}
      <div className="relative p-6 flex items-center gap-4 ml-[50px]">
        {/* Profile Image */}
        <div className="w-[178px] h-[178px] rounded-full overflow-hidden border-4 border-white -mt-24 flex justify-center items-center bg-gray-200">
          <Avatar size={100} icon={<UserOutlined />} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#13265C]">Hoshimjon Aliyev</h2>
        </div>

        {/* Edit Button */}
        <Button className="bg-[#13265C] text-white px-6 py-2 rounded-full hover:bg-[#0F1C47]"
          style={{ backgroundColor: '#13265C', color: "white" }}
        >
          Ma'lumotlarni o‘zgartirish
        </Button>
      </div>
      <div className="flex space-x-4 mb-6 ">
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer ${activeTab === 'profile' ? 'bg-[#13265C] text-white' : 'bg-gray-100 text-[#13265C]'
            }`}
          onClick={() => setActiveTab('profile')}
        >
          <UserOutlined />
          <span>Mening profilim</span>
        </div>
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer ${activeTab === 'tests' ? 'bg-[#13265C] text-white' : 'bg-gray-100 text-[#13265C]'
            }`}
          onClick={() => setActiveTab('tests')}
        >
          <CheckSquareOutlined />
          <span>Yechilgan testlar</span>
        </div>
      </div>
      {activeTab === 'profile' ? (
        <div className="space-y-4 ">
          <div className="pt-[0px]">
            <p className="text-[#13265C] font-normal text-[16px] mb-2 leading-[100%] tracking-[0%]">Foydalanuvchi nomingiz:</p>
            <p className="text-[#13265C] font-medium text-[24px] leading-[100%] tracking-[0%]">Hoshimjon123</p>
          </div>
          <div className="pt-[50px]">
            <p className="text-[#13265C] font-normal text-[16px] mb-2 leading-[100%] tracking-[0%]">Ro‘yxatdan o‘tilgan sana:</p>
            <p className="text-[#13265C] font-medium text-[24px] leading-[100%] tracking-[0%]">14.03.2025 13:08</p>
          </div>
          <div className="pt-[50px]">
            <p className="text-[#13265C] font-normal text-[16px] mb-2 leading-[100%] tracking-[0%]">Emailingiz:</p>
            <p className="text-[#13265C] font-medium text-[24px] leading-[100%] tracking-[0%]">hoshimjon@gmail.com</p>
          </div>
          <div className="pt-[50px]">
            <p className="text-[#13265C] font-normal text-[16px] mb-2 leading-[100%] tracking-[0%]">Telefon raqamingiz:</p>
            <p className="text-[#13265C] font-medium text-[24px] leading-[100%] tracking-[0%]">–</p>
          </div>
          <div className="pt-[50px]">
            <p className="text-[#13265C] font-normal text-[16px] mb-2 leading-[100%] tracking-[0%]">Yashash joyingiz:</p>
            <p className="text-[#13265C] font-medium text-[24px] leading-[100%] tracking-[0%]">–</p>
          </div>
        </div>
      ) : (
          <div className="flex flex-wrap gap-6 justify-start ">
              {tests.map((test) => (
                <div className="cursor-pointer">
                <TestResultCard key={test.id} number={test.number} title={test.title} description={test.description} status={test.status} />
                </div>
              ))}
            </div>
      )}

    </div>
  );
};

export default Profile;