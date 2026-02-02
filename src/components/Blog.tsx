"use client";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ShineBorder } from "./magicui/shine-border";
import Image from "next/image";

const posts = [
  {
    title: "Blog post",
    excerpt: "Placeholder excerpt. Update with your blog content.",
    link: "https://dev.to/duythenight",
    image: "/projects/zentry.webp",
  },
  {
    title: "Blog post",
    excerpt: "Placeholder excerpt. Update with your blog content.",
    link: "https://dev.to/duythenight",
    image: "/projects/casecobra.webp",
  },
  {
    title: "Blog post",
    excerpt: "Placeholder excerpt. Update with your blog content.",
    link: "https://dev.to/duythenight",
    image: "/projects/designer.webp",
  },
  {
    title: "Blog post",
    excerpt: "Placeholder excerpt. Update with your blog content.",
    link: "https://dev.to/duythenight",
    image: "/projects/typing.webp",
  },
];

export const Blog = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-primary">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {posts.map((p, i) => (
          <Card key={i} className="relative overflow-hidden">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <CardContent className="pt-6 h-full">
              <div className="flex flex-col h-full">
                <Link
                  target="_blank"
                  href={p.link}
                  className="font-semibold text-primary hover:underline"
                >
                  {p.title}
                </Link>
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
                  {p.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    href={p.link}
                    className="flex items-center gap-2 text-sm text-primary hover:underline w-fit"
                    target="_blank"
                  >
                    Read more
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
