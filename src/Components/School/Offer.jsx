import React from "react";
import electricidad from "../../assets/images/areas/electricidad.jpg";
import carpinteria from "../../assets/images/areas/carpinteria.jpg";
import mecanica from "../../assets/images/areas/mecanica.jpg";
import energiaSolar from "../../assets/images/areas/energiaSolar.jpg";
import electronica from "../../assets/images/areas/electronica.jpg";
import agricultura from "../../assets/images/areas/agricultura.jpg";
import operadorHorticultor from "../../assets/images/areas/operadorHorticultor.jpg";
import auxiliarMecanico from "../../assets/images/areas/auxiliarMecanico.jpg";
import montador from "../../assets/images/areas/montador.jpg";
import { FaWhatsapp } from "react-icons/fa6";




import {useLang} from "../../hooks/useLang";


const Offer = () => {

  const {t} = useLang();

  
const areas = [

    
      
      {
    id: 1,
    rama:t("ofertaEducativa.1.rama"),
    nombre:t("ofertaEducativa.1.nombre"),
    requisito:t("ofertaEducativa.1.requisito"),
    duracion: t("ofertaEducativa.1.duracion"),
    cargaHoraria: "480 hs.",
    profesor: "Misael Rodríguez",
    imagen: agricultura,
    color: "bg-green-500",
    icono: "👨‍🌾",
  },

        
      {
    id: 2,
      rama:t("ofertaEducativa.2.rama"),
    nombre:t("ofertaEducativa.2.nombre"),
    requisito:t("ofertaEducativa.2.requisito"),
    duracion: t("ofertaEducativa.2.duracion"),
    cargaHoraria: "240 hs.",
    profesor: "Misael Rodríguez",
    imagen: operadorHorticultor,
    color: "bg-green-500",
    icono: "👨‍🌾",
  },

        {
    id: 3,
    rama:t("ofertaEducativa.3.rama"),
    nombre:t("ofertaEducativa.3.nombre"),
    requisito:t("ofertaEducativa.3.requisito"),
    duracion: t("ofertaEducativa.3.duracion"),
    cargaHoraria: "480 hs.",
    profesor: "Ariel Santillán",
    imagen: mecanica,
    color: "bg-gray-500",
    icono: "🚗",
  },


          {
    id: 4,
    rama:t("ofertaEducativa.4.rama"),
    nombre:t("ofertaEducativa.4.nombre"),
    requisito:t("ofertaEducativa.4.requisito"),
    duracion: t("ofertaEducativa.4.duracion"),
    cargaHoraria: "220 hs.",
    profesor: "Ariel Santillán",
    imagen: auxiliarMecanico,
    color: "bg-gray-500",
    icono: "🚗",
  },

  


      {
    id: 5,
    rama:t("ofertaEducativa.5.rama"),
    nombre:t("ofertaEducativa.5.nombre"),
    requisito:t("ofertaEducativa.5.requisito"),
    duracion: t("ofertaEducativa.5.duracion"),
    cargaHoraria: "320 hs.",
    profesor: "Dario Diaz",
    imagen: electricidad,
    color: "bg-blue-500",
    icono: "⚡",
  },

        {
    id: 6,
    rama:t("ofertaEducativa.6.rama"),
    nombre:t("ofertaEducativa.6.nombre"),
    requisito:t("ofertaEducativa.6.requisito"),
    duracion: t("ofertaEducativa.6.duracion"),
    cargaHoraria: "240 hs.",
    profesor: "Dario Diaz",
    imagen: montador,
    color: "bg-blue-500",
    icono: "⚡",
  },

    {
    id: 7,
    rama:t("ofertaEducativa.7.rama"),
    nombre:t("ofertaEducativa.7.nombre"),
    requisito:t("ofertaEducativa.7.requisito"),
    duracion: t("ofertaEducativa.7.duracion"),
    cargaHoraria: "480 hs.",
    profesor: "Diego Gutierrez",
    imagen: electronica,
    color: "bg-violet-500",
    icono: "📟",
  },

    {
    id: 8,
    rama:t("ofertaEducativa.8.rama"),
    nombre:t("ofertaEducativa.8.nombre"),
    requisito:t("ofertaEducativa.8.requisito"),
    duracion: t("ofertaEducativa.8.duracion"),
    cargaHoraria: "440 hs.",
    profesor: "Daniel Condori",
    imagen: energiaSolar,
    color: "bg-yellow-500",
    icono: "💡",
  },

  {
    id: 9,
    rama:t("ofertaEducativa.9.rama"),
    nombre:t("ofertaEducativa.9.nombre"),
    requisito:t("ofertaEducativa.9.requisito"),
    duracion: t("ofertaEducativa.9.duracion"),
    cargaHoraria: "250 hs.",
    profesor: "Franklin Russo",
    imagen: carpinteria,
    color: "bg-amber-700",
    icono: "📐",
  },

];


  const telefono = "543854418025";


  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-cyan-900">
            {t("ofertaEducativa.titulo")}
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            {t("ofertaEducativa.subtitulo")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Imagen */}
              <div className="relative">
                <img
                  src={area.imagen}
                  alt={area.nombre}
                  className="w-full h-60 object-cover"
                />

                <div
                  className={`absolute top-4 left-4 ${area.color} text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg`}
                >
                  <span className="text-xl">{area.icono}</span>
                  <span className="font-semibold">{area.rama}</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-cyan-900 mb-6">
                  {area.nombre}
                </h3>

                <div className="space-y-5 flex-grow">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                     {t("ofertaEducativa.requisito")}
                    </p>

                    <p className="text-gray-700 mt-1">
                      {area.requisito}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                        {t("ofertaEducativa.duracion")}
                      </p>

                      <p className="text-gray-700 mt-1">
                        {area.duracion}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                         {t("ofertaEducativa.carga")}
                      </p>

                      <p className="text-gray-700 mt-1">
                        {area.cargaHoraria}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                       {t("ofertaEducativa.profesor")}
                    </p>

                    <p className="text-gray-700 mt-1">
                      {area.profesor}
                    </p>
                  </div>
                </div>

              <div className="flex justify-center">      
                    <a href={`https://wa.me/${telefono}?text=${encodeURIComponent(
  `${t("ofertaEducativa.promocion")} ${area.nombre}`
)}`} target="blank" className="mt-8 bg-cyan-900 hover:bg-blue-700 text-white py-3 rounded-xl transition-all duration-300 font-medium hover:shadow-lg w-3/4  flex justify-center gap-2 items-center">
                    
                                  <FaWhatsapp />


                   {t("ofertaEducativa.masInfo")}
                   
                  
                
                          </a>

                </div>
                
              
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;


