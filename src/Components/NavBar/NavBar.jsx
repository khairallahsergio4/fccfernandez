'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'

import {
  Bars3Icon,
  XMarkIcon,
    BuildingLibraryIcon,
  UserGroupIcon,
  HeartIcon,
  GlobeAltIcon,
  SparklesIcon,

  AcademicCapIcon,
  BookOpenIcon,
  ComputerDesktopIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,

  CubeIcon,
  ShoppingBagIcon,
  TruckIcon,
  UserPlusIcon,
  FilmIcon,
  BuildingOffice2Icon,
  SunIcon
} from '@heroicons/react/24/outline'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { School } from 'lucide-react'

import logo from '../../assets/images/logo.png'
import { useLang } from '../../hooks/useLang'
import { FaHeart,FaFacebook,FaInstagram,FaTiktok,FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t,i18n, cambiar } = useLang()

const fundacion = [
  { name: t('menu.lafundacion.item2'), href: '/who', icon: BuildingLibraryIcon },
  { name: t('menu.lafundacion.item3'), href: '/administration', icon: UserGroupIcon },
  { name: t('menu.lafundacion.item4'), href: '/history', icon: FilmIcon },
  { name: t('menu.lafundacion.item5'), href: '/volunteers', icon: GlobeAltIcon },
  { name: t('menu.lafundacion.item6'), href: '/garden', icon: School },
]

const escuela = [
  { name: t('menu.escuela.item2'), href: '/institutional', icon: AcademicCapIcon },
  { name: t('menu.escuela.item3'), href: '/offer', icon: BookOpenIcon },
  { name: t('menu.escuela.item4'), href: '/teachers', icon: BuildingOffice2Icon },
  { name: t('menu.escuela.item5'), href: '/registration', icon: UserPlusIcon },
  
]

const productos = [
  { name: t('menu.productos.item2'), href: '/honey', icon: CubeIcon },
  { name: t('menu.productos.item3'), href: '/energies', icon: SunIcon },
  { name: t('menu.productos.item4'), href: '#', icon: TruckIcon },
]
  return (
    <header className="bg-green-600 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6"
      >
        {/* Logo + nombre */}
        <div className="flex items-center gap-3">

          <Link to="/home" className="shrink-0">
           <img
              alt="Logo"
              src={logo}
              className="h-16 w-auto"
            />
          </Link>
        
          <span className="text-[11px] leading-tight text-amber-50 font-medium max-w-[150px]">
            {t('web.nombreFundacion')}
          </span>
        </div>

        {/* Botón móvil */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
          >
            <span className="sr-only">Menu</span>
            <Bars3Icon aria-hidden="true" className="size-7" />
          </button>
        </div>

        {/* Menú desktop */}
        <PopoverGroup className="hidden lg:flex lg:ml-10 lg:gap-x-8 items-center">
          {/* Fundación */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md font-semibold text-white hover:text-amber-100 transition">
              {t('menu.lafundacion.item1')}
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 text-green-100"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-4 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 shadow-2xl ring-1 ring-white/10 transition data-closed:translate-y-1 data-closed:opacity-0"
            >
              <div className="p-4">
                {fundacion.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-5 rounded-xl p-4 hover:bg-white/5 transition"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-300 group-hover:text-white"
                      />
                    </div>

                    <div className="flex-auto">
                      <Link to={item.href} className="block font-semibold text-white">{item.name}</Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* Escuela */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md font-semibold text-white hover:text-amber-100 transition">
              {t('menu.escuela.item1')}
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 text-green-100"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-4 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 shadow-2xl ring-1 ring-white/10 transition data-closed:translate-y-1 data-closed:opacity-0"
            >
              <div className="p-4">
                {escuela.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-5 rounded-xl p-4 hover:bg-white/5 transition"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-300 group-hover:text-white"
                      />
                    </div>

                    <div className="flex-auto">
                    <Link to={item.href} className="block font-semibold text-white">{item.name}</Link>

                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

              {/* Productos y Servicios */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md font-semibold text-white hover:text-amber-100 transition">
              {t('menu.productos.item1')}
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 text-green-100"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-4 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 shadow-2xl ring-1 ring-white/10 transition data-closed:translate-y-1 data-closed:opacity-0"
            >
              <div className="p-4">
                {productos.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-5 rounded-xl p-4 hover:bg-white/5 transition"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-300 group-hover:text-white"
                      />
                    </div>

                    <div className="flex-auto">
                      <Link to={item.href} className="block font-semibold text-white">{item.name}</Link>

                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* Links */}

          <Link to="/who" className="text-md font-semibold text-white hover:text-amber-100 transition">{t("menu.contacto")}</Link>
          <Link to="/who" className="text-md font-semibold text-white hover:text-amber-100 transition">{t("menu.donar")}</Link>
         
        </PopoverGroup>

        {/* Idioma */}
                <div className="hidden lg:flex items-center rounded-full bg-white/10 p-1 backdrop-blur-sm">
  <button
    onClick={() => cambiar('es')}
    className={`rounded-full px-2 py-1 text-sm font-medium transition ${
      i18n.language === 'es'
        ? 'bg-white text-green-700 shadow-sm'
        : 'text-white hover:bg-white/10'
    }`}
  >
    ES
  </button>

  <button
    onClick={() => cambiar('en')}
    className={`rounded-full px-2 py-1 text-sm font-medium transition ${
      i18n.language === 'en'
        ? 'bg-white text-green-700 shadow-sm'
        : 'text-white hover:bg-white/10'
    }`}
  >
    EN
  </button>

  <button
    onClick={() => cambiar('de')}
    className={`rounded-full px-2 py-1 text-sm font-medium transition ${
      i18n.language === 'de'
        ? 'bg-white text-green-700 shadow-sm'
        : 'text-white hover:bg-white/10'
    }`}
  >
    DE
  </button>
</div>
      </nav>

      {/* Menú móvil */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/40" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm">
          <div className="flex items-center justify-between">

            <Link to="/home"> <img
                alt="Logo"
                src={logo}
                className="h-16 w-auto"
              /></Link>
      

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-white hover:bg-white/10"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-8">
            <div className="space-y-4">
              {/* Fundación */}
              <Disclosure as="div">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                  {t('menu.lafundacion.item1')}

                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 group-data-open:rotate-180 transition"
                  />
                </DisclosureButton>

                <DisclosurePanel className="mt-2 space-y-2">
                  {fundacion.map((item) => (

                    <Link to={item.href} className="block rounded-lg py-2 pl-6 text-sm font-medium text-gray-200 hover:bg-white/5" >{item.name}</Link>
                    
                  ))}
                </DisclosurePanel>
              </Disclosure>

              {/* Escuela */}
              <Disclosure as="div">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                  {t('menu.escuela.item1')}

                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 group-data-open:rotate-180 transition"
                  />
                </DisclosureButton>

                <DisclosurePanel className="mt-2 space-y-2">
                  {escuela.map((item) => (

                    <Link to={item.href} className="block rounded-lg py-2 pl-6 text-sm font-medium text-gray-200 hover:bg-white/5" >{item.name}</Link>
                   
                  ))}
                </DisclosurePanel>
              </Disclosure>

              {/* Productos y Servicios */}
              <Disclosure as="div">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                  {t('menu.productos.item1')}

                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 group-data-open:rotate-180 transition"
                  />
                </DisclosureButton>

                <DisclosurePanel className="mt-2 space-y-2">
                  {productos.map((item) => (
                   <Link to={item.href} className="block rounded-lg py-2 pl-6 text-sm font-medium text-gray-200 hover:bg-white/5" >{item.name}</Link>
                  ))}
                </DisclosurePanel>
              </Disclosure>


              <Link to="" className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5" >{t("menu.contacto")}</Link>


           
              <Link to="" className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5" >{t("menu.contacto")}</Link>

             
              <Link to="" className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5" >{t("menu.donar")}</Link>

           

              <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-white/5 p-2">
  <button
    onClick={() => cambiar('es')}
    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
      i18n.language === 'es'
        ? 'bg-white text-green-700'
        : 'text-white hover:bg-white/10'
    }`}
  >
    ES
  </button>

  <button
    onClick={() => cambiar('en')}
    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
      i18n.language === 'en'
        ? 'bg-white text-green-700'
        : 'text-white hover:bg-white/10'
    }`}
  >
    EN
  </button>

  <button
    onClick={() => cambiar('de')}
    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
      i18n.language === 'de'
        ? 'bg-white text-green-700'
        : 'text-white hover:bg-white/10'
    }`}
  >
    DE
  </button>
</div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}