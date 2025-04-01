"use client";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="bg-white shadow h-screen flex flex-col justify-center items-center relative"
    >
      {/* Logo Section */}
      <div className="flex justify-center mb-4 relative z-10">
        <Image
          src="/logo_sangare_upscale.jpeg"
          alt="Logo de Maître Jean Dupont"
          width={700}
          height={700}
          className="object-contain"
        />
      </div>

      {/* Navbar */}
      <nav className="space-x-6 relative z-10">
      <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">
        Services 
        </a>
        <span>&#8226;</span>
        <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">
        À propos
        </a>
        <span>&#8226;</span>
        <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition duration-300">
        Témoignages
        </a>
        <span>&#8226;</span>
        <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
        Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
