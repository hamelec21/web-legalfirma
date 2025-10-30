"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// ✅ Mover los links fuera del componente (ya que no cambian)
const LINKS = [
  { name: "Inicio", href: "#hero" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Por qué elegirnos", href: "#porque-elegirnos" },
  { name: "Reseñas", href: "#resenas" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // ✅ Animación del menú móvil
  useEffect(() => {
    if (menuOpen) {
      setAnimateMenu(true);
    } else {
      const timer = setTimeout(() => setAnimateMenu(false), 300);
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  // ✅ ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // Ajusta según altura navbar
      LINKS.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section instanceof HTMLElement) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(link.href.substring(1));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // ✅ Ya no hay warning

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-32">
          {/* Logo */}
          <a
            href="#hero"
            className="flex-shrink-0 max-w-[120px] md:max-w-[150px]"
          >
            <img
              src="/img/logo/legal_firma_logo.png"
              alt="Logo"
              width={130}
              height={40}
              className="w-full h-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            {LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`hover:text-[#a2172b] transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "text-[#a2172b]"
                    : ""
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-[#a2172b] hover:bg-red-800 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {animateMenu && (
        <div
          className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-8 text-xl transition-transform duration-300 ${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          {/* Cerrar */}
          <button
            className="absolute top-6 right-6 text-white p-2 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Links */}
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-300 text-center w-full py-4 hover:text-[#a2172b] ${
                activeSection === link.href.substring(1)
                  ? "text-[#a2172b]"
                  : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Botón Contacto */}
          <a
            href="#contacto"
            className="bg-[#a2172b] hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </>
  );
}
