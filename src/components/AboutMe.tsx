"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useMediaQuery from "@/hook/useMediaQuery";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { RainbowButton } from "./magicui/rainbow-button";
import ThemeToggle from "./ui/ThemeToggle";

export const AboutMe = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
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
          Hello, World! I am <span>Duy</span>, a Frontend Developer passionate
          about building high-performance, user-centric web applications with
          seamless functionality and engaging interfaces.
        </p>
        <p className="leading-relaxed mt-4">
          With 2 years’ experience building and improving CMS, CRM, and admin
          panel systems. Skilled in React, Next.js, TypeScript, API integration,
          and performance optimization.
        </p>
        <p className="leading-relaxed mt-4">
          Experienced in creating smooth animations using GSAP to enhance user
          experience. Able to develop responsive microsites optimized for mobile
          support. Strong team player working well in Agile environments to
          deliver quality work.
        </p>
      </CardContent>
    </Card>
  );
};
