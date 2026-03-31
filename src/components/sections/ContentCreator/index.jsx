import { Search, ChevronLeft, MoreHorizontal } from "lucide-react";
import Title from "../../Title";

export default function ContentCreator() {
  return (
    <section
      id="content-creator"
      className="relative overflow-hidden bg-[color:var(--black)] py-24 px-6 md:px-16"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-(--primary-color)/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-(--purple-6)/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="relative h-[680px] md:h-[720px]">
          <div className="absolute left-10 top-4 h-[620px] w-[340px] rotate-[-6deg] rounded-[3.1rem] bg-[color:var(--secondary-color)] p-4 shadow-[0px_18px_44px_rgba(0,0,0,0.35)] ring-4 ring-(--primary-color)">
            <div className="h-full w-full rounded-[2.6rem] bg-[color:var(--secondary-color)] p-5 overflow-hidden">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-3xl font-bold text-[color:var(--text-primary)]">
                  Community
                </h3>
                <Search className="h-5 w-5 text-[color:var(--text-primary)]" />
              </div>

              <div className="mb-4 flex gap-6 text-lg">
                <span className="font-semibold text-(--primary-color) border-b-2 border-(--primary-color) pb-2">
                  Newsfeed
                </span>
                <span className="text-[color:var(--text-primary)]/35">
                  Explore
                </span>
              </div>

              <div className="mb-4 border-b border-[color:var(--surface-glass-border)] pb-3">
                <p className="mb-3 text-lg font-semibold text-[color:var(--text-primary)]">
                  My Community
                </p>
                <div className="flex items-center gap-3 overflow-hidden">
                  {[
                    "rgba(144, 147, 255, 0.25)",
                    "rgba(114, 23, 199, 0.25)",
                    "rgba(201, 201, 201, 0.15)",
                    "rgba(114, 23, 199, 0.3)",
                    "rgba(144, 147, 255, 0.3)",
                  ].map((color, i) => (
                    <div
                      key={i}
                      className="h-11 w-11 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <article className="rounded-2xl bg-[color:var(--card-soft)] p-4 shadow-[0px_10px_24px_rgba(28,28,23,0.08)]">
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[rgba(144,147,255,0.3)]" />
                  <div>
                    <p className="text-base font-bold text-[color:var(--text-primary)]">
                      Jackie Jones
                    </p>
                    <p className="text-xs text-[color:var(--text-primary)]/55">
                      30 mins
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[color:var(--text-muted-foreground)]">
                  Doctors, scientists, intelligence agents and government
                  officials have all been trying to find out...
                </p>
                <div className="mt-4 flex gap-4 text-xs text-[color:var(--text-primary)]/55">
                  <span>Like</span>
                  <span>Comment</span>
                  <span>Share</span>
                </div>
              </article>

              <div className="mt-4 rounded-2xl bg-[color:var(--card-soft)] p-3">
                <div className="h-24 rounded-xl bg-gradient-to-br from-(--primary-color)/30 to-[rgba(144,147,255,0.35)]" />
              </div>

              <div className="mt-4 grid grid-cols-5 gap-2 text-center text-[10px] text-[color:var(--text-primary)]/50">
                <span>HOME</span>
                <span>EXPLORE</span>
                <span>CHAT</span>
                <span className="font-semibold text-(--primary-color)">
                  COMMUNITY
                </span>
                <span>MORE</span>
              </div>
            </div>
          </div>

          <div className="absolute -right-20 -top-8 z-20">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface/80 backdrop-blur-md shadow-[0px_12px_28px_rgba(28,28,23,0.18)] md:h-24 md:w-24">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] md:h-14 md:w-14">
                <svg
                  className="h-7 w-7 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.493-3.89 3.777-3.89 1.095 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 top-16 z-20">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface/80 backdrop-blur-md shadow-[0px_12px_28px_rgba(28,28,23,0.18)] md:h-16 md:w-16">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] md:h-10 md:w-10">
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 bottom-16 z-20">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface/80 backdrop-blur-md shadow-[0px_12px_28px_rgba(28,28,23,0.18)] md:h-16 md:w-16">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1DB954] md:h-10 md:w-10">
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.502 17.34a.75.75 0 0 1-1.03.245c-2.82-1.723-6.37-2.114-10.55-1.165a.75.75 0 1 1-.333-1.463c4.575-1.04 8.513-.594 11.665 1.33a.75.75 0 0 1 .248 1.053zm1.47-3.267a.938.938 0 0 1-1.288.306c-3.23-1.985-8.152-2.56-11.97-1.4a.938.938 0 0 1-.544-1.795c4.362-1.323 9.79-.68 13.494 1.595a.938.938 0 0 1 .308 1.294zm.126-3.4C15.164 8.337 8.666 8.12 4.91 9.258a1.125 1.125 0 0 1-.653-2.153c4.31-1.307 11.478-1.054 15.995 1.628a1.125 1.125 0 1 1-1.154 1.94z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute -right-12 bottom-2 z-20">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface/80 backdrop-blur-md shadow-[0px_12px_28px_rgba(28,28,23,0.18)] md:h-24 md:w-24">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full md:h-14 md:w-14"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                }}
              >
                <svg
                  className="h-7 w-7 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.8A4 4 0 0 0 3.8 7.8v8.4a4 4 0 0 0 4 4h8.4a4 4 0 0 0 4-4V7.8a4 4 0 0 0-4-4H7.8zm4.2 2.7A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5zm0 1.8A3.7 3.7 0 1 0 15.7 12 3.7 3.7 0 0 0 12 8.3zm6.1-2.1a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute right-4 top-20 max-w-[260px] rounded-xl bg-[color:var(--secondary-color)] p-4 shadow-[0px_12px_28px_rgba(0,0,0,0.22)]">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-(--primary-color)/20" />
              <p className="text-sm font-semibold text-[color:var(--text-primary)]">
                Mana
              </p>
            </div>
            <p className="text-sm leading-relaxed text-[color:var(--text-muted-foreground)]">
              Good morning! Anyone would like to go picnic today?
            </p>
          </div>

          <div className="absolute right-0 top-[255px] max-w-[320px] rounded-xl bg-[color:var(--secondary-color)] p-4 shadow-[0px_12px_28px_rgba(0,0,0,0.22)]">
            <div className="mb-3 flex items-center justify-between text-[color:var(--text-primary)]/60">
              <ChevronLeft className="h-5 w-5" />
              <MoreHorizontal className="h-5 w-5" />
            </div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-[rgba(144,147,255,0.25)]" />
              <div>
                <p className="text-xl font-bold text-[color:var(--text-primary)]">
                  Cheryl Stanley
                </p>
                <p className="text-xs text-[color:var(--text-primary)]/55">
                  355 posts · 123 following · 13.4k followers
                </p>
              </div>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-[color:var(--text-muted-foreground)]">
              Happy, free, confused and lonely at the same time.
            </p>
            <button className="w-full rounded-md bg-(--primary-color) py-3 text-sm font-semibold text-white hover:brightness-110 transition cursor-pointer">
              + Follow
            </button>
          </div>
        </div>

        <div>
          <Title
            eyebrow="Criadora de conteúdo"
            text="Conteúdo com foco em"
            highlight="tecnologia e carreira"
            description="Compartilho tutoriais, boas práticas e bastidores reais do dia a dia como desenvolvedora para ajudar pessoas que estão evoluindo na área de tecnologia."
            align="left"
          />

          {/* <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-(--primary-color) px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
            >
              Ver colaborações
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--surface-glass-border)] bg-[color:var(--surface-glass)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--text-primary)] transition hover:border-(--primary-color) hover:text-(--primary-color)"
            >
              Como eu trabalho
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
