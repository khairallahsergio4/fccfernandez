import buo from "../../assets/images/buo.png";
import { useLang } from "../../hooks/useLang";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const { t } = useLang();

  const fundacion = [
    { name: t("menu.lafundacion.item2"), href: "#" },
    { name: t("menu.lafundacion.item3"), href: "#" },
    { name: t("menu.lafundacion.item4"), href: "#" },
    { name: t("menu.lafundacion.item5"), href: "#" },
    { name: t("menu.lafundacion.item6"), href: "#" },
  ];

  const escuela = [
    { name: t("menu.escuela.item2"), href: "#" },
    { name: t("menu.escuela.item3"), href: "#" },
    { name: t("menu.escuela.item4"), href: "#" },
    { name: t("menu.escuela.item5"), href: "#" },
  ];

  const productos = [
    { name: t("menu.productos.item2"), href: "#" },
    { name: t("menu.productos.item3"), href: "#" },
    { name: t("menu.productos.item4"), href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + descripción */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={buo} alt="Logo" />
              </div>
            </div>

            <p className="text-sm leading-7 max-w-xs text-gray-400">
              {t("footer.redes")}
            </p>

            {/* Redes */}
            <div className="flex gap-5 mt-8">
              <a href="#" className="hover:text-white transition">
                <FaFacebook className="text-xl" />
              </a>

              <a href="#" className="hover:text-white transition">
                <FaInstagram className="text-xl" />
              </a>

              <a href="#" className="hover:text-white transition">
                <FaTiktok className="text-xl" />
              </a>

              <a href="#" className="hover:text-white transition">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Fundación */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              {t("menu.lafundacion.item1")}
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://maps.app.goo.gl/tb7vq8px9Sf8Jm5J8" target="_blank" className="hover:text-white transition">
                  {t("footer.mapa")}
                </a>
              </li>
              {fundacion.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Escuela */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              {t("menu.escuela.item1")}
            </h3>

            <ul className="space-y-4 text-sm">
              {escuela.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              {t("menu.productos.item1")}
            </h3>

            <ul className="space-y-4 text-sm">
              {productos.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  {t("menu.contacto")}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  {t("menu.donar")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-center gap-4">
          <span>
            <a href="">© 2026 {t("web.nombreFundacion")} - {t("footer.desarrollado")}</a>
            
          </span>

        </div>
      </div>
    </footer>
  );
}