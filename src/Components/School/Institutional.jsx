import React from 'react'
import carpinteria from "../../assets/images/carpinteria.jpg";
import alumno2 from "../../assets/images/alumno2.jpg";
import alumno3 from "../../assets/images/alumno3.jpg";
import alumno4 from "../../assets/images/alumno4.jpg";
import victor from "../../assets/images/victor.jpg";
import profesor from "../../assets/images/profesor.jpg";
import futbol from "../../assets/images/futbol.jpg";
import campeonato1 from "../../assets/images/campeonato1.jpg";
import campeonato2 from "../../assets/images/campeonato2.jpg";


import { useLang } from '../../hooks/useLang';


const Institutional = () => {

    const { t } = useLang();
    return (
        <>
            <section className="py-16 px-6 md:px-24 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-1 gap-12 items-center">



                        {/* Contenido */}
                        <div>
                            <span className="text-cyan-700 font-semibold uppercase tracking-wider">
                                {t("escuela.institucional.strong")}
                            </span>

                            <h2 className="text-3xl font-bold text-cyan-900 mt-2 mb-6">
                                {t("escuela.institucional.nombreEscuela")}
                            </h2>



                            <p className="text-mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                                {t("escuela.institucional.texto1")}

                            </p>

                            
                            <p className="text-mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                                {t("escuela.institucional.texto2")}

                            </p>

                         

                            {/* Imagen */}
                            <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items">
                                <img
                                    src={victor}
                                    alt="¿Quiénes somos?"
                                    className="w-96 h-96 object-cover rounded-2xl shadow-xl"
                                />

                                <img
                                    src={profesor}
                                    alt="¿Quiénes somos?"
                                    className="w-96 h-96 object-cover rounded-2xl shadow-xl"
                                />

                                <img
                                    src={carpinteria}
                                    alt="¿Quiénes somos?"
                                    className="w-96 h-96 object-cover rounded-2xl shadow-xl"
                                />
                            </div>

                            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                                {t("escuela.institucional.texto3")}

                            </p>

                            
                            {/* Imagen */}
                            <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items">
                                <img
                                    src={futbol}
                                    alt="¿Quiénes somos?"
                                    className="w-96 h-96 object-cover rounded-2xl shadow-xl"
                                />

                                <img
                                    src={campeonato1}
                                    alt="¿Quiénes somos?"
                                    className="w-96 h-96 object-cover rounded-2xl shadow-xl"
                                />

                                <img
                                    src={campeonato2}
                                    alt="¿Quiénes somos?"
                                    className="w-96 h-96 object-cover rounded-2xl shadow-xl"
                                />
                            </div>


                            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-justify">
                                {t("escuela.institucional.texto4")}
                            </p>


                            {/* Imagen */}
                            <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items">
                                <img
                                    src={alumno2}
                                    alt="¿Quiénes somos?"
                                    className="w-96 h-96 object-cover rounded-2xl shadow-xl"
                                />

                                <img
                                    src={alumno3}
                                    alt="¿Quiénes somos?"
                                    className="w-96 h-96 object-cover rounded-2xl shadow-xl"
                                />

                                <img
                                    src={alumno4}
                                    alt="¿Quiénes somos?"
                                    className="w-96 h-96 object-cover rounded-2xl shadow-xl"
                                />
                            </div>


                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Institutional