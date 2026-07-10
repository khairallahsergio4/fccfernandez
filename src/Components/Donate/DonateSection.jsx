import {
  MapPin,
  Phone,
 Mail,
  Landmark,
} from "lucide-react";
import {useLang} from "../../hooks/useLang";

export default function DonateSection() {
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


            {/* Cuenta bancaria */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Landmark className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold text-lg">
                 {t("contacto.cuenta")}
                </h3>
              </div>

              <div className="space-y-1 text-sm">
                <p><strong> {t("contacto.banco")}:</strong> Banco Nación Argentina</p>
                <p><strong> {t("contacto.numero")}:</strong> 2601129548</p>
                <p><strong> {t("contacto.sucursal")}:</strong> Fernández, Santiago del Estero</p>
                <p><strong>CUIT:</strong> 30-61952889-8</p>
                <p><strong>{t("contacto.titular")}:</strong>{t("contacto.nombreFundacion")}</p>
              </div>
            </div>

          </div>

          {/* Asociación */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8">
            <h2 className="text-2xl font-bold mb-6">
              {t("contacto.asociaciones")}
            </h2>

         

            {/* Donaciones */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Landmark className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold text-lg">
{t("contacto.donaciones")}                </h3>
              </div>

              <div className="space-y-2 text-sm">
                <p><strong>{t("contacto.titular")}:</strong> Freundeskreis Nordargentinien e. V.</p>
                <p><strong>Konto:</strong> 230 005 150</p>
                <p><strong>Kreissparkasse:</strong> Heilbronn</p>
                <p><strong>BLZ:</strong> 620 500 00</p>
                <p><strong>IBAN:</strong> DE55 6205 0000 0230 0051 50</p>

                <div className="mt-4 rounded-lg bg-yellow-100 p-4 text-gray-700">
                  {t("contacto.aclaracion")}
                </div>
              </div>
            </div>

        
          </div>

        </div>
      </div>
    </section>
  );
}