import { useEffect, useEffectEvent } from 'react';
import logo from '../assets/images/logo.png';
import { useLang } from '../hooks/useLang';
import { useNavigate } from 'react-router-dom';


export default function Welcome() {

  const { t, i18n, cambiar } = useLang();
    const navigate = useNavigate();


    useEffect(() => {
    const idiomaGuardado = localStorage.getItem("lang");

    if (idiomaGuardado) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">

      <div className="fixed inset-0 bg-gradient-to-br from-green-900 via-green-700 to-green-500"></div>

      <div className="fixed inset-0 backdrop-blur-sm bg-black/20"></div>

      <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-5 sm:p-6 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] max-w-sm mx-4">

        <img 
          src={logo} 
          alt="Fundación" 
          className="w-16 sm:w-20 md:w-24 mx-auto mb-3"
        />

        <h1 className="lg:text-xl sm:text-xl md:text-xl font-bold text-gray-950 mb-1">
         {t("welcome.title")}
        </h1>

        <p className="text-gray-600 mb-3 pb-1 text-xs sm:text-sm">
          {t("welcome.p")}
        </p>

        <div className="flex flex-col gap-2 sm:gap-3">

          <button
            onClick={() => cambiar("es")}
            className="bg-green-100 hover:bg-green-800 hover:text-white text-green-800 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold transition transform hover:scale-105 border border-green-300 w-full"
          >
            🇦🇷 Español
          </button>

          <button
            onClick={() => cambiar("de")}
            className="bg-green-100 hover:bg-green-800 hover:text-white text-green-800 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold transition transform hover:scale-105 border border-green-300 w-full"
          >
            🇩🇪 Deutsch
          </button>

          <button
            onClick={() => cambiar("en")}
            className="bg-green-100 hover:bg-green-800 hover:text-white text-green-800 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold transition transform hover:scale-105 border border-green-300 w-full"
          >
            🇺🇸 English
          </button>

        </div>

        <p className="mt-4 sm:mt-5 text-xs text-gray-500 italic">
          {t("welcome.lema")}
        </p>

      </div>

    </div>
  )
}