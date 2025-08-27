import { useEffect } from "react";
import './App.css'
import './Theme.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <>
    <div className="main overflow-x-hidden">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
    </>
  )
}

export default App
