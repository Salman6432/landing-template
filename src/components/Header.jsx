// src/components/Header.jsx

import { useEffect, useState } from "react";

export default function Header() {

  const [step, setStep] = useState("hidden"); // "hidden" | "circle" | "header"

  useEffect(() => {
    // Step 1: show circle immediately
    setStep("circle");

    // Step 2: after 800ms, switch to header animation
    const timer = setTimeout(() => {
      setStep("header");
    }, 500); // 800ms for circle pulse + 300ms wait

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="custom-container relative">
      <header
        className={`header header-main 
          ${step === "circle" ? "circle" : ""} 
          ${step === "header" ? "animate shape-radius" : ""}`}
        >
          {step === "header" && (
          <div className="container mx-auto flex items-center justify-between px-6">

            <div data-aos="fade-up" className="text-2xl font-bold text-white">MyLogo</div>

            {/* Navigation Menu */}
            <nav>
              <ul className="flex space-x-10 text-gray-700">
                <li data-aos="fade-left" data-aos-delay="150">
                  <a href="/" className="text-xl">Home</a>
                </li>
                <li data-aos="fade-left" data-aos-delay="250">
                  <a href="/about" className="text-xl">About</a>
                </li>
                <li data-aos="fade-left" data-aos-delay="350">
                  <a href="/services" className="text-xl">Services</a>
                </li>
                <li data-aos="fade-left" data-aos-delay="450">
                  <a href="/contact" className="text-xl">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}