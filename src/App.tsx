import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BaiViet from './components/BaiViet';
import BaiVietChiTiet from './components/BaiVietChiTiet';
import ThemBaiViet from './components/ThemBaiViet';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bai-viet" element={<BaiViet />} />
              <Route path="/bai-viet/:id" element={<BaiVietChiTiet />} />
              <Route path="/them-bai-viet" element={<ThemBaiViet />} />
              <Route path="*" element={<p className="p-10 text-center text-red-500 text-xl">404 - Trang không tồn tại</p>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  ) 
}

export default App;
