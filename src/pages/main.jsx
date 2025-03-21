import Home from "./home";
import About from "./about";
import Education from "./education";
import Statistics from "./statistics";
import LessonPlan from "./lesson-plan";
import Comments from "./comments";

export default function Main() {
  return (
    <>
      <main>
        <Home />
        <About />
        <Education />
        <Statistics />
        <LessonPlan />
        <Comments />
      </main>
    </>
  );
}
