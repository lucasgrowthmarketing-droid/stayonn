import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Brand from "./Brand";
import { Reveal } from "./Motion";
export default function Manifesto() {
  return (
    <section id="story" className="manifesto">
      <Image
        src="/earth.webp"
        alt=""
        fill
        sizes="100vw"
        className="manifesto-background"
      />
      <Reveal className="manifesto-content container">
        <p className="eyebrow">FOR THE BUILDERS. THE DOERS. THE NEXT.</p>
        <div className="manifesto-brand">
          <Brand />
        </div>
        <h2>
          SEJA ONN<span className="accent">.</span>
        </h2>
        <p>Performance for people who build.</p>
        <a href="#movement" className="button button-ghost">
          Join the movement <ArrowUpRight size={18} />
        </a>
        <span className="manifesto-bottom">A HIGHER HUMAN TOMORROW</span>
      </Reveal>
    </section>
  );
}
