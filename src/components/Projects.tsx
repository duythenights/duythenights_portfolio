"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink, Github } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { ShineBorder } from "./magicui/shine-border";
import Image from "next/image";

export const projects = [
  {
    title: "Zentry Clone",
    description:
      "A visually polished landing page inspired by the Zentry NFT game ecosystem using Nextjs & GSAP.",
    tech: "React",
    link: "https://zentry.duy.onl/",
    source_code: "https://github.com/duythenights/Zentry-clone",
    image: "/projects/zentry.webp",
  },
  {
    title: "Casecobra",
    description:
      "A full-stack phone case customization platform built with Next.js, Prisma, and MongoDB.",
    tech: "NextJS",
    link: "https://casecobra.duy.onl/",
    source_code: "https://github.com/duythenights/casecobra",
    image: "/projects/casecobra.webp",
  },
  {
    title: "Designer's Portfolio",
    description:
      "A portfolio page for designer with beautiful animations using GSAP, Vue, Vite",
    tech: "Vue",
    link: "https://design.duy.onl/",
    source_code: "https://github.com/duythenights/ui-portfolio-design",
    image: "/projects/designer.webp",
  },
  {
    title: "IShowspeedType",
    description:
      "A practice typing website inspired by Ishowspeed & monkeytype built with Vue, Vite",
    tech: "Vue",
    link: "https://typing.duy.onl/",
    source_code: "https://github.com/duythenights/ishowspeedtype",
    image: "/projects/typing.webp",
  },
];

const techColors = {
  React: "bg-blue-500",
  NextJS: "bg-gray-500",
  Vue: "bg-green-500",
};

export const Projects = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-primary">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {projects.map((p, i) => (
          <Card key={i} className="relative overflow-hidden ">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

            <CardContent className="pt-6 h-full">
              <div className="flex flex-col h-full">
                <div className="flex justify-between">
                  <Link
                    target="_blank"
                    href={p.link}
                    className="font-semibold text-primary hover:underline"
                  >
                    {p.title}
                  </Link>
                  <Link target="_blank" href={p.source_code}>
                    <Github />
                  </Link>
                </div>
                <div className="w-full mt-2 h-[130px] rounded-md overflow-hidden">
                  <Link href={p.link} target="_blank">
                    <Image
                      className="w-full h-full object-cover"
                      src={p.image}
                      alt={p.title}
                      width={300}
                      height={200}
                    />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  {p.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={cn(
                        "size-4 rounded-full",
                        techColors[p.tech as keyof typeof techColors]
                      )}
                    />
                    <span className="text-xs font-medium text-muted-foreground">
                      {p.tech}
                    </span>
                  </div>
                  <Link
                    href={p.link}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                    target="_blank"
                  >
                    View Project
                    <ExternalLink className="inline-block size-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
