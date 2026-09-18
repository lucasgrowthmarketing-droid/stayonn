"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Brand from "./Brand";
import { footerGroups, socialLinks } from "@/data/content";
export default function Footer() {
  const [expanded, setExpanded] = useState(false);
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" aria-label="Voltar ao início">
            <Brand />
          </a>
          <p>Built for what’s next.</p>
        </div>
        {footerGroups.map((group) => (
          <div key={group.label} className="footer-group">
            <h3>{group.label}</h3>
            {group.items.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        ))}
        <div className="footer-group" id="movement">
          <h3>Stay ONN.</h3>
          {socialLinks.map((link) =>
            link.href ? (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ) : (
              <span key={link.label}>
                {link.label}
                <small>Em breve</small>
              </span>
            ),
          )}
        </div>
      </div>
      <div id="support" className="support">
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls="support-answer"
        >
          Precisa de ajuda?{expanded ? <Minus size={16} /> : <Plus size={16} />}
        </button>
        {expanded && (
          <p id="support-answer">
            A ONN está em pré-lançamento. Os canais oficiais de suporte e
            comunidade serão disponibilizados aqui antes da abertura das vendas.
          </p>
        )}
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} ONN. Todos os direitos reservados.
        </span>
        <span>FOCUS. ENERGY. ROUTINE. PROGRESS.</span>
      </div>
    </footer>
  );
}
