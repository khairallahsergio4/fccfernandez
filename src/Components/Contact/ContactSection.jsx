import {
  MapPin,
  Phone,
 Mail,
  Landmark,
} from "lucide-react";
import {useLang} from "../../hooks/useLang";

export default function ContactSection() {
    const {t}=useLang()
  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Fundación */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8">
            <h2 className="text-2xl font-bold mb-6">
              {t("contacto.nombreFundacion")}
            </h2>

            {/* Dirección */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold text-lg"> {t("contacto.direccion")}</h3>
              </div>

              <p> {t("contacto.nombreFundacion")}</p>
              <p>Matienzo s/n</p>
              <p>C.P. 4322 Fernández</p>
              <p>Santiago del Estero - Argentina</p>
            </div>

            {/* Teléfono */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold text-lg"> {t("contacto.telefono")}</h3>
              </div>

              <a
                href="tel:+543854911542"
                className="hover:text-yellow-700"
              >
                +54 (0385) 154111443
              </a>
            </div>



            {/* Email */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold text-lg">{t("contacto.correo")}</h3>
              </div>

              <a
                href="mailto:mail@fccfernandez.org"
                className="text-blue-600 hover:underline"
              >
                mail@fccfernandez.org
              </a>
            </div>
          </div>

          {/* Asociación */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8">
            <h2 className="text-2xl font-bold mb-6">
              {t("contacto.asociaciones")}
            </h2>

            {/* Dirección */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold text-lg">{t("contacto.direccion")}</h3>
              </div>

              <p>Freundeskreis Nordargentinien e. V.</p>
              <p>Seestraße 5/1</p>
              <p>74831 Gundelsheim-Böttingen</p>
              <p>Alemania</p>
            </div>

            {/* Teléfonos */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold text-lg">{t("contacto.telefono")}</h3>
              </div>

              <div className="space-y-2">
                <p>0049-(0)6261-62723 (Gerlinde Black)</p>
                <p>0049-(0)6269-8226 (Gudrun Brauch)</p>
              </div>
            </div>



            {/* Email */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold text-lg">{t("contacto.correo")}</h3>
              </div>

              <a
                href="mailto:freundeskreis@fccfernandez.org"
                className="text-blue-600 hover:underline"
              >
                freundeskreis@fccfernandez.org
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}