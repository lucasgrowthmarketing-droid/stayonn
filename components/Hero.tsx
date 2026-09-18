import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-scene">
        <Image
          src="/hero-dusk.webp"
          alt="Notebook preto e garrafa sobre mesa escura em um escritório, com a cidade iluminada ao fim do dia"
          fill
          priority
          sizes="(max-width: 700px) 100vw, 75vw"
        />
      </div>
      <div className="hero-content container">
        <p className="eyebrow hero-label">
          <span />
          FOCUS · ENERGY · ROUTINE · PROGRESS
        </p>
        <h1 id="hero-title">
          <span>Performance</span>
          <span>for people</span>
          <span>
            who build<span className="accent">.</span>
          </span>
        </h1>
        <p className="hero-description">
          Supplements. Software. Community.
          <br />A higher tomorrow, by design.
        </p>
        <div className="hero-actions">
          <a href="#ecosystem" className="button button-primary">
            Conhecer ONN <ArrowUpRight size={18} />
          </a>
          <a href="#os" className="button button-ghost">
            Explorar ONN OS <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>A HIGHER HUMAN TOMORROW</span>
        <a href="#ecosystem" aria-label="Explorar o ecossistema">
          <ArrowDown size={17} /> SCROLL TO EXPLORE
        </a>
        <span className="hero-coordinate">BUILT FOR WHAT’S NEXT.</span>
      </div>
    </section>
  );
}
