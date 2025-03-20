import React from "react";
import PageHeader from "../components/PageHeader";
import { TaskCard } from "../components/TaskCard";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const navigate = useNavigate();

  const tasks = [
    { id: 1, number: 1, title: "Topshiriq", description: "Matematika darslarida foydalaniladigan slaydlar tayyorlash", status: "Yuborish" },
    { id: 2, number: 2, title: "Topshiriq", description: "Matematika darslarida foydalaniladigan slaydlar tayyorlash", status: "Bajarildi" },
    { id: 3, number: 3, title: "Topshiriq", description: "Matematika darslarida foydalaniladigan slaydlar tayyorlash", status: "Muvaffaqiyatsiz" },
    { id: 4, number: 4, title: "Topshiriq", description: "Matematika darslarida foydalaniladigan slaydlar tayyorlash", status: "Bajarilmadi" },
  ];

  const handleTaskClick = (task) => {
    if (task.status === "Yuborish") {
      navigate(`${task.id}`);
    }
  };
  return (
    <div>
      <PageHeader title="Topshiriqlar" />
      <div className="mt-6 flex flex-wrap gap-6 justify-start ml-4">
      {tasks.map((task) => (
          <div key={task.id} onClick={() => handleTaskClick(task)} className="cursor-pointer">
            <TaskCard number={task.number} title={task.title} description={task.description} status={task.status} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Tasks;
