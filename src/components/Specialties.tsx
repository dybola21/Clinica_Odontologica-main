import type { ComponentType } from "react";
import { SPECIALTIES, WHATSAPP_URL, waLink } from "../data";
import Reveal from "./Reveal";
import { ScalpelIcon, JointIcon, ToothIcon, ArrowRight } from "./icons";

const ICONS: ComponentType<{ className?: string }>[] = [
  ScalpelIcon,
  JointIcon,
  ToothIcon,
];

export default function Specialties() {
  return (
    <section
      id="especialidades"
      aria-labelledby="especialidades-titulo"
      className="relative overflow-hidden bg-ivory text-graphite"
    >
      {/* luz ambiente sutil no topo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[460px]"
        style={{
          background:
            "radial-gradient(62% 100% at 88% 0%, rgba(220,231,227,0.85), transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-[1360px] px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        {/* cabeçalho da seção */}
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-copper">
              <span className="h-px w-10 bg-copper" aria-hidden="true" />
              Especialidades
            </p>
            <h2
              id="especialidades-titulo"
              className="mt-5 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-medium leading-[1.06] text-petrol"
            >
              Cuidado cirúrgico, do diagnóstico
              <br className="hidden md:block" /> ao pós-operatório.
            </h2>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5">
            <p className="max-w-md text-[15px] leading-relaxed text-graphite/70 lg:ml-auto">
              Três frentes de atendimento sob a mesma conduta: planejamento
              detalhado, técnica precisa e acompanhamento próximo em todas as
              etapas.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.18em] text-petrol transition-colors duration-300 hover:text-copper"
            >
              Agendar avaliação
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </Reveal>
        </div>

        {/* ziguezague */}
        <div className="mt-10 md:mt-14">
          {SPECIALTIES.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            const reversed = i % 2 === 1;
            return (
              <div
                key={item.id}
                className={`grid items-center gap-12 py-16 md:grid-cols-12 md:gap-16 md:py-24 ${
                  i > 0 ? "border-t border-petrol/10" : ""
                }`}
              >
                <figure
                  className={`group relative md:col-span-7 ${
                    reversed ? "md:order-2" : ""
                  }`}
                >
                  <Reveal>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 translate-x-3.5 translate-y-3.5 rounded-lg border border-copper/50 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
                    />
                    <div className="overflow-hidden rounded-lg ring-1 ring-petrol/10">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05] sm:aspect-[5/4] md:aspect-[7/6]"
                      />
                    </div>
                  </Reveal>
                </figure>

                <div className={`md:col-span-5 ${reversed ? "md:order-1" : ""}`}>
                  <Reveal delay={120}>
                    <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.26em] text-copper sm:text-[11px]">
                      <Icon className="size-5 shrink-0" />
                      {item.label}
                    </p>
                    <h3 className="mt-5 font-display text-[clamp(1.55rem,2.5vw,2.15rem)] font-medium leading-snug text-petrol">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-graphite/75">
                      {item.text}
                    </p>
                    <ul className="mt-7 flex max-w-md flex-wrap gap-2" aria-label="Procedimentos relacionados">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-petrol/15 bg-mist/50 px-3.5 py-1.5 text-[11.5px] font-medium text-petrol transition-colors duration-300 hover:border-copper hover:text-copper"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waLink(item.waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-8 inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-petrol transition-colors duration-300 hover:text-copper"
                    >
                      Agendar esta especialidade
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                    </a>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
