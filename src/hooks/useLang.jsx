import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


export const useLang = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

const cambiar = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    navigate("/home");
  }

  return { t, i18n , cambiar};
};