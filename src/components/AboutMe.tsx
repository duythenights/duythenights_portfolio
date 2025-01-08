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
        <p className="text-muted-foreground">
          {/* Write 1-2 sentences about yourself */}
          Watching the Silicon Valley series at the age of 19 , now I&apos;m a
          Frontend Developer. My favorite part of programming is the
          problem-solving aspect. I love the feeling of finally figuring out a
          solution to a problem. My core stack is React, Next.js, with Shadcn-ui
          and Tanstackquery. I am also familiar with TypeScript and Prisma. I am
          always looking to learn new technologies. I am currently looking for a
          full-time position as a Frontend developer.
        </p>
      </CardContent>
    </Card>
  );
};
