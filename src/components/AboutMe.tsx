"use client";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";

export const AboutMe = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row justify-between items-baseline">
        <CardTitle>About Me</CardTitle>
        {isDesktopOrLaptop && <ThemeSwitcher />}
      </CardHeader>
      <CardContent className="text-customBlack dark:text-[#fafafa]">
        <p className="leading-relaxed">
          Hello, World! I am <span>Duy</span>, a Frontend Developer passionate
          about building high-performance, user-centric web applications with
          seamless functionality and engaging interfaces.
        </p>
        <p className="leading-relaxed mt-4">
          With 1.5 years of experience in web development, I specialize in
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
