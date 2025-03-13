"use client";
import useMediaQuery from "@/hook/useMediaQuery";
import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

const socials = [
  {
    name: "Github",
    link: "https://github.com/duythenights",
    linkLabel: "duythenights",
    icon: <FaGithub className="size-4" />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/duythenights/",
    linkLabel: "duythenights",
    icon: <FaLinkedin className="size-4" />,
  },
  // TODO: Add more socials here
];

export const Profile = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-start gap-2 ">
          <div className="w-full flex flex-row justify-between items-top ">
            <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
              <Image
                width={150}
                height={150}
                quality={100}
                src="/avt.webp"
                alt="Profile Picture"
                className="rounded-full size-12 md:w-full h-auto object-cover border-2"
              />
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-bold md:mt-4 text-xl md:text-2xl">
                  Dinh Hoang Duy
                </h1>
                <p className="text-sm md:text-base text-muted-foreground">
                  Frontend Developer
                </p>
              </div>
            </div>
            {!isDesktopOrLaptop && <ThemeSwitcher />}
          </div>

          <p className="mt-2 text-start text-sm text-muted-foreground italic">
            &quot;Keep it simple&quot;<br></br>_duythenights
          </p>
          <p className="mt-2 text-start text-sm text-muted-foreground"></p>
          <Button className="mt-4 w-full" asChild>
            {/* TODO: Add resume */}
            {/* TODO: Add link to schedule a call with you using Calendly or Cal */}
            <Link
              href="/DINH_HOANG_DUY_FE_DEV.pdf"
              target="_blank"
              className="font-semibold uppercase"
            >
              CONTACT ME
            </Link>
          </Button>
          <div className="mt-4 mb-4 pb-2 flex flex-col space-y-2 border-t border-border pt-4 w-full">
            {socials.map((s, i) => {
              return (
                <Link
                  key={i}
                  href={s.link}
                  target="_blank"
                  className="cursor-pointer flex items-center gap-2 group"
                >
                  {s.icon}
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                    /{s.linkLabel}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
