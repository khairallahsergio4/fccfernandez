import { useLang } from "../../../hooks/useLang";
import { FileCheck } from 'lucide-react';
import libro from "../../../assets/images/libro.JPG";
import React from 'react'

export const Emergence = () => {

    const {t}= useLang();
  return (
    <>
    
        <section className="py-8 px-6 md:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">



            {/* Contenido */}
            <div>
              <span className="text-cyan-700 font-semibold uppercase tracking-wider">
                {t("historia.strong")}
              </span>

              <h2 className="text-4xl font-bold text-cyan-900 mt-2 mb-6">
                {t("historia.titulo")}
              </h2>



              <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("historia.texto1")}

              </p>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("historia.texto2")}

              </p>



              <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                {t("historia.texto3")}

              </p>



            </div>

            {/* Imagen */}
            <div className="py-10">
              <img
                src={libro}
                alt="libro"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="/docs/presentaciones.pdf"
                  download
                >

                  <button className=" bg-cyan-900 hover:bg-blue-700 text-white font-medium px-4 py-4 rounded-lg transition mt-6 text-center flex flex-col-2 gap-2">

                        <FileCheck />


                    {t("historia.boton1")}

                  </button>
                </a>


                <a
                  href="/docs/josef_majer_biografie.pdf"
                  download
                >

                  <button className="bg-green-900 hover:bg-green-700 text-white font-medium px-4 py-4 rounded-lg transition mt-6 text-center flex flex-col-2 gap-2">

                        <FileCheck />


                    {t("historia.boton2")}

                  </button>
                </a>


              </div>


            </div>




          </div>
        </div>
      </section>
    
    </>
  )
}

