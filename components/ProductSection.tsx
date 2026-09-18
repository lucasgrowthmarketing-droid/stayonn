import Image from "next/image";
import { ArrowUpRight, Layers, CalendarDays, Grid2X2 } from "lucide-react";
import { product } from "@/data/content";
import { Reveal } from "./Motion";
export default function ProductSection() {
  return (
    <section id="work" className="product section">
      <div className="container two-columns">
        <Reveal className="product-image">
          <Image
            src="/onn-work-original.webp"
            alt="Conceito de embalagem preta apoiada em uma mesa escura, acompanhada de gummies"
            fill
            sizes="(max-width:700px) 100vw, 50vw"
          />
          <span className="photo-note">
            CONCEITO VISUAL · EMBALAGEM ILUSTRATIVA
          </span>
        </Reveal>
        <Reveal className="product-copy">
          <p className="eyebrow">
            <span className="accent">01</span> / MEET ONN WORK
          </p>
          <h2>
            Focus.
            <br />
            Energy.
            <br />
            <span className="gradient-text">Flow.</span>
          </h2>
          <p className="section-description">{product.description}</p>
          <div className="product-details">
            {product.details.map((detail, i) => {
              const Icon = [Layers, CalendarDays, Grid2X2][i];
              return (
                <span key={detail}>
                  <Icon size={17} />
                  {detail}
                </span>
              );
            })}
          </div>
          <a href="#pricing" className="button button-primary">
            Comprar ONN WORK <ArrowUpRight size={18} />
          </a>
          <p className="quiet-note">
            Built for your everyday. Designed for what’s next.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
