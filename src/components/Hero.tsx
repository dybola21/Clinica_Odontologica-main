import { IMAGES, WHATSAPP_URL } from "../data";
import { WhatsAppIcon, ArrowDown, StarIcon, GoogleG } from "./icons";

const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Apresentação da clínica"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-abyss"
    >
      {/* imagem full-bleed, foco à direita */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={IMAGES.hero}
          alt=""
          className="kenburns h-full w-full object-cover object-[75%_center]"
          style={{ transformOrigin: "72% 50%" }}
        />
        {/* degradê esquerda → direita atrás do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/85 via-[42%] to-abyss/10 to-[86%]" />
        {/* respiro superior para o cabeçalho + vinheta suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/70 via-transparent to-transparent [height:38%]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(120% 90% at 72% 30%, transparent 42%, rgba(10,40,41,0.5) 100%)",
          }}
        />
      </div>

      {/* conteúdo à esquerda */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1360px] flex-1 items-center px-5 pb-[200px] pt-28 sm:px-8 md:pb-[250px] md:pt-32 lg:px-10">
        <div className="max-w-2xl">
          <p
            className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-copper-soft sm:text-[11px]"
            style={{
              opacity: 0,
              animation: `fade-in-soft 0.9s ${EASE} 0.15s forwards`,
            }}
          >
            <span className="h-px w-10 bg-copper" aria-hidden="true" />
            Cirurgia Bucomaxilofacial · DTM · Dor Orofacial
          </p>

          <h1 className="mt-7 font-display text-[clamp(2.7rem,6.2vw,5.3rem)] font-medium leading-[1.03] tracking-[-0.01em] text-ivory">
            <span className="mask-line">
              <span style={{ animationDelay: "0.25s" }}>Cirurgia oral</span>
            </span>
            <span className="mask-line">
              <span style={{ animationDelay: "0.4s" }}>
                <em className="font-light italic text-copper-soft">sem medo,</em>
              </span>
            </span>
            <span className="mask-line">
              <span style={{ animationDelay: "0.55s" }}>recuperação tranquila.</span>
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl text-[15px] font-light leading-relaxed text-mist/90 sm:text-lg"
            style={{
              opacity: 0,
              animation: `fade-in-soft 0.9s ${EASE} 0.85s forwards`,
            }}
          >
            Dra. Daiana de Aguiar — referência em Duque de Caxias,{" "}
            <strong className="font-semibold text-ivory">5,0 no Google</strong>{" "}
            <span className="whitespace-nowrap">(153 avaliações)</span>.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4"
            style={{
              opacity: 0,
              animation: `fade-in-soft 0.9s ${EASE} 1.05s forwards`,
            }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-copper px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-abyss transition-all duration-300 hover:bg-copper-soft hover:shadow-[0_10px_30px_rgba(185,120,75,0.4)]"
            >
              <WhatsAppIcon className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#especialidades"
              className="group inline-flex items-center gap-3 rounded-full border border-ivory/25 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-copper hover:text-copper-soft"
            >
              Especialidades
              <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>

          {/* prova social em destaque */}
          <div
            className="mt-12 flex max-w-md items-center gap-4 border-t border-ivory/15 pt-6"
            style={{
              opacity: 0,
              animation: `fade-in-soft 0.9s ${EASE} 1.25s forwards`,
            }}
          >
            <span className="flex items-center gap-1 text-copper" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="size-4" />
              ))}
            </span>
            <p className="text-[13px] text-mist/85">
              <strong className="font-display text-lg font-semibold text-ivory">5,0</strong>{" "}
              · 153 avaliações no <GoogleG className="mr-0.5 inline size-3.5 align-[-2px]" />
              <span className="font-medium text-ivory">oogle</span>
            </p>
          </div>
        </div>
      </div>

      {/* indicador de rolagem */}
      <div
        className="absolute bottom-[280px] left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.34em] text-mist/55">
          role
        </span>
        <span className="block h-12 w-px overflow-hidden bg-ivory/15">
          <span className="scroll-cue block h-full w-full bg-copper" />
        </span>
      </div>

      {/* véu de transição para a próxima dobra (ivory) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[220px] bg-gradient-to-b from-transparent to-ivory md:h-[260px]"
        aria-hidden="true"
      />

    </section>
  );
}
