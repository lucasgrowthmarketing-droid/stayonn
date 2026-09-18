"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Plus,
  Flame,
  LayoutGrid,
  BarChart3,
  User,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./Motion";
import { product } from "@/data/content";
export default function OnnOSSection() {
  const [done, setDone] = useState([true, true, false]);
  const count = done.filter(Boolean).length;
  return (
    <section id="os" className="os-section section">
      <div className="container two-columns">
        <Reveal className="os-copy">
          <p className="eyebrow">
            <span className="accent">02</span> / YOUR PERSONAL OPERATING SYSTEM
          </p>
          <h2>
            Data for
            <br />a better you<span className="accent">.</span>
          </h2>
          <p className="os-sub">Your routine. Your progress. One system.</p>
          <p className="section-description">
            Menos ruído. Mais direção.
            <br />
            Seus hábitos, suas tarefas e sua evolução no mesmo lugar.
          </p>
          <a href="#os-demo" className="button button-ghost">
            Conhecer ONN OS <ArrowUpRight size={18} />
          </a>
          <p className="os-included">
            <span>+</span>
            {product.osOffer}
          </p>
        </Reveal>
        <Reveal className="phone-scene">
          <div
            className="phone"
            id="os-demo"
            tabIndex={-1}
            role="region"
            aria-label="Demonstração interativa do ONN OS"
          >
            <div className="phone-top">
              <span>9:41</span>
              <div className="phone-camera" />
              <span>▮▮ ▰</span>
            </div>
            <div className="phone-content">
              <div className="app-wordmark">
                ONN <span>OS</span>
                <span className="app-avatar">Y</span>
              </div>
              <p className="phone-date">MONDAY, SEPTEMBER 21</p>
              <h3>Build your day.</h3>
              <div className="score-card">
                <div>
                  <span className="app-label">DAILY SCORE</span>
                  <div className="score-number">
                    {62 + count * 12}
                    <small>/ 100</small>
                  </div>
                  <span className="score-caption">One step further.</span>
                </div>
                <svg
                  className="score-ring"
                  viewBox="0 0 100 100"
                  role="img"
                  aria-label={`Pontuação demonstrativa ${62 + count * 12} de 100`}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#242c32"
                    fill="none"
                    strokeWidth="5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#22d3c9"
                    fill="none"
                    strokeWidth="5"
                    strokeDasharray={`${(62 + count * 12) * 2.51} 251`}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                  <path
                    d="M32 51l12 12 25-28"
                    stroke="#22d3c9"
                    fill="none"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <div className="streak">
                <Flame size={17} />
                <strong>7 day streak</strong>
                <span>Keep showing up.</span>
              </div>
              <div className="app-section-label">
                Your routine <span>{count}/3</span>
              </div>
              <div className="habit-list">
                {["90 min de deep work", "Mover o corpo", "Ler 10 páginas"].map(
                  (habit, i) => (
                    <button
                      className={done[i] ? "done" : ""}
                      key={habit}
                      onClick={() =>
                        setDone(done.map((v, j) => (i === j ? !v : v)))
                      }
                      aria-pressed={done[i]}
                    >
                      <span className="habit-check">
                        {done[i] ? <Check size={12} /> : null}
                      </span>
                      <span>{habit}</span>
                      <span className="habit-category">
                        {["WORK", "BODY", "MIND"][i]}
                      </span>
                    </button>
                  ),
                )}
              </div>
              <div className="app-section-label">
                Up next <Plus size={14} />
              </div>
              <div className="task-row">
                <span className="task-indicator" />
                <div>
                  Planejar a próxima semana<small>18:00 · Personal</small>
                </div>
                <ArrowRight size={14} />
              </div>
              <div className="app-bottom">
                <LayoutGrid size={18} />
                <BarChart3 size={18} />
                <User size={18} />
              </div>
            </div>
          </div>
          <p className="demo-caption">ONN OS · INTERACTIVE PREVIEW</p>
        </Reveal>
      </div>
    </section>
  );
}
