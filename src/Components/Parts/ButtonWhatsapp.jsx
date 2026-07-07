import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { useLang } from '../../hooks/useLang';
export const ButtonWhatsapp = ({texto,numero}) => {
    const {t}=useLang();
  return (
            
            <div className="mt-12 mb-12 flex justify-center">
              <a
                href={`https://wa.me/${numero}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                <FaWhatsapp size={22} />
               {t("productos.energias.solar.consultar")}
              </a>
            </div>
    
  )
}
