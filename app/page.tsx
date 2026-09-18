"use client";
import { useState, useRef } from "react";
import { MotionConfig } from "framer-motion";
import Ambience from "@/components/Ambience";
import WebTools from "@/components/WebTools";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EcosystemCarousel from "@/components/EcosystemCarousel";
import ProductSection from "@/components/ProductSection";
import OnnOSSection from "@/components/OnnOSSection";
import Pricing from "@/components/Pricing";
import CheckoutDrawer from "@/components/CheckoutDrawer";
import OnyxSection from "@/components/OnyxSection";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";
import { plans, Plan } from "@/data/pricing";
export default function Page() {
  const trigger = useRef<HTMLElement | null>(null);
  const openCheckout = () => {
    trigger.current = document.activeElement as HTMLElement;
    setCheckout(true);
  };
  const [checkout, setCheckout] = useState(false),
    [selected, setSelected] = useState<Plan>(plans[1]);
  return (
    <MotionConfig reducedMotion="user">
      <Ambience />
      <WebTools onSelect={setSelected} />
      <a className="skip-link" href="#main">
        Pular para conteúdo
      </a>
      <Header onCart={openCheckout} />
      <main id="main">
        <Hero />
        <EcosystemCarousel />
        <ProductSection />
        <OnnOSSection />
        <OnyxSection />
        <Pricing
          selected={selected}
          onSelect={setSelected}
          onBuy={openCheckout}
        />
        <Manifesto />
      </main>
      <Footer />
      <CheckoutDrawer
        open={checkout}
        onOpenChange={setCheckout}
        plan={selected}
        onReturnFocus={() => trigger.current?.focus()}
      />
    </MotionConfig>
  );
}
