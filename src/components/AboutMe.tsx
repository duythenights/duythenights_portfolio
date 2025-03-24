"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";
import { ExternalLink } from "lucide-react";
import { RainbowButton } from "./magicui/rainbow-button";
import Link from "next/link";

export const AboutMe = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row justify-between items-baseline">
        <CardTitle>About Me</CardTitle>
        <div className="flex items-center gap-2 ">
          <Link target="_blank" href={"https://dev.to/duythenight"}>
            <RainbowButton className="text-[12px] !h-[33px] rounded-full px-4 py-0 flex ">
              Blog <ExternalLink size={12} className="ml-1" />
            </RainbowButton>
          </Link>
          {isDesktopOrLaptop && <ThemeSwitcher />}
        </div>
      </CardHeader>
      <CardContent className="text-customBlack dark:text-[#fafafa]">
        <p className="leading-relaxed">
          Hello, World! I am <span>Duy</span>, a Frontend Developer passionate
          about building high-performance, user-centric web applications with
          seamless functionality and engaging interfaces.
        </p>
        <p className="leading-relaxed mt-4">
          With 2 years of experience in web development, I specialize in
          optimizing and developing CMS, CRM, LMS, and admin panels while
          ensuring smooth API integrations, performance scalability, and
          business logic optimization.
        </p>
        <p className="leading-relaxed mt-4">
          Outside of my full-time work, I enjoy exploring modern frontend
          technologies, refining user experiences, and turning ideas into
          reality through personal projects.
        </p>
      </CardContent>
    </Card>
  );
};
