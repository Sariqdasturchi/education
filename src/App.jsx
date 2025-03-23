// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import Darslar from "./admin/pages/darslar";
import AdminLogin from "./admin/pages/login";
import AdminHome from "./admin/pages/home";
import AdminLayout from "./admin/pages/layout";
import Testlar from "./admin/pages/testlar";
import Analitika from "./admin/pages/analitika";
import Topshiriqlar from "./admin/pages/topshiriqlar";
import Maqolalarim from "./admin/pages/maqolalarim";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/darsliklar" element={<Darslar />} />
          <Route path="/admin/testlar" element={<Testlar />} />
          <Route path="/admin/analitika" element={<Analitika />} />
          <Route path="/admin/topshiriqlar" element={<Topshiriqlar />} />
          <Route path="/admin/maqolalarim" element={<Maqolalarim />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
