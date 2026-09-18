"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Activity,
  Zap,
  Check,
} from "lucide-react";
import { ecosystem } from "@/data/content";
import { Reveal } from "./Motion";
export default function EcosystemCarousel() {
  const track = useRef<HTMLDivElement>(null),
    [active, setActive] = useState(0),
    [atEnd, setAtEnd] = useState(false);
  const move = (direction: number) => {
    const el = track.current;
    if (el)
      el.scrollBy({
        left:
          direction *
          (el.firstElementChild!.getBoundingClientRect().width + 20),
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  };
  return (
    <section id="ecosystem" className="ecosystem section">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE ONN ECOSYSTEM</p>
              <h2>
                A stronger you.
                <br />
                <span className="muted">A brighter tomorrow.</span>
              </h2>
            </div>
            <div className="carousel-controls">
              <button
                onClick={() => move(-1)}
                aria-label="Produto anterior"
                disabled={active === 0}
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => move(1)}
                aria-label="Próximo produto"
                disabled={atEnd}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <p className="section-description">
            Um ecossistema. Diferentes formas de ir além.
          </p>
        </Reveal>
        <div
          className="ecosystem-track"
          ref={track}
          onScroll={() => {
            const el = track.current;
            if (el) {
              setActive(
                Math.round(
                  el.scrollLeft /
                    (el.firstElementChild!.getBoundingClientRect().width + 20),
                ),
              );
              setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 3);
            }
          }}
          role="region"
          aria-label="Produtos do ecossistema ONN"
          tabIndex={0}
        >
          {ecosystem.map((item, index) => (
            <article
              className={`ecosystem-card ${active === index ? "selected" : ""}`}
              key={item.name}
            >
              <div className="card-visual">
                {item.type === "work" ? (
                  <Image
                    src="/onn-work-original.webp"
                    alt="Conceito visual do pote preto de gummies"
                    fill
                    sizes="(max-width:700px) 80vw, 340px"
                  />
                ) : item.type === "os" ? (
                  <div className="mini-os">
                    <span className="mini-os-title">Your daily momentum.</span>
                    <div className="mini-score">
                      <span>
                        86<small>/100</small>
                      </span>
                      <Activity size={22} />
                    </div>
                    <div className="mini-row">
                      <Check size={13} /> Deep work <span>90 min</span>
                    </div>
                    <div className="mini-row">
                      <Check size={13} /> Move your body <span>45 min</span>
                    </div>
                    <div className="mini-chart">
                      {[28, 42, 35, 65, 50, 80, 72].map((height, i) => (
                        <i key={i} style={{ height: height + "%" }} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="future-icon">
                    {item.type === "body" ? (
                      <Activity strokeWidth={0.6} />
                    ) : (
                      <Zap strokeWidth={0.6} />
                    )}
                    <span>THE NEXT CHAPTER.</span>
                  </div>
                )}
              </div>
              <div className="card-copy">
                <p className="eyebrow">{item.category}</p>
                <div className="card-title">
                  <h3>{item.name}</h3>
                  {item.available ? (
                    <a href={item.href} aria-label={`Conhecer ${item.name}`}>
                      <ArrowUpRight size={20} />
                    </a>
                  ) : (
                    <span className="coming-badge">Coming soon</span>
                  )}
                </div>
                <p>{item.line}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="carousel-footer">
          <span>SUPPLEMENTS. SOFTWARE. COMMUNITY.</span>
          <div>
            {ecosystem.map((_, i) => (
              <span key={i} className={active === i ? "active" : ""} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
