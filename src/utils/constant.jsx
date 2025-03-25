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

// Example data for articles
const ArticlesData = [
  {id:1, image:"default.png", title: "Matematika olami haqida qiziqarli ma'lumotlar", text: `Matematika — kichik yoshimizdan tanishishni boshlaydigan keng ilm. Shu sabab uning birinchi sinfdan dars sifatida o'qitilishi bejiz emas. Axir umumiy matematik bilimlarsiz zamonaviy dunyoda judayam nochor bo'lib qolardik. Xuddi ilmlar qirolichasisiz kimyo, fizika, tibbiyot va boshqa ko'plab fanlar mavjud bo'lmagani kabi. Keling, matematika to'g'risidagi qiziqarli ma'lumotlar bilan tanishamiz.
1) Tarixdagi birinchi matematik ayol aleksandriyalik Gipatiya bo'lgan. 
2) «Teng» belgisi XVI asrda, manfiy sonlar esa faqat XIX asrga kelib ilk marta qo'llanilgan.
3) Birdan yuzgacha bo'lgan jami sonlar yig'indisi 5050 ga teng.
4) Lahza nima? Bu bor-yo'g'i ibora emas, 0,01 soniyaga teng bo'lgan vaqt o'lchov birligi ekan.
5) Tayvan orolida to'rt sonidan juda qo'rqishadi, chunki u mahalliy aholi uchun o'limni anglatadi. Bu holat shu darajaga yetganki, ba'zi uylarda to'rtinchi qavat va mana shunday raqamli xonadonlar yo'q.
6) Matematika fanlari yetuk professori Stiven Xoking shu darajada iste'dodli ediki, barcha materiallarni o'zi mustaqil o'rgangan. Uning so'zlariga ko'ra, matematika fanini maktabdagina o'rgatishgan.
7) Rossiya imperiyasida davlat tomonidan qo'yilgan taqiq sabab ayollar ilmiy faoliyat bilan shug'ullana olishmagan.
8) Rim imperiyasida nol raqami mavjudligi haqida bilishmagan. Bu raqamsiz matematika ma'nosiz ekani hisobga olinib, rivojlangan sivilizatsiyalardan biri bo'lishlariga qaramay, hisobni bir raqamisiz bir amallab yuritishgan.
9) Bir kuni Jorj Dantsing universitet talabasi bo'lgan vaqtida darsga kech qoldi va doskada tushunarsiz tenglamalarni ko'rdi. U vazifani uy ishi sifatida qabul qildi, qiyinchilik bilan bo'lsa-da, ularni yechdi. Kelasi kuni u dunyodagi hech bir professor yechimini topa olmagan g'aroyib masalalar ekani ma'lum bo'ldi.
10) XX asrning boshiga qadar matematika bo'yicha barcha bilim va hisoblar 80 ta katta bo'lmagan nashrlarga sig'ar edi. O'sha paytdan beri soha shu qadar kengaydiki, matematika asoslarini 800 ta kitobga joylashtirish imkonsiz bo'lardi.`}
]

export { NavmenuList, AboutSkilList, statistics, ArticlesData };
