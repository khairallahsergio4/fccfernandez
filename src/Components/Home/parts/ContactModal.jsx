import { X, MapPin, Phone } from "lucide-react";
import { useLang } from "../../../hooks/useLang";

export default function ContactModal({ isOpen, onClose }) {
    const {t}=useLang();
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl">

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-red-600 transition"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="bg-blue-700 rounded-t-2xl p-6 text-white">
          <h2 className="text-2xl font-bold">
            {t("productos.miel.contactoMiel.titulo")}
          </h2>
          <p className="text-blue-100 mt-1">
            Freundeskreis Nordargentinien e. V.
          </p>
        </div>

        {/* Contenido */}
        <div className="p-6 space-y-6">

          {/* Dirección */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="text-blue-700" size={22} />
              <h3 className="font-semibold text-lg">{t("productos.miel.contactoMiel.direccion")}</h3>
            </div>

            <div className="bg-gray-100 rounded-xl p-4">
              <p className="font-semibold">
                Freundeskreis Nordargentinien e. V.
              </p>
              <p>Seestraße 5/1</p>
              <p>74831 Gundelsheim-Böttingen</p>
            </div>
          </div>

          {/* Teléfonos */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Phone className="text-green-600" size={22} />
              <h3 className="font-semibold text-lg">{t("productos.miel.contactoMiel.telefonos")}</h3>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+49626162723"
                className="block rounded-xl border p-4 hover:bg-gray-50 transition"
              >
                <p className="font-semibold">
                  Gerlinde Black
                </p>
                <p className="text-blue-700">
                  +49 (0)6261 62723
                </p>
              </a>

              <a
                href="tel:+4962698226"
                className="block rounded-xl border p-4 hover:bg-gray-50 transition"
              >
                <p className="font-semibold">
                  Gudrun Brauch
                </p>
                <p className="text-blue-700">
                  +49 (0)6269 8226
                </p>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}