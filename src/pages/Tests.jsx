import React from "react";
import PageHeader from "../components/PageHeader";
import { TestCard } from "../components/TestCard";
import { useNavigate } from "react-router-dom";

const Tests = () => {
  const navigate = useNavigate();

  const tests = [
    { number: 1, title: "1-Test", description: "Umumiy bo‘luvchi va umumiy karrali. EKUB va EKUK", status: "Yuborish" },
    { number: 2, title: "2-Test", description: "Irratsional tenglamalar va tengsizliklar", status: "Bajarildi" },
    { number: 3, title: "3-Test", description: "Ko‘rsatkichli tenglamalar va tengsizliklar", status: "Bajarilmadi" },
    { number: 4, title: "4-Test", description: "Irratsional tenglamalar va tengsizliklar", status: "Muvaffaqiyatsiz" }
  ];

  const handletestClick = (test) => {
    if (test.status === "Yuborish") {
      navigate(`${test.number}`);
    }
  };
  return (
    <div>
      <PageHeader title="Testlar" />
      <div className="mt-6 flex flex-wrap gap-6 justify-start ml-4">
        {tests.map((test) => (
          <div onClick={() => handletestClick(test)} className="cursor-pointer">
          <TestCard key={test.id} number={test.number} title={test.title} description={test.description} status={test.status} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tests;
