import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './pages/main'
import Layout from './components/Layout'
import Tasks from './pages/Tasks'
import Tests from './pages/Tests'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'
import Profile from './pages/Profile'
import Lessons from './pages/Lessons'
import Acess_Lessons from './pages/Acess-Lessons'
import TestResults from './pages/TestResults'
import TaskSubmission from './components/TaskSubmission'
import TestSubmission from './components/TestSubmission'

export default function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/dashboard" element={<Layout />}>
      <Route index element={<Lessons />} />
      <Route path="tasks" element={<Tasks />} />
      <Route path="tasks/:id" element={<TaskSubmission />} />
      <Route path="tests" element={<Tests />} />
      <Route path="tests/:id" element={<TestSubmission />} />
      <Route path="articles" element={<Articles />} />
      <Route path="articles/:id" element={<ArticlePage />} />
      <Route path="profile" element={<Profile />} />
      <Route path="access-lessons" element={<Acess_Lessons />} />
      <Route path="test-results" element={<TestResults />} />
    </Route>
  </Routes>
</BrowserRouter>

  )
}
