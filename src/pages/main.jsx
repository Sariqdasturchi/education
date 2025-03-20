import React from 'react'
import Home from './home'
import About from './about'
import Education from './education'
import Statistics from './statistics'
import LessonPlan from './lesson-plan'
import Comments from './comments'
import Footer from './footer'

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
            <Footer />
        </main>
    </>
  )
}
