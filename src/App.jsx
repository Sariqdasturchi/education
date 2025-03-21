// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Main from './pages/main'
import Footer from './components/footer'
import Login from './pages/login'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
