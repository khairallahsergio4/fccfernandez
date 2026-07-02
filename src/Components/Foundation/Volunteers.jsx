import martina from "../../assets/images/martina.jpg";
import venta1 from "../../assets/images/venta1.jpg";
import venta2 from "../../assets/images/venta2.jpg";
import comedor1 from "../../assets/images/comedor1.jpg";
import comedor2 from "../../assets/images/comedor2.jpg";
import campeonato1 from "../../assets/images/campeonato1.jpg";
import campeonato2 from "../../assets/images/campeonato2.jpg";

import {useLang} from "./../../hooks/useLang";

export default function Volunteers () {

  const {t} = useLang();
  return (
    <section className="py-16 px-6 md:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-1 gap-12 items-center">

    
          {/* Contenido */}
          <div>
            <span className="text-cyan-700 font-semibold uppercase tracking-wider">
              {t("voluntarios.strong")}
            </span>

            <h2 className="text-4xl font-bold text-cyan-900 mt-2 mb-6">
              {t("voluntarios.titulo")}
            </h2>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("voluntarios.texto1")}

            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("voluntarios.texto2")}

            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
              {t("voluntarios.texto3")}

            </p>


                          {/* Imagen */}
          <div className="m-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <img
              src={martina}
              alt="voluntarios"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

                   <img
              src={comedor1}
              alt="voluntarios"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

                           <img
              src={comedor2}
              alt="voluntarios"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />


          </div>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
              {t("voluntarios.texto4")}

            </p>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
              {t("voluntarios.texto5")}

            </p>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
              {t("voluntarios.texto6")}

            </p>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
              {t("voluntarios.texto7")}

            </p>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
              {t("voluntarios.texto8")}

            </p>



              <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
              {t("voluntarios.texto9")}

                          {/* Imagen */}
          <div className="m-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src={campeonato1}
              alt="voluntarios"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

                   <img
              src={campeonato2}
              alt="voluntarios"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

          </div>

            </p>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
              {t("voluntarios.texto10")}

            </p>

                        {/* Imagen */}
          <div className="m-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src={venta1}
              alt="voluntarios"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

                   <img
              src={venta2}
              alt="voluntarios"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

          </div>
          </div>

        </div>
      </div>
    </section>
  );
};

