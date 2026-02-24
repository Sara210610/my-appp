"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // для мобильного меню
  const [langOpen, setLangOpen] = useState(false); // для dropdown языков
  const [language, setLanguage] = useState("EN"); // текущий язык

  const languages = ["EN", "UZ", "RU"]; // список языков

  const selectLanguage = (lang: string) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  return (
    <header className="font-medium bg-[#002333]/95 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">

        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold tracking-wide text-[#159A9C] hover:scale-105 transition"
        >
          TashEdu
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/components/About" },
            { name: "Contact", href: "/components/Contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[#B4BEC9] hover:text-[#DEEFE7] transition group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#159A9C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Dropdown для языка */}
        </nav>

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="hidden md:flex bg-[#159A9C] text-white px-5 py-2 rounded-full font-medium hover:bg-[#DEEFE7] hover:text-[#002333] transition duration-300"
            >
              {language} ▼
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => selectLanguage(lang)}
                    className="block w-full text-left px-4 py-2 hover:bg-[#DEEFE7] hover:text-[#002333] transition"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
          
        <button
          className="md:hidden text-[#159A9C] text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-[#002333] px-6 pb-6 space-y-4">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/components/About" },
            { name: "Contact", href: "/components/Contact" },
          ].map((item)  => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-[#B4BEC9] hover:text-[#DEEFE7] transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Dropdown для мобильной версии */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="w-full bg-[#159A9C] text-white py-2 rounded-full font-medium hover:bg-[#DEEFE7] hover:text-[#002333] transition duration-300"
            >
              {language} ▼
            </button>
            {langOpen && (
              <div className="mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => selectLanguage(lang)}
                    className="block w-full text-left px-4 py-2 hover:bg-[#DEEFE7] hover:text-[#002333] transition"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
