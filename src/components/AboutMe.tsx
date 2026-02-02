"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useMediaQuery from "@/hook/useMediaQuery";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { RainbowButton } from "./magicui/rainbow-button";
import ThemeToggle from "./ui/ThemeToggle";

export const AboutMe = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 768px)");
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row justify-between items-baseline">
        <CardTitle>About Me</CardTitle>
        <div className="flex items-center gap-2 ">
          <Link target="_blank" href={"https://dev.to/duythenight"}>
            <RainbowButton className="text-[12px] !h-[33px] rounded-md px-4 py-0 flex ">
              Blog <ExternalLink size={12} className="ml-1" />
            </RainbowButton>
          </Link>
          {isDesktopOrLaptop && <ThemeToggle />}
        </div>
      </CardHeader>
      <CardContent className="text-customBlack dark:text-[#fafafa]">
        <p className="leading-relaxed">
          Hello, World! I am <span className="font-bold">Duy</span>, a{" "}
          <span className="font-bold">Mid-level Frontend Developer</span> with{" "}
          <span className="font-bold">3.5+ years</span> of experience building
          high-performance web applications. Proven track record of driving
          business growth, including a{" "}
          <span className="font-bold">~300% revenue increase</span> (from $300K
          to $1M/month) by spearheading a successful migration from legacy PHP
          to Next.js.
        </p>
        <p className="leading-relaxed mt-4">
          Expert in{" "}
          <span className="font-bold">
            Monorepo and Micro-frontend architectures
          </span>
          , performance optimization, and secure payment integration at scale.
          Skilled in hybrid rendering (SSR, ISR), Core Web Vitals, and
          pixel-perfect, responsive interfaces for high-traffic platforms.
        </p>
        <p className="leading-relaxed mt-4">
          Experienced in{" "}
          <span className="font-bold">creating smooth animations</span> with
          GSAP, <span className="font-bold">real-time features</span>{" "}
          (WebSockets, live notifications), and{" "}
          <span className="font-bold">payment gateways</span> (Stripe,
          Airwallex) with PCI DSS and 3D-Secure compliance. Strong collaborator
          with Marketing on GTM, SEO metadata, and legal compliance (Cookie
          Consent, RDP) for US and EU markets.
        </p>
      </CardContent>
    </Card>
  );
};
