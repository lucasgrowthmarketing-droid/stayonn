// O backend deve validar SKU, preço, frete e assinatura, criar o pagamento
// no Mercado Pago e retornar a URL. Nunca enviar credenciais para o cliente.
export type CheckoutCustomer = {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  cep: string;
  address: string;
  number: string;
  complement: string;
};
export type CheckoutRequest = {
  planId: string;
  customer: CheckoutCustomer;
  paymentMethod: "pix" | "card";
};
export type CheckoutResult =
  | { status: "unavailable"; message: string }
  | { status: "redirect"; url: string };
export interface CheckoutProvider {
  createSession(request: CheckoutRequest): Promise<CheckoutResult>;
}
export const checkoutProvider: CheckoutProvider = {
  async createSession() {
    return {
      status: "unavailable",
      message:
        "As compras ainda não estão disponíveis. Nenhum pedido foi criado e nenhum pagamento foi realizado.",
    };
  },
};
export function validCPF(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 11 || /^(\d)\1+$/.test(digits)) return false;
  return [9, 10].every((length) => {
    const sum = digits
      .slice(0, length)
      .split("")
      .reduce((total, digit, i) => total + Number(digit) * (length + 1 - i), 0);
    return ((sum * 10) % 11) % 10 === Number(digits[length]);
  });
}
