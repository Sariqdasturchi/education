import React from "react";
import PageHeader from "../components/PageHeader";
import { TestCard } from "../components/TestCard";

const Tests = () => {
  const tests = [
    { number: 1, title: "1-Test", description: "Umumiy bo‘luvchi va umumiy karrali. EKUB va EKUK", status: "Yuborildi" },
    { number: 2, title: "2-Test", description: "Irratsional tenglamalar va tengsizliklar", status: "Bajarildi" },
    { number: 3, title: "3-Test", description: "Ko‘rsatkichli tenglamalar va tengsizliklar", status: "Bajarilmadi" },
    { number: 4, title: "4-Test", description: "Irratsional tenglamalar va tengsizliklar", status: "Muvaffaqiyatsiz" }
  ];
  return (
    <div>
      <PageHeader title="Testlar" />
      <div className="mt-6 flex flex-wrap gap-6 justify-start ml-4">
        {tests.map((task) => (
          <TestCard key={task.id} number={task.number} title={task.title} description={task.description} status={task.status} />
        ))}
      </div>
    </div>
  );
};

export default Tests;
