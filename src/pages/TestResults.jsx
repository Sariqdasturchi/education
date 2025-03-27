import React from 'react'
import PageHeader from '../components/PageHeader'
import { Button, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";

const testData = [
  {
    id: 1,
    title: "1-Test",
    description: "Umumiy bo‘luvchi va umumiy karrali. EKUB va EKUK",
  },
  {
    id: 2,
    title: "2-Test",
    description: "Irratsional tenglamalar va tengsizliklar",
  },
  {
    id: 3,
    title: "3-Test",
    description: "Ko‘rsatkichli tenglamalar va tengsizliklar",
  },
  {
    id: 4,
    title: "4-Test",
    description: "Irratsional tenglamalar va tengsizliklar",
  },
];

export default function TestResults() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div>
<PageHeader title="Test natijalari" className="hidden sm:hidden md:block" />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testData.map((test) => (
            <Card
              key={test.id}
              className="flex flex-col md:flex-row justify-between items-center shadow-md border rounded-lg p-4"
            >
              {/* Chap taraf: ID va matn bo‘lagi */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="bg-[#3857AF] text-white text-lg font-bold w-8 h-8 flex items-center justify-center rounded">
                  {test.id}
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{test.title}</h2>
                  <p className="text-gray-600 text-md font-semibold w-[308px] min-w-0 ">{test.description}</p>
                </div>
                <Button className="text-white mt-3 md:mt-0 " style={{ backgroundColor: '#3857AF', color: "white" }}>
                  Natijani ko‘rish
                </Button>
              </div>


            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
