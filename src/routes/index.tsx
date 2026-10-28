import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  chapters,
  mapsHref,
  phoneDisplay,
  phoneHref,
  services,
  whatsappHref,
} from "@/data/work";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("overture");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-chapter]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement && visible.target.dataset.chapter) {
          setActive(visible.target.dataset.chapter);
        }
      },
      { threshold: [0.45, 0.6] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(height > 0 ? window.scrollY / height : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activeChapter = chapters.find((chapter) => chapter.id === active);

  return (
    <div className="bg-ink text-foam">
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-ink-soft" aria-hidden>
        <div className="h-full origin-left bg-gold" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <header className="topbar fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-3 px-4 pb-3">
        <a href="#overture" className="flex min-h-11 shrink-0 items-center" onClick={() => setOpen(false)}>
          <img src="/brand/logo.png" alt="HA+ARCHITECTS" className="h-14 w-auto max-w-none sm:h-16" />
        </a>
        <div className="flex items-center gap-2">
          <a href={whatsappHref} className="tap kicker flex min-h-11 items-center px-2 text-gold">
            Inquire
          </a>
          <button
            type="button"
            className="tap kicker min-h-11 px-2 text-foam"
            aria-expanded={open}
            aria-controls="index"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Index"}
          </button>
        </div>
      </header>

      {activeChapter ? (
        <p className="pointer-events-none fixed top-1/2 left-6 z-30 hidden -translate-y-1/2 font-display text-2xl text-gold lg:block">
          {activeChapter.index}
        </p>
      ) : null}

      {open ? (
        <nav id="index" className="fixed inset-0 z-40 overflow-y-auto bg-ink px-6 pt-24 pb-16" aria-label="Index">
          <p className="kicker text-gold">Contents</p>
          <ul className="mt-8">
            {chapters.map((chapter) => (
              <li key={chapter.id} className="border-t border-foam/15">
                <button
                  type="button"
                  className="tap flex w-full items-baseline justify-between gap-4 py-4 text-left"
                  onClick={() => go(chapter.id)}
                >
                  <span className="font-display text-4xl leading-none">{chapter.title}</span>
                  <span className="kicker text-mist">{chapter.index}</span>
                </button>
              </li>
            ))}
            <li className="border-t border-foam/15">
              <button type="button" className="tap flex w-full items-baseline justify-between gap-4 py-4 text-left" onClick={() => go("studio")}>
                <span className="font-display text-4xl leading-none">Studio</span>
                <span className="kicker text-mist">Visit</span>
              </button>
            </li>
          </ul>
        </nav>
      ) : null}

      <main>
        <section id="overture" data-chapter="overture" className="plate">
          <div className="flex h-full flex-col justify-end px-5 pt-28 pb-10 sm:px-10 sm:pb-14">
            <img src="/brand/logo.png" alt="" className="mb-8 w-52 max-w-full sm:w-64" />
            <div className="rule" />
            <p className="mt-6 max-w-md text-lg leading-snug text-foam sm:text-xl">
              Houses, commercial buildings, interiors, and places of worship. Drawn in Quetta.
            </p>
            <p className="kicker mt-8 text-gold">Scroll</p>
          </div>
        </section>

        {chapters.map((chapter) => (
          <section id={chapter.id} key={chapter.id} data-chapter={chapter.id} className="plate">
            <div className="hem" aria-hidden />
            <img
              src={chapter.image}
              alt={chapter.alt}
              className="plate-img"
              style={{ objectPosition: chapter.focus }}
              draggable={false}
              loading={chapter.index === "01" ? "eager" : "lazy"}
            />
            <div className="scrim absolute inset-x-0 bottom-0 z-10 h-2/5" />
            <div className="absolute inset-x-0 bottom-0 z-20 px-5 pt-16 pb-8 sm:px-10 sm:pb-12">
              <p className="kicker text-gold">{chapter.index}</p>
              <h2 className="mt-2 font-display text-5xl leading-none text-foam sm:text-7xl">{chapter.title}</h2>
              <p className="kicker mt-4 text-foam/80">
                {chapter.kind}
                <span className="px-2 text-gold">·</span>
                {chapter.state}
              </p>
            </div>
          </section>
        ))}

        <section id="sign" data-chapter="sign" className="plate">
          <div className="hem" aria-hidden />
          <img
            src="/work/sign.jpg"
            alt="The HA+ARCHITECTS mark mounted on a dark wall"
            className="plate-img"
            style={{ objectPosition: "center" }}
          />
          <div className="scrim absolute inset-x-0 bottom-0 z-10 h-1/3" />
          <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-8 sm:px-10 sm:pb-12">
            <p className="kicker text-gold">The mark</p>
            <h2 className="mt-2 font-display text-5xl leading-none sm:text-7xl">Hanif Agha</h2>
          </div>
        </section>

        <section id="studio" data-chapter="studio" className="studio bg-paper text-ink">
          <div className="hem" aria-hidden />
          <div className="mx-auto max-w-3xl px-5 pt-24 pb-20 sm:px-10">
            <p className="kicker text-ink-soft">The studio</p>
            <h2 className="display mt-5 text-ink">
              A practice
              <br />
              above Regal Chowk.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              Hanif Agha leads HA+Architects from Office 5, on the second floor at Regal Chowk.
              The chapters above are the work. Designs are labelled as designs. Two of them are
              photographs of buildings already standing in Quetta.
            </p>

            <ol className="mt-14 border-t border-line">
              {services.map(([index, name]) => (
                <li key={name} className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                  <span className="font-display text-4xl leading-none">{name}</span>
                  <span className="kicker text-mist">{index}</span>
                </li>
              ))}
            </ol>

            <figure className="mt-16 max-w-xl">
              <blockquote className="font-display text-3xl leading-snug text-ink">
                “I am extremely satisfied with the design and work of the architect. He designed my
                house beautifully.”
              </blockquote>
              <figcaption className="kicker mt-5 text-mist">A client, on Google · 5.0 from 13 reviews</figcaption>
            </figure>

            <div id="visit" className="mt-20 grid gap-12 sm:grid-cols-2">
              <address className="font-display text-3xl leading-tight text-ink not-italic">
                Office 5, Second Floor
                <br />
                Kazi, Regal Chowk
                <br />
                Main Jinnah Road
                <br />
                Quetta 87300
              </address>
              <div>
                <p className="text-lg text-ink-soft">Open · closes 9 pm</p>
                <p className="mt-2 text-lg text-ink">{phoneDisplay}</p>
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href={whatsappHref}
                    className="tap inline-flex min-h-12 items-center justify-center bg-ink px-5 text-foam"
                  >
                    WhatsApp the studio
                  </a>
                  <a
                    href={phoneHref}
                    className="tap inline-flex min-h-12 items-center justify-center border border-ink px-5 text-ink"
                  >
                    Call {phoneDisplay}
                  </a>
                  <a
                    href={mapsHref}
                    className="tap inline-flex min-h-12 items-center justify-center border border-ink px-5 text-ink"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>

            <p className="kicker mt-20 text-mist">HA+Architects · Quetta</p>
          </div>
        </section>
      </main>
    </div>
  );
}
