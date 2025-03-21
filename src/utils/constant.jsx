import Icon from "../assets/Frame.png";

const NavmenuList = [
  { id: 1, title: "Asosiy sahifa", link: "#home", icon: "fa-house fa-solid" },
  {
    id: 2,
    title: "Ustoz haqida",
    link: "#about",
    icon: "fa-address-card fa-solid",
  },
  {
    id: 3,
    title: "Ta’lim maqsadi",
    link: "#education",
    icon: "fa-clipboard-check fa-solid",
  },
  {
    id: 4,
    title: "Ta’lim tarkibi",
    link: "#education-about",
    icon: "fa-calendar-check fa-solid",
  },
  {
    id: 5,
    title: "O’quvchilar fikri",
    link: "#comments",
    icon: "fa-solid fa-user"
  },
];

const AboutSkilList = [
  { id: 1, title: "Matematikani o‘qitish metodigi", icon: Icon },
  {
    id: 2,
    title: "15 yildan ortiq o‘qituvchilik va tadqiqot faoliyati",
    icon: Icon,
  },
  { id: 3, title: "Xalqaro ta’lim loyihalarida ishtirok etgan", icon: Icon },
  {
    id: 4,
    title: "Zamonaviy ta’lim texnologiyalari bo‘yicha mukofot sohibi",
    icon: Icon,
  },
  {
    id: 5,
    title:
      "Interaktiv testlar va forumlar orqali o‘quv jarayonini rivojlantirgan",
    icon: Icon,
  },
];
const statistics = {
  countUsers: 500,
  tasks: 120,
  theoryLessons: 100,
  selfLearning: 210,
};

export { NavmenuList, AboutSkilList, statistics };
