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
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          I am a{" "}
          <span className="text-primary font-medium">Frontend Developer</span>{" "}
          with{" "}
          <span className="text-primary font-medium">
            1.5 years of experience
          </span>{" "}
          in building and optimizing CMS, CRM, LMS, and admin panels.
        </p>

        <p className="text-muted-foreground leading-relaxed mt-4">
          My expertise includes{" "}
          <span className="text-primary font-medium">
            business logic optimization
          </span>
          , seamless API integrations, performance scalability, and enhancing
          user experience.
        </p>

        <p className="text-muted-foreground leading-relaxed mt-4">
          I specialize in delivering high-quality, client-focused solutions
          while ensuring
          <span className="text-primary font-medium"> SEO best practices</span>,
          <span className="text-primary font-medium">
            {" "}
            Core Web Vitals compliance
          </span>
          , and leveraging modern frontend tools for optimal performance.
        </p>
      </CardContent>
    </Card>
  );
};
