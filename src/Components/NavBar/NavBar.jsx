import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel, CloseButton } from '@headlessui/react';
import { Menu, X, ChevronDown, ArrowUpRight, Heart, Globe } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useLang } from '../../hooks/useLang';
export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n, cambiar } = useLang();
  const groups = [
    { title: 'menu.lafundacion.item1', links: [['menu.lafundacion.item2', '/who'], ['menu.lafundacion.item3', '/administration'], ['menu.lafundacion.item4', '/history'], ['menu.lafundacion.item5', '/volunteers'], ['menu.lafundacion.item6', '/garden'], ['menu.lafundacion.item7', '/tourism']] },
    { title: 'menu.escuela.item1', links: [['menu.escuela.item2', '/institutional'], ['menu.escuela.item3', '/offer'], ['menu.escuela.item4', '/teachers'], ['menu.escuela.item5', '/registration']] },
    { title: 'menu.productos.item1', links: [['menu.productos.item2', '/honey'], ['menu.productos.item3', '/energies']] },
  ];
  const languages = <div className="language-switch"><Globe size={16} aria-hidden="true" />{['es', 'en', 'de'].map(lang => <button key={lang} lang={lang} aria-label={{ es: 'Español', en: 'English', de: 'Deutsch' }[lang]} aria-pressed={i18n.language.startsWith(lang)} onClick={() => cambiar(lang)}>{lang.toUpperCase()}</button>)}</div>;
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Global">
        <Link to="/home" className="brand"><img src={logo} alt="FCCF" /><span>{t('web.nombreFundacion')}</span></Link>
        <PopoverGroup className="desktop-navigation">
          {groups.map(group => <Popover key={group.title} className="relative">
            <PopoverButton className="nav-trigger">{t(group.title)}<ChevronDown size={14} aria-hidden="true" /></PopoverButton>
            <PopoverPanel transition className="nav-dropdown transition data-closed:translate-y-1 data-closed:opacity-0">
              {group.links.map(([label, href]) => <CloseButton as={NavLink} to={href} key={href}>{t(label)}<ArrowUpRight size={15} aria-hidden="true" /></CloseButton>)}
            </PopoverPanel>
          </Popover>)}
          <NavLink to="/contact" className="nav-trigger">{t('menu.contacto')}</NavLink>
        </PopoverGroup>
        <div className="desktop-actions">{languages}<Link to="/donate" className="donate-link"><Heart size={15} aria-hidden="true" />{t('menu.donar')}</Link></div>
        <button className="mobile-toggle" aria-label="Menu" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(true)}><Menu /></button>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="mobile-dialog">
        <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm" />
        <DialogPanel className="mobile-panel">
          <div className="flex items-center justify-between gap-4"><DialogTitle className="font-semibold">{t('web.nombreFundacion')}</DialogTitle><button className="mobile-close" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}><X /></button></div>
          <div className="mobile-links">
            {groups.map(group => <Disclosure key={group.title}>
              <DisclosureButton className="nav-trigger w-full justify-between">{t(group.title)}<ChevronDown size={18} /></DisclosureButton>
              <DisclosurePanel className="mobile-submenu">{group.links.map(([label, href]) => <NavLink to={href} key={href} onClick={() => setMobileMenuOpen(false)}>{t(label)}</NavLink>)}</DisclosurePanel>
            </Disclosure>)}
            <NavLink to="/contact" className="nav-trigger" onClick={() => setMobileMenuOpen(false)}>{t('menu.contacto')}</NavLink>
            <Link to="/donate" className="donate-link" onClick={() => setMobileMenuOpen(false)}><Heart size={16} />{t('menu.donar')}</Link>
          </div>
          {languages}
        </DialogPanel>
      </Dialog>
    </header>
  );
}
