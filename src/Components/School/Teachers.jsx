import { useLang } from "../../hooks/useLang"
import director from "../../assets/images/docentes/director.jpeg" 
import secretaria from "../../assets/images/docentes/betina.jpeg" 
import preceptora from "../../assets/images/docentes/preceptora.jpeg" 
import informatica from "../../assets/images/docentes/perez.jpeg" 
import carpinteria from "../../assets/images/docentes/russo.jpeg" 
import electricidad from "../../assets/images/docentes/diaz.jpeg" 
import electronica from "../../assets/images/docentes/gutierrez.jpeg" 
import solar from "../../assets/images/docentes/condori.jpeg" 
import mecanica from "../../assets/images/docentes/santillan.jpeg" 
import agricultura from "../../assets/images/docentes/misael.jpeg" 
import ayudanteTecnico from "../../assets/images/docentes/ayudanteTecnico.jpeg" 
import maestranza from "../../assets/images/docentes/maestranza.jpeg" 
import soria from "../../assets/images/docentes/soria.jpeg" 






export default function Teachers() {
    const {t}=useLang();

    const profesores = [
  {
    id:1,
    nombre:t("profesores.1.nombre"),
    rol: t("profesores.1.rol"),
    imagen:director,
  },

    {
    id:2,
    nombre:t("profesores.2.nombre"),
    rol: t("profesores.2.rol"),
    imagen:secretaria,
  },  {
    id:3,
    nombre:t("profesores.3.nombre"),
    rol: t("profesores.3.rol"),
    imagen:preceptora,
  },  {
    id:4,
    nombre:t("profesores.4.nombre"),
    rol: t("profesores.4.rol"),
    imagen:
      soria,
  },  {
    id:5,
    nombre:t("profesores.5.nombre"),
    rol: t("profesores.5.rol"),
    imagen:informatica,
  },  {
    id:6,
    nombre:t("profesores.6.nombre"),
    rol: t("profesores.6.rol"),
    imagen:carpinteria,
  },  {
    id:7,
    nombre:t("profesores.7.nombre"),
    rol: t("profesores.7.rol"),
    imagen:electricidad,
  },  {
    id:8,
    nombre:t("profesores.8.nombre"),
    rol: t("profesores.8.rol"),
    imagen:electronica,
  },  {
    id:9,
    nombre:t("profesores.9.nombre"),
    rol: t("profesores.9.rol"),
    imagen:solar,
  },  {
    id:10,
    nombre:t("profesores.10.nombre"),
    rol: t("profesores.10.rol"),
    imagen:mecanica,
  },  {
    id:11,
    nombre:t("profesores.11.nombre"),
    rol: t("profesores.11.rol"),
    imagen:agricultura,
  },  {
    id:12,
    nombre:t("profesores.12.nombre"),
    rol: t("profesores.12.rol"),
    imagen:ayudanteTecnico,
  },  {
    id:13,
    nombre:t("profesores.13.nombre"),
    rol: t("profesores.13.rol"),
    imagen:maestranza,
  }
  
]
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-cyan-900 mt-2 mb-6">
            {t("profesores.titulo")}
          </h2>
          <p className="text-mt-4 text-lg text-slate-600 leading-relaxed text-justify">
           {t("profesores.texto1")}
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {profesores.map((profesor) => (
            <div key={profesor.id}>
            <li key={profesor.nombre}>
              <div className="flex items-center gap-x-6">
                <img
                  alt={profesor.nombre}
                  src={profesor.imagen}
                  className="size-32 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{profesor.nombre}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{profesor.rol}</p>
                </div>
              </div>
            </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
