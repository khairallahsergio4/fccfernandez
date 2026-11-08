import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '../../hooks/useLang';
import escuela from '../../assets/images/escuela2.jpg';
import equipo from '../../assets/images/equipo.jpg';
import grupo from '../../assets/images/grupo.jpg';
import tractor from '../../assets/images/tractor.jpg';
import mural from '../../assets/images/mural.jpg';
const slides = [escuela, equipo, grupo, tractor, mural];
export default function SliderWelcome() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  return (
    <section className="home-hero">
      <div className="hero-copy">
        <span className="eyebrow">{t('web.nombreFundacion')}</span>
        <h1>{t('welcome.lema')}</h1>
        <p>{t('ofertaEducativa.subtitulo')}</p>
        <div className="hero-actions">
          <Link className="button-primary" to="/offer">{t('menu.escuela.item3')}<ArrowRight size={18} aria-hidden="true" /></Link>
          <Link className="button-secondary" to="/who">{t('menu.lafundacion.item2')}<ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="hero-location"><span aria-hidden="true" />{t('contacto.ciudad')} · Argentina</div>
      </div>
      <div className="hero-gallery" aria-roledescription="carousel">
        <img src={slides[current]} alt={t('web.nombreFundacion')} className="hero-photo" fetchPriority="high" />
        <div className="hero-photo-shade" />
        <div className="hero-caption"><span>{t('menu.escuela.item1')}</span><strong>{t('testimonio.titulo')}</strong></div>
        <div className="hero-gallery-controls">
          <span className="gallery-count" aria-live="polite">0{current + 1}<span> / 0{slides.length}</span></span>
          <div className="flex gap-2">
            <button aria-label="←" onClick={() => setCurrent((current + slides.length - 1) % slides.length)}><ChevronLeft aria-hidden="true" /></button>
            <button aria-label="→" onClick={() => setCurrent((current + 1) % slides.length)}><ChevronRight aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
