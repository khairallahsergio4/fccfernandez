import { ShoppingCart } from "lucide-react";
import daniel from "../../assets/images/daniel.jpg";
import { useLang } from "../../hooks/useLang";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalHoney } from "./parts/ModalHoney";
import { ButtonCart } from "./parts/ButtonCart";

export default function InfoHoney() {
  const { t, i18n, lang } = useLang()
  const [showModal, setShowModal] = useState(false);
  return (

    <section className="bg-amber-50 py-16 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Contenido */}
        <div className="relative">
          {/* Decoración */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-amber-200/40 rounded-3xl rotate-12 hidden md:block" />
          <div className="absolute bottom-0 left-10 w-16 h-16 bg-yellow-300/30 rounded-full hidden md:block" />

          <span className="text-amber-600 font-semibold uppercase tracking-wider">
            🍯 {t("infomiel.tab1")}
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {t("infomiel.titulo1")}
            <span className="text-amber-500 block">
              {t("infomiel.titulo2")}
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {t("infomiel.texto")}
          </p>
 
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <ButtonCart setShowModal={setShowModal}/>
         
             <Link to={"/honey"} className="border border-amber-400 text-amber-700 hover:bg-amber-100 px-8 py-4 rounded-xl font-semibold transition">  
              {t("infomiel.masInfo")}
              
               </Link>
            
           
          </div> 

          {/* Características */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl">🌼</p>
              <p className="text-sm font-medium mt-2">{t("infomiel.tab2")}</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl">🐝</p>
              <p className="text-sm font-medium mt-2">{t("infomiel.tab3")}</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl">❤️</p>
              <p className="text-sm font-medium mt-2">{t("infomiel.tab4")}</p>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative">
          {/* Hexágonos decorativos */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-200 rotate-45 rounded-2xl opacity-50" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-300 rotate-45 rounded-2xl opacity-40" />

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={daniel}
              alt="Miel artesanal"
              className="w-full h-[300px] md:h-[500px] object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-2xl font-bold">
                {t("infomiel.imagenTitulo")}
              </h3>
              <p className="text-amber-100">
                {t("infomiel.imagenSubtitulo")}

              </p>
            </div>
          </div>
        </div>

      </div>

      {showModal && (
        <ModalHoney setShowModal={setShowModal}/>
      )}
    </section>
  );
}