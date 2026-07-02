import escuela from "../../assets/images/escuela.jpg";
import huerta from "../../assets/images/huerta.jpg";
import clase from "../../assets/images/clase.jpg";
import futbol from "../../assets/images/futbol.jpg";
import taller from "../../assets/images/taller.jpg";
import promocion from "../../assets/images/promocion.jpg";
import { useLang } from "../../hooks/useLang";
import { Link } from "react-router-dom";

export default function Testimonial() {
  const { t } = useLang();

  const imagenes = [
    huerta,
    taller,
    futbol,
    clase,
    escuela,
    promocion,
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Fondos decorativos */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6 pt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-indigo-800 leading-tight">
              
                       {t("testimonio.escuelaNombre")}
        </h1>
      </div>
   
      <div className="relative mx-auto max-w-7xl px-8 py-8 lg:px-10 lg:py-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Texto */}
          <div>
      
            <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              <span className="text-indigo-600 font-serif">“ </span>

              {t("testimonio.titulo")}

              <span className="text-indigo-600 font-serif"> ”</span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed text-justify">
              {t("testimonio.texto")}
            </p>

            {/* Tarjeta destacada */}
            <div className="mt-8 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-2xl p-6 shadow-lg max-w-md">
              <p className="text-indigo-600 text-3xl font-bold">
                {t("testimonio.tarjeta1.titulo")}
              </p>

              <p className="text-slate-600 mt-2">
                {t("testimonio.tarjeta1.texto")}
              </p>
            </div>

            {/* Botón */}

            <Link to="/institutional" className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-indigo-600
                px-8
                py-4
                text-white
                font-semibold
                shadow-xl
                hover:bg-indigo-700
                hover:-translate-y-1
                transition-all
                duration-300
              " >
                      {t("testimonio.boton")}

                      <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
           

              
          
          </div>

          {/* Galería */}
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
              {imagenes.map((img, i) => (
                <div
                  key={i}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-lg
                    border
                    border-slate-100
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-500
                  "
                >
                  <img
                    src={img}
                    alt={`imagen-${i}`}
                    className="
                      h-40
                      md:h-48
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </div>
              ))}
            </div>

            {/* Tarjeta flotante */}
            <div className="hidden lg:block absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-5 border border-indigo-100">
              <p className="text-indigo-600 font-bold text-2xl">
                 {t("testimonio.tarjeta2.titulo")}
              </p>

              <p className="text-slate-600 text-sm mt-1">
                  {t("testimonio.tarjeta2.texto")}             
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}