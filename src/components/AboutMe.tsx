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
          <span className="font-bold">Frontend Developer </span>passionate about
          building high-performance, user-centric web applications with seamless
          functionality and engaging interfaces.
        </p>
        <p className="leading-relaxed mt-4">
          With <span className="font-bold"> 2 years of experience</span>{" "}
          building and enhancing
          <span className="font-bold"> CMS, CRM </span>, and
          <span className="font-bold"> admin panel systems </span>. Proficient
          in <span className="font-bold">React, Next.js, TypeScript</span>, API
          integration,{" "}
          <span className="font-bold">real-time data handling </span>, and{" "}
          <span className="font-bold">performance optimization</span>.
        </p>
        <p className="leading-relaxed mt-4">
          Experienced in{" "}
          <span className="font-bold"> creating smooth animations</span> using
          GSAP to enhance user experience. Able to{" "}
          <span className="font-bold"> develop responsive microsites</span>{" "}
          optimized for mobile support. Strong team player{" "}
          <span className="font-bold">working well in Agile environments</span>{" "}
          to deliver quality work.
        </p>
        <p className="leading-relaxed mt-4">
          I have experience
          <span className="font-bold"> scaling applications</span> to support
          <span className="font-bold"> multiple countries and languages</span>,
          including a project deployed across 11 countries.
        </p>
      </CardContent>
    </Card>
  );
};
