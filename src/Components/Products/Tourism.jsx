import turismo from "../../assets/images/turismo.jpg";
import {useLang} from "./../../hooks/useLang";

export default function Tourism () {

  const {t} = useLang();
  return (
    <section className="py-16 px-6 md:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Imagen */}
          <div>
            <img
              src={turismo}
              alt="turismo"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Contenido */}
          <div>
            <span className="text-cyan-700 font-semibold uppercase tracking-wider">
              {t("productos.turismo.strong")}
            </span>

            <h2 className="text-4xl font-bold text-cyan-900 mt-2 mb-6">
              {t("productos.turismo.titulo")}
            </h2>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("productos.turismo.texto1")}

            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("productos.turismo.texto2")}

            </p>

    
           
          </div>

        </div>
      </div>
    </section>
  );
};

