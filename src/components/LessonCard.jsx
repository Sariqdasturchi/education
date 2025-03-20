import React from "react";

const LessonCard = ({ number, subject, title, progress }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-[500px]">
      {/* Yuqori qism */}
      <div className="flex items-center space-x-3">
        <div className="bg-blue-600 text-white text-lg font-bold w-8 h-8 flex items-center justify-center rounded">
          {number}
        </div>
        <span className="text-gray-700 font-medium">{subject}</span>
      </div>

      {/* Sarlavha */}
      <h2 className="text-lg font-bold mt-2">{title}</h2>

      {/* Ko‘rish foizi */}
      <p className="text-gray-600 mt-2">
        Ko‘rilgan: <span className="font-bold">{progress}%</span>
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Davom etish tugmasi */}
      <div className="mt-4 flex justify-end">
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
          Davom etish
        </button>
      </div>
    </div>
  );
};

export default LessonCard;
