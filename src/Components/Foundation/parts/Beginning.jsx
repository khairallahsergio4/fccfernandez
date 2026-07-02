import React from 'react'
import pintada from "../../../assets/images/pintada.jpg";
import { useLang } from "../../../hooks/useLang";

const Beginning = () => {

    const {t}=useLang();
  return (
    <>
              <section className="py-16 px-6 md:px-24 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                  <div className="grid lg:grid-cols-1 gap-12 items-center">
        
        
        
                    {/* Contenido */}
                    <div>
                      <span className="text-cyan-700 font-semibold uppercase tracking-wider">
                        {t("comienzos.strong")}
                      </span>
        
                      <h2 className="text-4xl font-bold text-cyan-900 mt-2 mb-6">
                        {t("comienzos.titulo")}
                      </h2>
        
        
        
                      <p className="text-mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto1")}
        
                      </p>
        
                      <p className="text-mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto2")}
        
                      </p>
        
                      {/* Imagen */}
                      <div className="py-10">
                        <img
                          src={pintada}
                          alt="¿Quiénes somos?"
                          className="w-full h-full object-cover rounded-2xl shadow-xl"
                        />
                      </div>
        
                      <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto3")}
        
                      </p>
        
                      <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto4")}
        
                      </p>
        
                      <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto5")}
        
                      </p>
        
                      <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto6")}
        
                      </p>
        
                      <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto7")}
        
                      </p>
        
                      <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto8")}
        
                      </p>
        
                      <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto9")}
        
                      </p>
        
                      <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto10")}
        
                      </p>
        
                      <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto11")}
        
                      </p>
        
                      <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto12")}
        
                      </p>
        
                      <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                        {t("comienzos.texto13")}
                      </p>
                    </div>
        
                  </div>
                </div>
              </section>
    
    </>
  )
}

export default Beginning