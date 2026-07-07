import { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaShareAlt,
  FaTimes,
} from "react-icons/fa";
import { useLang } from "../../hooks/useLang";

const RedesButton = () => {
  const {t}=useLang()
  const [abierto, setAbierto] = useState(false);

  const telefono = "5493854111443";
   const mensaje = ""

  const redes = [
    {
      icono: <FaWhatsapp size={24} />,
      color: "bg-green-500 hover:bg-green-600",
      enlace: `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
      nombre: "WhatsApp"
    },
    {
      icono: <FaFacebookF size={22} />,
      color: "bg-blue-600 hover:bg-blue-700",
      enlace: "https://facebook.com/TU_PAGINA",
      nombre: "Facebook",
    },
    {
      icono: <FaInstagram size={22} />,
      color:
        "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
      enlace: "https://instagram.com/TU_USUARIO",
      nombre: "Instagram",
    },
    {
      icono: <FaTiktok size={22} />,
      color: "bg-black hover:bg-gray-800",
      enlace: "https://tiktok.com/@TU_USUARIO",
      nombre: "TikTok",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Redes */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          abierto
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {redes.map((red, index) => (
          <a
            key={index}
            href={red.enlace}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={red.nombre}
            className={`
              ${red.color}
              w-14 h-14
              rounded-full
              flex items-center justify-center
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:scale-110
            `}
          >
            {red.icono}
          </a>
        ))}
      </div>

      {/* Botón principal */}
      <button
        onClick={() => setAbierto(!abierto)}
        className="
          w-16 h-16
          rounded-full
          bg-indigo-600
          hover:bg-indigo-700
          text-white
          flex items-center justify-center
          shadow-2xl
          transition-all
          duration-300
          hover:scale-110
        "
        aria-label="Redes Sociales"
      >
        {abierto ? <FaTimes size={28} /> : <FaShareAlt size={28} />}
      </button>
    </div>
  );
};

export default RedesButton;