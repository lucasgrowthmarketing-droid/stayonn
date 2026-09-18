"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  X,
  LockKeyhole,
  ArrowRight,
  CreditCard,
  QrCode,
  ShoppingBag,
} from "lucide-react";
import { Plan, money } from "@/data/pricing";
import { checkoutProvider, CheckoutCustomer, validCPF } from "@/lib/checkout";
const fields = [
  {
    name: "name",
    label: "Nome completo",
    auto: "name",
    type: "text",
    placeholder: "Seu nome",
    pattern: ".+ .+",
  },
  {
    name: "email",
    label: "E-mail",
    auto: "email",
    type: "email",
    placeholder: "voce@email.com",
  },
  {
    name: "phone",
    label: "Telefone",
    auto: "tel",
    type: "tel",
    placeholder: "(11) 99999-9999",
    pattern: "[0-9 ()+\\-]{10,20}",
  },
  {
    name: "cpf",
    label: "CPF",
    auto: "off",
    type: "text",
    placeholder: "000.000.000-00",
    pattern: "[0-9.\\-]{11,14}",
  },
  {
    name: "cep",
    label: "CEP",
    auto: "postal-code",
    type: "text",
    placeholder: "00000-000",
    pattern: "[0-9]{5}-?[0-9]{3}",
  },
  {
    name: "address",
    label: "Endereço",
    auto: "address-line1",
    type: "text",
    placeholder: "Rua, bairro e cidade",
  },
  {
    name: "number",
    label: "Número",
    auto: "off",
    type: "text",
    placeholder: "123 ou s/n",
  },
  {
    name: "complement",
    label: "Complemento (opcional)",
    auto: "address-line2",
    type: "text",
    placeholder: "Apartamento, bloco...",
  },
];
export default function CheckoutDrawer({
  open,
  onOpenChange,
  plan,
  onReturnFocus,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  plan: Plan;
  onReturnFocus: () => void;
}) {
  const [method, setMethod] = useState<"pix" | "card">("pix"),
    [message, setMessage] = useState(""),
    [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const customer = Object.fromEntries(new FormData(form)) as CheckoutCustomer;
    if (!validCPF(customer.cpf)) {
      setMessage("Confira o CPF informado.");
      form.querySelector<HTMLInputElement>("[name=cpf]")?.focus();
      return;
    }
    setBusy(true);
    setMessage("");
    try {
      const result = await checkoutProvider.createSession({
        planId: plan.id,
        customer,
        paymentMethod: method,
      });
      if (result.status === "unavailable") setMessage(result.message);
      else window.location.assign(result.url);
    } catch {
      setMessage("Não foi possível continuar. Tente novamente.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        setMessage("");
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content
          className="checkout-drawer"
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            onReturnFocus();
          }}
        >
          <div className="sheet-handle" />
          <div className="checkout-header">
            <p className="eyebrow">YOUR NEXT CHAPTER</p>
            <Dialog.Title>Seu próximo passo.</Dialog.Title>
            <Dialog.Description>
              Revise sua escolha e seus dados.
            </Dialog.Description>
            <Dialog.Close className="close-button" aria-label="Fechar checkout">
              <X size={20} />
            </Dialog.Close>
          </div>
          <div className="checkout-scroll">
            <div className="checkout-summary">
              <span className="summary-icon">
                <ShoppingBag size={24} />
              </span>
              <div>
                <strong>ONN WORK</strong>
                <p>{plan.title}</p>
              </div>
              <strong>
                {money(plan.price)}
                <small>{plan.id === "subscription" ? "/ mês" : ""}</small>
              </strong>
            </div>
            <div className="summary-lines">
              <span>
                30 dias de ONN OS<strong>Incluídos</strong>
              </span>
              <span>
                Frete<strong>A calcular</strong>
              </span>
              <span>
                Subtotal<strong>{money(plan.price)}</strong>
              </span>
            </div>
            <p className="checkout-notice">
              Pré-lançamento. Explore o checkout; os pagamentos ainda não estão
              disponíveis.
            </p>
            <form onSubmit={submit}>
              <h3>Seus dados</h3>
              <div className="checkout-fields">
                {fields.map((field) => (
                  <label
                    key={field.name}
                    className={
                      ["name", "address", "complement"].includes(field.name)
                        ? "field-wide"
                        : ""
                    }
                  >
                    {field.label}
                    <input
                      name={field.name}
                      autoComplete={field.auto}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.name !== "complement"}
                      pattern={field.pattern}
                      inputMode={
                        ["cpf", "cep"].includes(field.name)
                          ? "numeric"
                          : undefined
                      }
                    />
                  </label>
                ))}
              </div>
              <fieldset className="payment-methods">
                <legend>Pagamento</legend>
                <label className={method === "pix" ? "selected" : ""}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="pix"
                    checked={method === "pix"}
                    onChange={() => setMethod("pix")}
                  />
                  <QrCode size={18} /> PIX
                </label>
                <label className={method === "card" ? "selected" : ""}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={method === "card"}
                    onChange={() => setMethod("card")}
                  />
                  <CreditCard size={18} /> Cartão
                </label>
              </fieldset>
              <p className="quiet-note">
                Nenhum dado de cartão será solicitado nesta prévia. Seus dados
                não serão enviados nem armazenados.
              </p>
              <button
                className="button button-primary checkout-submit"
                type="submit"
                disabled={busy}
              >
                {busy ? "Verificando…" : "Continuar"}
                <ArrowRight size={18} />
              </button>
              <p role="status" className="checkout-status">
                {message}
              </p>
              <div className="secure-note">
                <LockKeyhole size={13} /> Nenhuma cobrança nesta etapa.
              </div>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
