// src/components/Header.jsx
export default function Header() {
  return (
    <header className="shadow-sm shadow-[#ffffff46] sticky top-0 z-50 py-5 m-4 header-main shape-radius">
      <div className="container mx-auto flex items-center justify-between px-6">

        <div data-aos="fade-up" className="text-2xl font-bold text-white">MyLogo</div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-10 text-gray-700">
            <li data-aos="fade-left" data-aos-delay="150">
              <a href="#home" className="text-xl">Home</a>
            </li>
            <li data-aos="fade-left" data-aos-delay="250">
              <a href="#about" className="text-xl">About</a>
            </li>
            <li data-aos="fade-left" data-aos-delay="350">
              <a href="#faq" className="text-xl">FAQ&apos;s</a>
            </li>
            <li data-aos="fade-left" data-aos-delay="450">
              <a href="#contact" className="text-xl">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}