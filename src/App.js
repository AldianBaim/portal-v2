import { Route, Routes } from 'react-router-dom';

//Import pages
import Home from "../src/pages/index"
import NotFound from "../src/pages/error/notFound"
import Login from "../src/pages/auth/Login"
import Register from "../src/pages/auth/Register"
import ForgotPassword from "./pages/auth/ForgotPassword"
import Catalog from "../src/pages/catalog"
import CatalogDetail from "../src/pages/catalog/slug"
import ForParent from "./pages/guide/forParent"
import ForStudent from "./pages/guide/forStudent"
import ForTeacher from "./pages/guide/forTeacher"
import Test from './test';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/katalog" element={<Catalog />} />
      <Route path="/katalog/:slug" element={<CatalogDetail />} />
      <Route path="/panduan/orang-tua" element={<ForParent />} />
      <Route path="/panduan/siswa" element={<ForStudent />} />
      <Route path="/panduan/guru" element={<ForTeacher />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrasi" element={<Register />} />
      <Route path="/lupa-sandi" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App