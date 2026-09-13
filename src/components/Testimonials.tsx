import type { CSSProperties } from "react";
import { TESTIMONIALS, MAPS_REVIEWS_URL, type Testimonial } from "../data";
import Reveal, { CountUp } from "./Reveal";
import { StarIcon, GoogleG, ArrowUpRight } from "./icons";

function Stars({ className = "size-4" }: { className?: string }) {
  return (
    <span
      className="flex items-center gap-1 text-copper"
      role="img"
      aria-label="Cinco estrelas"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={className} />
      ))}
    </span>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="flex w-[300px] shrink-0 flex-col rounded-xl bg-[#fcf9f2] p-7 shadow-[0_14px_36px_rgba(10,40,41,0.10)] ring-1 ring-petrol/10 transition-transform duration-500 hover:-translate-y-1.5 sm:w-[390px] sm:p-8">
      <div className="flex items-center justify-between">
        <Stars />
        <GoogleG className="size-4.5" />
      </div>
      <blockquote className="mt-5 font-display text-[1.18rem] leading-snug text-petrol">
        “{t.quote}”
      </blockquote>
      <footer className="mt-auto flex items-center justify-between border-t border-petrol/10 pt-5">
        <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-copper">
          {t.tag}
        </p>
        <p className="text-[11px] text-graphite/45">avaliação no Google</p>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-titulo"
      className="relative overflow-hidden bg-mist py-24 text-graphite md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px]"
        style={{
          background:
            "radial-gradient(55% 100% at 8% 100%, rgba(18,63,66,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-copper">
              <span className="h-px w-10 bg-copper" aria-hidden="true" />
              Depoimentos
            </p>
            <h2
              id="depoimentos-titulo"
              className="mt-5 font-display text-[clamp(2.1rem,4.2vw,3.3rem)] font-medium leading-[1.06] text-petrol"
            >
              Quem sentou na cadeira,
              <br className="hidden md:block" /> recomenda.
            </h2>
          </Reveal>

          {/* prova em destaque */}
          <Reveal delay={140} className="lg:col-span-5">
            <div className="flex items-center gap-6 lg:justify-end">
              <p
                className="font-display text-[4.2rem] font-semibold leading-none text-petrol sm:text-[6.4rem]"
                aria-hidden="true"
              >
                5,0
              </p>
              <div>
                <Stars className="size-4.5" />
                <p className="mt-3 text-[14px] leading-snug text-graphite/80">
                  <strong className="font-display text-xl font-semibold text-petrol">
                    <CountUp end={153} />
                  </strong>{" "}
                  avaliações no{" "}
                  <GoogleG className="mr-0.5 inline size-3.5 align-[-2px]" />
                  <strong className="font-medium text-petrol">oogle</strong>
                </p>
                <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-copper">
                  nota máxima mantida
                </p>
              </div>
              <span className="sr-only">Nota 5,0 de 5,0 com 153 avaliações no Google</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* marquee de cards — deslize lento, pausa no hover */}
      <Reveal delay={100} className="relative mt-16 md:mt-20">
        <div
          className="marquee overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          }}
        >
          <div
            className="marquee-track flex w-max"
            style={{ "--marquee-duration": "68s" } as CSSProperties}
          >
            <div className="flex gap-6 pr-6">
              {TESTIMONIALS.map((t) => (
                <Card key={t.tag + t.quote.slice(0, 12)} t={t} />
              ))}
            </div>
            <div className="marquee-dup flex gap-6 pr-6" aria-hidden="true">
              {TESTIMONIALS.map((t) => (
                <Card key={`dup-${t.tag}-${t.quote.slice(0, 12)}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="relative mx-auto mt-12 flex max-w-[1360px] justify-center px-5 sm:px-8 lg:px-10">
        <a
          href={MAPS_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.18em] text-petrol transition-colors duration-300 hover:text-copper"
        >
          Ver as 153 avaliações no Google
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
}
