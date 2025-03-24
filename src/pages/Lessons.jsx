import React from "react";
import PageHeader from "../components/PageHeader";
import LessonCard from "../components/LessonCard";
import { Sidebar } from "lucide-react";

const Lessons = () => {

  const lessons = [
    {
      number: 1,
      subject: "Matematika",
      title: "Ko‘rsatkichli tenglamalar va tengsizliklar",
      progress: 65,
    },
    {
      number: 2,
      subject: "Fizika",
      title: "Harakat qonunlari",
      progress: 80,
    },
    {
      number: 3,
      subject: "Ingliz tili",
      title: "Modal fe’llar",
      progress: 45,
    },
    {
      number: 4,
      subject: "Ona tili",
      title: "Modal fe’llar",
      progress: 95,
    },
  ];


  return (
    <div>
      <PageHeader title="Darsliklar" />
      {/* Darsliklarni ro‘yxat sifatida chiqarish */}
      <div className="mt-4 flex flex-wrap gap-6 justify-start ml-4 ">
        {lessons.map((lesson, index) => (
          <LessonCard
            key={index}
            number={lesson.number}
            subject={lesson.subject}
            title={lesson.title}
            progress={lesson.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
