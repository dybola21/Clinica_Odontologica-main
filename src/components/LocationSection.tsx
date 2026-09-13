import {
  ADDRESS_STREET,
  ADDRESS_CITY,
  MAPS_EMBED_URL,
  MAPS_ROUTE_URL,
  WHATSAPP_URL,
} from "../data";
import Reveal from "./Reveal";
import {
  PinIcon,
  ClockIcon,
  CardIcon,
  NfcIcon,
  ArrowUpRight,
  WhatsAppIcon,
} from "./icons";

export default function LocationSection() {
  return (
    <section
      id="onde-estamos"
      aria-labelledby="onde-estamos-titulo"
      className="bg-ivory text-graphite"
    >
      <div className="mx-auto max-w-[1360px] px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="grid items-stretch gap-14 lg:grid-cols-2 lg:gap-20">
          {/* texto à esquerda */}
          <Reveal>
            <p className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-copper">
              <span className="h-px w-10 bg-copper" aria-hidden="true" />
              Venha nos visitar
            </p>
            <h2
              id="onde-estamos-titulo"
              className="mt-5 font-display text-[clamp(2.1rem,4.2vw,3.3rem)] font-medium leading-[1.06] text-petrol"
            >
              Onde estamos
            </h2>

            <ul className="mt-10 space-y-8">
              <li className="flex gap-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-petrol/8 text-copper">
                  <PinIcon className="size-5" />
                </span>
                <div>
                  <h3 className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-graphite/45">
                    Endereço
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-graphite">
                    {ADDRESS_STREET}
                    <br />
                    {ADDRESS_CITY}
                  </p>
                </div>
              </li>

              <li className="flex gap-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-petrol/8 text-copper">
                  <ClockIcon className="size-5" />
                </span>
                <div>
                  <h3 className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-graphite/45">
                    Horário de atendimento
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-graphite">
                    Segunda a sexta · 09h às 17h
                    <br />
                    Sábado e domingo · fechado
                  </p>
                  <p className="mt-3 inline-block rounded-full border border-copper/35 bg-copper/10 px-4 py-1.5 text-[11px] font-semibold text-copper">
                    Atendimento com agendamento prévio
                  </p>
                </div>
              </li>

              <li className="flex gap-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-petrol/8 text-copper">
                  <CardIcon className="size-5" />
                </span>
                <div>
                  <h3 className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-graphite/45">
                    Pagamento
                  </h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[15px] leading-relaxed text-graphite">
                    Cartão de crédito e débito
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-mist/70 px-3 py-1 text-[12px] font-semibold text-petrol">
                      <NfcIcon className="size-4" />
                      aproximação (NFC)
                    </span>
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href={MAPS_ROUTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-petrol px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:bg-copper hover:shadow-[0_10px_28px_rgba(185,120,75,0.35)]"
              >
                Traçar rota
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-petrol/25 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-petrol transition-all duration-300 hover:border-copper hover:text-copper"
              >
                <WhatsAppIcon className="size-4" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </Reveal>

          {/* mapa à direita */}
          <Reveal delay={150} className="h-full">
            <div className="relative h-[420px] overflow-hidden rounded-xl shadow-[0_24px_60px_rgba(10,40,41,0.18)] ring-1 ring-petrol/10 lg:h-full lg:min-h-[560px]">
              <iframe
                src={MAPS_EMBED_URL}
                title="Mapa — Clínica Dra. Daiana de Aguiar, R. Nunes Alves 1898, Centro, Duque de Caxias"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
              <p className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2.5 rounded-full bg-abyss/90 px-4 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-ivory">
                <PinIcon className="size-4 text-copper-soft" />
                Centro · Duque de Caxias
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
