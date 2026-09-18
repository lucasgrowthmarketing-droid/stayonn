"use client";
import { Check, ArrowUpRight, LockKeyhole } from "lucide-react";
import { plans, money, Plan } from "@/data/pricing";
import { Reveal } from "./Motion";
export default function Pricing({
  selected,
  onSelect,
  onBuy,
}: {
  selected: Plan;
  onSelect: (p: Plan) => void;
  onBuy: () => void;
}) {
  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <Reveal>
          <div className="pricing-heading">
            <p className="eyebrow">GET STARTED</p>
            <h2>
              Simple. Transparent.
              <br />
              <span className="muted">Built for progress.</span>
            </h2>
            <p className="section-description">Escolha seu próximo passo.</p>
          </div>
          <fieldset className="plans">
            <legend className="sr-only">Escolha sua opção de compra</legend>
            {plans.map((plan) => (
              <label
                className={`plan ${selected.id === plan.id ? "selected" : ""}`}
                key={plan.id}
              >
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  checked={selected.id === plan.id}
                  onChange={() => onSelect(plan)}
                />
                <div className="plan-top">
                  <span className="radio-dot" />
                  {plan.popular && (
                    <span className="popular-badge">MOST POPULAR</span>
                  )}
                </div>
                <h3>{plan.title}</h3>
                <p className="plan-note">{plan.note}</p>
                <div className="plan-price">
                  {money(plan.price).split(",")[0]}
                  <span>,{money(plan.price).split(",")[1]}</span>
                </div>
                <p className="plan-cadence">{plan.cadence}</p>
                <div className="plan-bottom">
                  <Check size={14} />
                  30 dias de ONN OS incluídos
                </div>
              </label>
            ))}
          </fieldset>
          <div className="order-bar">
            <div>
              <span className="eyebrow">SEU PRÓXIMO PASSO</span>
              <p aria-live="polite">
                {selected.title}
                <span>
                  {money(selected.price)}
                  {selected.id === "subscription" ? " / mês" : ""}
                </span>
              </p>
            </div>
            <button className="button button-primary" onClick={onBuy}>
              Comprar agora <ArrowUpRight size={18} />
            </button>
          </div>
          <p className="pricing-note">
            <LockKeyhole size={13} /> Frete calculado no checkout quando as
            vendas estiverem disponíveis.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
