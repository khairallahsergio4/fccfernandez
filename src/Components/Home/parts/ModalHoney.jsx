import React from 'react'
import { useLang } from '../../../hooks/useLang'
import ContactModal from './ContactModal';
import { useState } from 'react';

export const ModalHoney = ({setShowModal}) => {
const {t}=useLang()

  const [open, setOpen] = useState(false);

 const telefono = "5493854111443";
  const mensaje = t("productos.miel.WhatsApp");


  return (
    
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative animate-fadeIn">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ×
            </button>

            <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
              {t('infomiel.comprar.titulo')}
            </h3>

            <p className="text-gray-500 text-center mb-6">
              {t('infomiel.comprar.subtitulo')}
            </p>


            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 text-white text-center py-4 rounded-xl font-semibold transition"
              >
                🇦🇷 {t('infomiel.comprar.argentina')}
              </a>

              {/* <a
                href="https://tu-link-alemania.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white text-center py-4 rounded-xl font-semibold transition"
              >
                
              </a> */}

              <button         onClick={() => setOpen(true)}
className="bg-amber-500 hover:bg-amber-600 text-white text-center py-4 rounded-xl font-semibold transition">
                🇩🇪 {t('infomiel.comprar.alemania')}
              </button>

            </div>
          </div>

          <ContactModal  isOpen={open}
        onClose={() => setOpen(false)}/>
        </div>
  )
}
