export type Plan = {
  id: string;
  title: string;
  price: number;
  units: number | null;
  cadence: string;
  note: string;
  popular?: boolean;
};
export const plans: Plan[] = [
  {
    id: "single",
    title: "1 unidade",
    price: 89,
    units: 1,
    cadence: "compra única",
    note: "Seu primeiro passo.",
  },
  {
    id: "trio",
    title: "3 unidades",
    price: 249,
    units: 3,
    cadence: "compra única",
    note: "R$ 83 por unidade.",
    popular: true,
  },
  {
    id: "subscription",
    title: "Assinatura mensal",
    price: 199,
    units: null,
    cadence: "/ mês",
    note: "Construa sua constância.",
  },
];
export const money = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    value,
  );
