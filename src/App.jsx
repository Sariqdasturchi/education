// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import Login from './pages/login'
import Darslar from './admin/pages/darslar'
import AdminLogin from './admin/pages/login'
import AdminHome from './admin/pages/home'
import AdminLayout from './admin/pages/layout'
import Testlar from './admin/pages/testlar'
import Analitika from './admin/pages/analitika'
import Topshiriqlar from './admin/pages/topshiriqlar'
import Maqolalarim from './admin/pages/maqolalarim'
import MaqolaTahrir from './admin/pages/maqolatahrir'
import Layout from './components/Layout'
import Tasks from './pages/Tasks'
import Tests from './pages/Tests'
import Articles from './pages/Articles'
import Profile from './pages/Profile'
import Lessons from './pages/Lessons'
import Acess_Lessons from './pages/Acess-Lessons'
import TestResults from './pages/TestResults'
import TaskSubmission from './components/TaskSubmission'
import TestSubmission from './components/TestSubmission'
import ArticlePage from './pages/ArticlesPage'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        {/* Admin layout (parent route) */}
        <Route path='/admin' element={<AdminLayout />}>
          {/* Nested routes (Outlet ichiga chiqadi) */}
          <Route path='home' element={<AdminHome />} />
          <Route path='darsliklar' element={<Darslar />} />
          <Route path='testlar' element={<Testlar />} />
          <Route path='analitika' element={<Analitika />} />
          <Route path='topshir iqlar' element={<Topshiriqlar />} />
          <Route path='maqolalarim' element={<Maqolalarim />} />
          <Route path='maqolalarim/edit/:id' element={<MaqolaTahrir />} />
        </Route>
        {/* Dashboard layout (parent route) */}
        <Route path='/dashboard' element={<Layout />}>
          {/* Nested routes (Outlet ichiga chiqadi) */}
          <Route index element={<Lessons />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='tasks/:id' element={<TaskSubmission />} />
          <Route path='tests' element={<Tests />} />
          <Route path='tests/:id' element={<TestSubmission />} />
          <Route path='articles' element={<Articles />} />
          <Route path='articles/:id' element={<ArticlePage />} />
          <Route path='profile' element={<Profile />} />
          <Route path='access-lessons' element={<Acess_Lessons />} />
          <Route path='test-results' element={<TestResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
