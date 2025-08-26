// src/components/Header.jsx
export default function Header() {
  return (
    <header className="shadow-sm shadow-[#ffffff46] sticky top-0 z-50 py-5 m-4 header-main shape-radius">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="text-2xl font-bold text-white">MyLogo</div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-blue-600 transition">
                FAQ&apos;s
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}