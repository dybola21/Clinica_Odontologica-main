import { IMAGES, WHATSAPP_URL } from "../data";
import Reveal, { CountUp } from "./Reveal";
import { ArrowRight } from "./icons";

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="bg-petrol text-ivory"
    >
      <div className="grid md:grid-cols-12">
        {/* retrato sangrando até a borda esquerda */}
        <div className="relative min-h-[460px] md:col-span-5 md:min-h-[760px]">
          <img
            src={IMAGES.retrato}
            alt="Retrato da Dra. Daiana de Aguiar, cirurgiã bucomaxilofacial, de jaleco branco no consultório"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>

        {/* texto à direita */}
        <div className="md:col-span-7">
          <div className="mx-auto max-w-[760px] px-5 py-20 sm:px-8 md:py-28 lg:py-32 lg:pl-16 lg:pr-10">
            <Reveal>
              <p className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-copper-soft">
                <span className="h-px w-10 bg-copper" aria-hidden="true" />
                Sobre
              </p>
              <h2
                id="sobre-titulo"
                className="mt-5 font-display text-[clamp(2.3rem,4.4vw,3.6rem)] font-medium leading-[1.04]"
              >
                Dra. Daiana de Aguiar
              </h2>
              <p className="mt-4 text-[10.5px] font-semibold uppercase tracking-[0.26em] text-mist/55 sm:text-[11px]">
                Cirurgiã bucomaxilofacial · Responsável técnica
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-[15.5px] leading-relaxed text-mist/85">
                À frente da clínica como responsável técnica, a Dra. Daiana une o
                rigor da cirurgia bucomaxilofacial a um atendimento genuinamente
                humano. Cada plano de tratamento é explicado com calma e clareza
                — antes de qualquer decisão, você entende exatamente o que será
                feito e por quê.
              </p>
              <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-mist/85">
                O acompanhamento acontece antes, durante e depois do
                procedimento: avaliação criteriosa, técnica precisa e retornos de
                pós-operatório para garantir uma recuperação tranquila, sem
                surpresas. É assim que uma cirurgia deixa de ser um momento de
                medo.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-10 max-w-xl border-l-2 border-copper pl-6 font-display text-[1.3rem] italic leading-snug text-ivory sm:text-[1.45rem]">
                “Precisão cirúrgica se estuda a vida inteira; cuidado de verdade
                se pratica em cada atendimento.”
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-ivory/12 pt-8">
                <div>
                  <p className="font-display text-[2.1rem] font-semibold leading-none text-copper-soft sm:text-[2.6rem]">
                    5,0
                  </p>
                  <p className="mt-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-mist/55">
                    nota no Google
                  </p>
                </div>
                <div>
                  <p className="font-display text-[2.1rem] font-semibold leading-none text-copper-soft sm:text-[2.6rem]">
                    <CountUp end={153} />
                  </p>
                  <p className="mt-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-mist/55">
                    avaliações de pacientes
                  </p>
                </div>
                <div>
                  <p className="font-display text-[2.1rem] font-semibold leading-none text-copper-soft sm:text-[2.6rem]">
                    3
                  </p>
                  <p className="mt-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-mist/55">
                    frentes de cuidado
                  </p>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-11 inline-flex items-center gap-3 rounded-full border border-copper/70 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-copper-soft transition-all duration-300 hover:bg-copper hover:text-abyss"
              >
                Agendar avaliação
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
