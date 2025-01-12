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
          <span className="font-bold text-primary">Frontend Developer</span>{" "}
          with
          <span className="font-bold text-primary">
            {" "}
            1.5 years of experience
          </span>{" "}
          in building and optimizing
          <span className="font-bold text-primary"> CMS</span>,
          <span className="font-bold text-primary"> CRM</span>,
          <span className="font-bold text-primary"> LMS</span>, and
          <span className="font-bold text-primary"> Admin panels</span>. I
          specialize in
          <span className="font-bold text-primary">
            {" "}
            business logic optimization
          </span>
          ,
          <span className="font-bold text-primary">
            {" "}
            seamless API integrations
          </span>
          ,
          <span className="font-bold text-primary">
            {" "}
            performance scalability
          </span>
          , and
          <span className="font-bold text-primary">
            {" "}
            enhancing user experience
          </span>
          . Proficient in
          <span className="font-bold text-primary"> SEO best practices</span>,
          <span className="font-bold text-primary">
            {" "}
            Core Web Vitals compliance
          </span>
          , and
          <span className="font-bold text-primary"> modern Frontend tools</span>
          , I deliver high-quality,
          <span className="font-bold text-primary">
            {" "}
            client-focused solutions
          </span>
          .
        </p>
      </CardContent>
    </Card>
  );
};
