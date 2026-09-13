import {
  ADDRESS_CITY,
  ADDRESS_STREET,
  NAV_ITEMS,
  PHONE_DISPLAY,
  SPECIALTIES,
  WHATSAPP_URL,
  waLink,
} from "../data";
import { StarIcon, ToothMark, WhatsAppIcon, ArrowRight } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-abyss text-mist">
      {/* chamada final */}
      <div className="mx-auto grid max-w-[1360px] items-center gap-10 border-b border-ivory/10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <p className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-copper-soft">
            <span className="h-px w-10 bg-copper" aria-hidden="true" />
            Agendamento
          </p>
          <p className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.6vw,2.9rem)] font-medium leading-tight text-ivory">
            Uma recuperação tranquila começa com uma mensagem.
          </p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-fit items-center gap-4 rounded-full bg-copper py-4 pl-6 pr-8 text-abyss transition-all duration-300 hover:bg-copper-soft hover:shadow-[0_12px_34px_rgba(185,120,75,0.4)]"
        >
          <WhatsAppIcon className="size-6 transition-transform duration-300 group-hover:scale-110" />
          <span>
            <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em]">
              Agendar pelo WhatsApp
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="mt-0.5 block text-[13px] font-semibold">{PHONE_DISPLAY}</span>
          </span>
        </a>
      </div>

      {/* colunas */}
      <div className="mx-auto grid max-w-[1360px] gap-12 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:px-10">
        <div>
          <a href="#inicio" className="flex w-fit items-center gap-3" aria-label="Voltar ao topo">
            <span className="grid size-10 place-items-center rounded-full border border-copper/60 text-copper">
              <ToothMark className="size-5" />
            </span>
            <span className="font-display text-[17px] font-semibold text-ivory">
              Dra. Daiana de Aguiar
            </span>
          </a>
          <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-mist/60">
            Cirurgia e Traumatologia Bucomaxilofacial, tratamento de DTM e dor
            orofacial no centro de Duque de Caxias — RJ.
          </p>
          <p className="mt-6 flex items-center gap-3 text-[12.5px] text-mist/70">
            <span className="flex gap-0.5 text-copper" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="size-3.5" />
              ))}
            </span>
            <strong className="font-display text-base text-ivory">5,0</strong> · 153 avaliações
            no Google
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h3 className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-mist/40">
            Navegação
          </h3>
          <ul className="mt-5 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link text-[13.5px] text-mist/80 transition-colors duration-300 hover:text-copper-soft"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Especialidades no rodapé">
          <h3 className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-mist/40">
            Especialidades
          </h3>
          <ul className="mt-5 space-y-3">
            {SPECIALTIES.map((s) => (
              <li key={s.id}>
                <a
                  href="#especialidades"
                  className="nav-link text-[13.5px] text-mist/80 transition-colors duration-300 hover:text-copper-soft"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-mist/40">
            Contato &amp; horário
          </h3>
          <ul className="mt-5 space-y-3 text-[13.5px] leading-relaxed text-mist/80">
            <li>
              <a
                href={waLink("Olá! Vim pelo site e gostaria de mais informações.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ivory transition-colors duration-300 hover:text-copper-soft"
              >
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="text-mist/60">
              {ADDRESS_STREET}
              <br />
              {ADDRESS_CITY}
            </li>
            <li className="pt-2 text-mist/60">
              Segunda a sexta · 09h às 17h
              <br />
              Sábado e domingo · fechado
            </li>
            <li>
              <span className="inline-block rounded-full border border-copper/40 px-3.5 py-1 text-[11px] font-semibold text-copper-soft">
                Agendamento prévio
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* barra final */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-2 px-5 py-6 text-[11.5px] text-mist/40 sm:flex-row sm:px-8 lg:px-10">
          <p>© 2026 Clínica Dra. Daiana de Aguiar — Todos os direitos reservados.</p>
          <p>Responsável técnica: Dra. Daiana de Aguiar · Duque de Caxias, RJ</p>
        </div>
      </div>
    </footer>
  );
}
