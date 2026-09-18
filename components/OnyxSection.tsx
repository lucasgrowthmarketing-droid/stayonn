import Image from "next/image";
import { Reveal } from "./Motion";
export default function OnyxSection() {
  return (
    <section className="onyx-section">
      <div className="container two-columns">
        <Reveal className="onyx-visual">
          <Image
            src="/onyx.webp"
            alt="Onyx, mascote preto da ONN com olhos amigáveis, moletom e detalhes ciano"
            width={850}
            height={850}
            sizes="(max-width:700px) 100vw, 480px"
          />
        </Reveal>
        <Reveal className="onyx-copy">
          <p className="eyebrow">MEET ONYX</p>
          <h2>
            Small being.
            <br />
            <span className="muted">Big potential.</span>
          </h2>
          <p className="section-description">
            O espírito ONN, sempre com você.
            <br />
            Um lembrete de que o próximo passo começa hoje.
          </p>
          <span className="onyx-signature">SAME SPIRIT. MORE POSSIBLE.</span>
        </Reveal>
      </div>
    </section>
  );
}
