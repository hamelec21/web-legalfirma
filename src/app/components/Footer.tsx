"use client";
export default function Footer() {
  const corporateColor = "#a2172b";

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Footer legal */}
      <div className="border-t border-gray-700 mt-6 text-center py-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Legal firma. Todos los derechos
        reservados. <br />
        Sitio desarrollado por{" "}
        <a
          href="https://proscom.cl"
          className="hover:text-red-500 font-semibold"
        >
          Proscom.cl
        </a>
      </div>
    </footer>
  );
}
