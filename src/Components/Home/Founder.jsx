import React from "react";
import { useLang } from "../../hooks/useLang";
import donJose from "../../assets/images/donJose.jpg";
import { FaRegFilePdf,FaCartArrowDown    } from "react-icons/fa";


const Founder = () => {
  const { t } = useLang();

  return (
    <section className="py-16 px-6 lg:px-10 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <h2 className="text-4xl text-center mb-14 text-cyan-900 font-bold tracking-tight leading-tight">
          {t("fundador.titulo")}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Imagen */}
          <div className="flex justify-center">

            <div className="rounded-full p-[5px] bg-gradient-to-br from-cyan-800 via-cyan-600 to-blue-500 shadow-2xl">

              <div className="bg-white rounded-full p-3">

                <img
                  src={donJose}
                  alt="Fundador"
                  className="
                    w-56
                    sm:w-64
                    md:w-72
                    lg:w-80
                    xl:w-[24rem]
                    aspect-square
                    object-cover
                    object-top
                    rounded-full
                    border-4
                    border-gray-100
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />

              </div>

            </div>

          </div>

          {/* Texto */}
          <div className="max-w-xl mx-auto lg:mx-0">

            <h3 className="text-2xl font-semibold mb-5 text-center lg:text-left">
              {t("fundador.nombreFundador")}
            </h3>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              {t("fundador.texto1")}
            </p>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed text-justify">
              {t("fundador.texto2")}
            </p>

            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <a
                href="/docs/presentaciones.pdf"
                download
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-cyan-900
                  hover:bg-blue-700
                  text-white
                  font-medium
                  px-7
                  py-3
                  rounded-lg
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FaRegFilePdf />
                {t("fundador.boton")}
              </a>


                          <a
                href="https://lit-verlag.de/isbn/978-3-643-13766-1/"
                target="blank"
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-red-900
                  hover:bg-red-700
                  text-white
                  font-medium
                  px-7
                  py-3
                  rounded-lg
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FaCartArrowDown   />
                {t("fundador.botonComprar")}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
