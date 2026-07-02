import equipo from "../../assets/images/equipo.jpg";
import {useLang} from "./../../hooks/useLang";

import {
  FileText,
  CalendarDays,
  MapPin,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";


const requisitos = [
  "Fotocopia del DNI del alumno/a (1era y 2da hoja)",
  "Fotocopia del acta de nacimiento",
  "En el caso de menor de edad tiene que concurrir el tutor.",
  "Certificado de finalización de estudios primarios (solo en el caso de las titulaciones de 4 meses).",
  "Titulo de nivel secundario, constancia de finalizacion o certificado de alumno regular si estas cursando aún el secundario (para las titulaciones de 8 meses).",
];
export default function Registration () {

  const {t} = useLang();
  return (
    <section className="py-16 px-6 md:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-1 gap-12 items-center">


          {/* Contenido */}
          <div>
            <span className="text-cyan-700 font-semibold uppercase tracking-wider">
              {t("inscripciones.strong")}
            </span>

            <h2 className="text-4xl font-bold text-cyan-900 mt-2 mb-6">
              {t("inscripciones.titulo")}
            </h2>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("inscripciones.texto1")}

            </p>


              <section className="bg-slate-50 py-8">
      <div className="max-w-6xl px-6">


        <div className="grid gap-8 lg:grid-cols-3">

          {/* Requisitos */}
          <div className="lg:col-span-2 rounded-2xl bg-white p-8 shadow-md border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold">
                {t("inscripciones.subtitulo")}
              </h3>
            </div>

            <ul className="space-y-4">
              {requisitos.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <CheckCircle2
                    className="text-green-600 mt-1 flex-shrink-0"
                    size={20}
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fecha y Lugar */}
          <div className="space-y-6">

            <div className="rounded-2xl bg-white p-6 shadow-md border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <CalendarDays className="text-blue-600" size={24} />
                <h3 className="font-bold text-xl">
                  {t("inscripciones.fechas")}
                </h3>
              </div>

              <p className="text-slate-600">
                {t("inscripciones.del")}<strong>{t("inscripciones.strongFechas")}</strong>{t("inscripciones.al")}{" "}
                <strong>           {t("inscripciones.strongFechaFin")}
</strong>.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md border border-slate-200">
             
             <a href="https://www.google.com/maps/search/-27.912727,+-63.886840?entry=tts&g_ep=EgoyMDI2MDYyOC4wIPu8ASoASAFQAw%3D%3D&skid=24ce08ce-3f75-447f-b22f-e0693a573c9d" target="_blank" >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-blue-600" size={24} />
                <h3 className="font-bold text-xl">
                            {t("inscripciones.lugar")}

                </h3>
              </div>

              <p className="text-slate-600">
                           {t("inscripciones.ubicacion")}

              </p>
              </a>
            </div>

          </div>
        </div>


        {/* Botón */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/543854204686"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <FaWhatsapp size={22} />
           {t("inscripciones.botonWhatsapp")}
          </a>
        </div>

      </div>
    </section>

 
          </div>

        </div>
      </div>
    </section>
  );
};

