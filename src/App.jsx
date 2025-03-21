// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Main from './pages/main'
import Footer from './components/footer'

export default function App () {
  return (
    <BrowserRouter>
      <Header />
      {/* <Routes>
        <Route path='/' element={<Main />} />
      </Routes> */}
      {/* <Footer /> */}
    </BrowserRouter>
  )
}
