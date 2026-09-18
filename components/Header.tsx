"use client";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, ShoppingBag, X, ArrowUpRight } from "lucide-react";
import Brand from "./Brand";
export default function Header({ onCart }: { onCart: () => void }) {
  const [scrolled, setScrolled] = useState(false),
    [open, setOpen] = useState(false);
  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 20);
    listener();
    window.addEventListener("scroll", listener, { passive: true });
    return () => window.removeEventListener("scroll", listener);
  }, []);
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#" aria-label="ONN início">
          <Brand />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#work">Products</a>
          <a href="#os">ONN OS</a>
          <a href="#story">Our Story</a>
        </nav>
        <a href="#pricing" className="header-shop">
          Shop ONN <ArrowUpRight size={16} />
        </a>
        <div className="mobile-actions">
          <button onClick={onCart} aria-label="Abrir carrinho">
            <ShoppingBag size={21} />
          </button>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button aria-label="Abrir menu">
                <Menu size={23} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="dialog-overlay" />
              <Dialog.Content className="menu-panel">
                <Dialog.Title>Explore ONN</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Navegue pelas seções da página.
                </Dialog.Description>
                <Dialog.Close className="close-button" aria-label="Fechar menu">
                  <X />
                </Dialog.Close>
                <nav>
                  {[
                    ["Products", "#work"],
                    ["ONN OS", "#os"],
                    ["Our Story", "#story"],
                    ["Shop ONN", "#pricing"],
                  ].map(([label, href]) => (
                    <a key={href} href={href} onClick={() => setOpen(false)}>
                      {label}
                      <ArrowUpRight size={20} />
                    </a>
                  ))}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
