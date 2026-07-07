import {useLang} from "./../../hooks/useLang";
import miel from "../../assets/images/daniel.jpg";
import { ButtonCart } from "../Home/parts/ButtonCart";
import { useState } from "react";
import { ModalHoney } from "../Home/parts/ModalHoney";
import { Link } from "react-router-dom";
import { FileCheck } from 'lucide-react';

export default function Honey () {

  const {t} = useLang();
    const [showModal, setShowModal] = useState(false);
  
  return (
    <section className="py-16 px-6 md:px-46 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Contenido */}
          <div>
            <span className="text-cyan-700 font-semibold uppercase tracking-wider">
              {t("productos.miel.strong")}
            </span>

            <h2 className="text-4xl font-bold text-cyan-900 mt-2 mb-6">
              {t("productos.miel.titulo")}
            </h2>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("productos.miel.texto1")}

            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("productos.miel.texto2")}

            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
              {t("productos.miel.texto3")}

            </p>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
              {t("productos.miel.texto4")}

            </p>

                              <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <ButtonCart setShowModal={setShowModal}/>

            <a href="/docs/HonigFlyer.pdf" download>
            <button className="border border-amber-400 text-amber-700 hover:bg-amber-100 px-4 py-4 rounded-xl font-semibold transition text-center flex ">
                
                        <FileCheck />


                    {t("productos.miel.descarga")}
            </button>
            </a>
           
          </div> 
          </div>

                    {/* Imagen */}
                    <div className="relative">
                      {/* Hexágonos decorativos */}
                      <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-200 rotate-45 rounded-2xl opacity-50" />
                      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-300 rotate-45 rounded-2xl opacity-40" />
            
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src={miel}
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
      </div>

       
     

          {showModal && (
        <ModalHoney setShowModal={setShowModal}/>
      )}
    </section>
    
  );
};

