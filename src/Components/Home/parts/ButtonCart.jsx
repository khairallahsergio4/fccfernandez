import React from 'react'
import { ShoppingCart } from "lucide-react";
import { useLang } from '../../../hooks/useLang';

export const ButtonCart = ({setShowModal}) => {
    const {t}=useLang();
  return (
            <button className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
              onClick={() => setShowModal(true)}
            >
              <ShoppingCart size={20} />
              {t("infomiel.boton")}
            </button>
  )
}
