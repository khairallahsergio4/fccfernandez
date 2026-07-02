import cocina from "../../assets/images/solar/cocina.jpg";
import huevos from "../../assets/images/solar/huevos.jpg";
import panel2 from "../../assets/images/solar/panel2.jpg"
import panel3 from "../../assets/images/solar/panel3.jpg"
import mapa from "../../assets/images/solar/mapa.jpg"
import cupula from "../../assets/images/solar/cupula.jpg"
import quemador from "../../assets/images/solar/quemador.jpg"




import {useLang} from "./../../hooks/useLang";

export default function Energies () {

  const {t} = useLang();
  return (
    <section className="py-16 px-6 md:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-1 gap-12 items-center">

    
          {/* Contenido */}
          <div>
            <span className="text-cyan-700 font-semibold uppercase tracking-wider">
              {t("productos.energias.solar.strong")}
            </span>

            <h2 className="text-4xl font-bold text-cyan-900 mt-2 mb-6">
              {t("productos.energias.solar.titulo")}
            </h2>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("productos.energias.solar.texto1")}

            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("productos.energias.solar.texto2")}

            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
              {t("productos.energias.solar.texto3")}

            </p>


                          {/* Imagen */}
          <div className="m-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <img
              src={cocina}
              alt="voluntarios"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

                   <img
              src={huevos}
              alt="voluntarios"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

                           <img
              src={panel2}
              alt="voluntarios"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />


          </div>

              <p className="mt-8 mb-8 text-lg text-slate-600 leading-relaxed text-justify">
              {t("productos.energias.solar.texto4")}

            </p>

            

                          {/* Imagen */}
          <div className="m-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src={panel3}
              alt="voluntarios"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

                   <img
              src={mapa}
              alt="voluntarios"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

          </div>


        <div className="mt-12">

       
           <span className="text-cyan-700 font-semibold uppercase tracking-wider">
              {t("productos.energias.biogas.strong")}
            </span>

            <h2 className="text-4xl font-bold text-cyan-900 mt-2 mb-6">
              {t("productos.energias.biogas.titulo")}
            </h2>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("productos.energias.biogas.texto1")}

            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("productos.energias.biogas.texto2")}

            </p>

     

             </div>



           

                        {/* Imagen */}
          <div className="m-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src={quemador}
              alt="quemador"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

                   <img
              src={cupula}
              alt="cupula"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

          </div>
          </div>

        </div>
      </div>
    </section>
  );
};

