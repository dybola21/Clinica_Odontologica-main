import { useEffect, useState } from "react";
import { NAV_ITEMS, WHATSAPP_URL, PHONE_DISPLAY, ADDRESS_STREET } from "../data";
import { ToothMark, WhatsAppIcon, ArrowRight } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-abyss border-b border-ivory/10"
            : "bg-gradient-to-b from-abyss/85 via-abyss/40 to-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-[1360px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <a
            href="#inicio"
            className="group flex items-center gap-3"
            aria-label="Clínica Dra. Daiana de Aguiar — voltar ao topo"
          >
            <span className="grid size-10 place-items-center rounded-full border border-copper/60 text-copper transition-colors duration-300 group-hover:bg-copper group-hover:text-abyss">
              <ToothMark className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[17px] font-semibold text-ivory">
                Dra. Daiana de Aguiar
              </span>
              <span className="mt-0.5 hidden text-[9px] font-medium uppercase tracking-[0.28em] text-mist/60 sm:block">
                Bucomaxilofacial · DTM
              </span>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-[11px] font-medium uppercase tracking-[0.22em] text-ivory/80 transition-colors duration-300 hover:text-copper-soft"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2.5 rounded-full bg-copper px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-abyss transition-all duration-300 hover:bg-copper-soft hover:shadow-[0_8px_24px_rgba(185,120,75,0.35)] sm:inline-flex"
            >
              Agendar
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="relative grid size-11 place-items-center rounded-full border border-ivory/20 text-ivory transition-colors duration-300 hover:border-copper hover:text-copper-soft lg:hidden"
            >
              <span
                className={`absolute h-px w-5 bg-current transition-all duration-300 ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-current transition-all duration-300 ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* menu mobile */}
      <div
        id="menu-mobile"
        className={`fixed inset-0 z-40 flex flex-col bg-abyss pt-[74px] transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Navegação mobile" className="flex flex-1 flex-col justify-center gap-2 px-8">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="group flex items-baseline gap-4 border-b border-ivory/8 py-5"
              style={{
                transitionDelay: `${i * 40}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(12px)",
                transition: "opacity .45s ease, transform .45s ease",
              }}
            >
              <span className="h-px w-6 bg-copper transition-all duration-300 group-hover:w-10" />
              <span className="font-display text-3xl font-medium text-ivory transition-colors group-hover:text-copper-soft">
                {item.label}
              </span>
            </a>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-copper px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-abyss transition-colors hover:bg-copper-soft"
          >
            <WhatsAppIcon className="size-4.5" />
            Agendar pelo WhatsApp
          </a>
        </nav>

        <div className="px-8 pb-10 text-[12px] leading-relaxed text-mist/50">
          <p className="text-mist/80">{PHONE_DISPLAY}</p>
          <p>{ADDRESS_STREET} · Centro, Duque de Caxias — RJ</p>
        </div>
      </div>
    </>
  );
}
