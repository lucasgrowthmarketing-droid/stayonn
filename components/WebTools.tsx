"use client";
import { useEffect } from "react";
import { flushSync } from "react-dom";
import { plans, Plan } from "@/data/pricing";
type Context = {
  registerTool: (
    tool: {
      name: string;
      description: string;
      inputSchema: object;
      annotations: { readOnlyHint: boolean };
      execute: (input: unknown) => unknown;
    },
    options: { signal: AbortSignal },
  ) => void | Promise<void>;
};
export default function WebTools({
  onSelect,
}: {
  onSelect: (plan: Plan) => void;
}) {
  useEffect(() => {
    const context = (document as Document & { modelContext?: Context })
      .modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    try {
      void Promise.resolve(
        context.registerTool(
          {
            name: "configure_onn_order",
            description:
              "Seleciona uma opção de ONN WORK e atualiza o resumo visível. Não cria pedido nem efetua cobrança.",
            inputSchema: {
              type: "object",
              properties: {
                planId: { type: "string", enum: plans.map((p) => p.id) },
              },
              required: ["planId"],
              additionalProperties: false,
            },
            annotations: { readOnlyHint: false },
            execute(input) {
              if (
                !input ||
                typeof input !== "object" ||
                !("planId" in input) ||
                Object.keys(input).length !== 1
              )
                throw Error("Informe somente planId.");
              const plan = plans.find((p) => p.id === input.planId);
              if (!plan) throw Error("Plano inválido.");
              flushSync(() => onSelect(plan));
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "instant" });
              return {
                planId: plan.id,
                title: plan.title,
                subtotal: plan.price,
                currency: "BRL",
                paymentAvailable: false,
              };
            },
          },
          { signal: lifecycle.signal },
        ),
      ).catch(() => {});
    } catch {}
    return () => lifecycle.abort();
  }, [onSelect]);
  return null;
}
