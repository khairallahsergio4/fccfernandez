import noticias from "../../data/noticias.json"
import { Calendar, ArrowRight } from "lucide-react";
import { useLang } from "../../hooks/useLang";


export default function FacebookPost() {
  const {t}= useLang();
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
            {t("noticias.titulo")}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4">
            {t("noticias.subtitulo")}
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            {t("noticias.texto")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <article
              key={noticia.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar size={16} />
                  {noticia.fecha}
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {noticia.titulo}
                </h3>

                <p className="text-slate-600 mb-6 line-clamp-3">
                  {noticia.descripcion}
                </p>

                <a
                  href={noticia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  {t("noticias.verMas")}
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}